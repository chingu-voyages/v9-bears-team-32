import React from 'react';
import accounting from 'accounting';
import { iUserDetailsPanel } from '../../constants/types';
import './UserDetailsPanel.scss';

function UserDetailsPanel(props: iUserDetailsPanel): JSX.Element {
  const { availableCash } = props;
  return (
    <div className="UserDetailsPanel__wrap">
      <div>
        <div>RobBertram123</div>
        <div className="Global-link">
          <a href="/logout">Logout</a>
        </div>
      </div>
      <div className="UserDetailsPanel__info-wrap">
        <div>Available Cash: {accounting.formatMoney(availableCash)}</div>
        <button className="UserDetailsPanel__buy-btn">Buy</button>
        <button className="UserDetailsPanel__sell-btn">Sell</button>
      </div>
    </div>
  )
}

export default UserDetailsPanel;
