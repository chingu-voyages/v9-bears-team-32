import React, { useEffect, useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';
import { iStock, iContext } from '../../constants/types';
import { StockCard, UserDetailsPanel, StockGraph} from '../../components';
import { getAjax } from '../../shared/helpers';
import { ACTION_TYPES } from '../../context/GlobalContext/globalContextActions';
import './Dashboard.scss';

function Dashboard(): JSX.Element {
  const globalContext: iContext = useContext(GlobalContext);

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () =>  {
   const data = await getAjax('/user-details');
   globalContext.dispatch({type: ACTION_TYPES.UPDATE_USER_DETAILS, payload: data.user});
  }

  // Dummy data to be replaced with API call and placed in store
  const purchasedStocks: Array<iStock> = [
    {
      name: 'Facebook',
      symbol: 'FB',
      value: 200,
      numberOwned: 2,
    },
    {
      name: 'Facebook',
      symbol: 'FB',
      value: 200,
      numberOwned: 2,
    },
    {
      name: 'Facebook',
      symbol: 'FB',
      value: 200,
      numberOwned: 2,
    },
    {
      name: 'Facebook',
      symbol: 'FB',
      value: 200,
      numberOwned: 2,
    },
    {
      name: 'Facebook',
      symbol: 'FB',
      value: 200,
      numberOwned: 2,
    },
  ]


  return (
    <>
      <UserDetailsPanel />
      <StockGraph />
      <div className="Dashboard__stockcards-wrap">
        {purchasedStocks.map((stock: iStock, i: number) => <StockCard key={stock.symbol+i} stock={stock} /> )}
      </div>
    </>
  )
}

export default Dashboard;
