import React, { useContext } from 'react';
import accounting from 'accounting';;
import { iContext } from '../../constants/types/index';
import GlobalContext from '../../context/GlobalContext/index';
import './UserDetailsPanel.scss';


function UserDetailsPanel(): JSX.Element {
  const globalContext: iContext = useContext(GlobalContext);
  const { cash, displayName, } = globalContext.state.user;

  return (
    <div className="UserDetailsPanel__wrap">
      <div>
        <div>{displayName}</div>
        <div className="Global-link">
          <a href="/logout">Logout</a>
        </div>
      </div>
      <div className="UserDetailsPanel__info-wrap">
        <div>Available Cash: {accounting.formatMoney(cash)}</div>
        <button className="UserDetailsPanel__buy-btn">Buy</button>
        <button className="UserDetailsPanel__sell-btn">Sell</button>
      </div>
    </div>
  )
}

export default UserDetailsPanel;
