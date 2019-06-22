import React from 'react';
import accounting from 'accounting';
import iUserDetailsPanel from '../../constants/types/iUserDetailsPanel';
import './UserDetailsPanel.scss';

function UserDetailsPanel(props: iUserDetailsPanel): JSX.Element {
  const { availableCash } = props;
  return (
    <div className="UserDetailsPanel__wrap">
      <div>RobBertram123</div>
      <div>Available Cash: {accounting.formatMoney(availableCash)}</div>
    </div>
  )
}

export default UserDetailsPanel;
