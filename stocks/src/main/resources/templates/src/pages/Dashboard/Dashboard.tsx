import React, { useEffect, useContext, useState } from 'react';
import GlobalContext from '../../context/GlobalContext';
import { iStock, iContext } from '../../constants/types';
import { StockCard, UserDetailsPanel, StockGraph} from '../../components';
import { getAjax } from '../../shared/helpers';
import { ACTION_TYPES } from '../../context/GlobalContext/globalContextActions';
import './Dashboard.scss';

function Dashboard(): JSX.Element {
  const globalContext: iContext = useContext(GlobalContext);
  const { dispatch, state } = globalContext;
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () =>  {
   const data = await getAjax('/user-details');
   dispatch({type: ACTION_TYPES.UPDATE_USER_DETAILS, payload: data.user});
   setMounted(true);
  }

  const renderStocks = (): JSX.Element => {
    if(state &&
        state.user &&
        state.user.stocks &&
        state.user.stocks.length) {
      return <>{state.user.stocks.map((stock: iStock, i: number) => <StockCard key={stock.symbol+i} stock={stock} /> )}</>
    } else {
      return <h1 className="Dashboard__center">You haven't purchased any stocks yet.</h1>
    }
  }

  return (
    <>
      <UserDetailsPanel />
      <StockGraph />
      <div className="Dashboard__stockcards-wrap">
        {mounted && renderStocks()}
      </div>
    </>
  )
}

export default Dashboard;
