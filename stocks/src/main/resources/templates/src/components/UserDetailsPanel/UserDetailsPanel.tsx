import React from 'react';
import accounting from 'accounting';
import iUserDetailsPanel from '../../constants/types/iUserDetailsPanel';

function UserDetailsPanel(props: iUserDetailsPanel): JSX.Element {
  const { availableCash } = props;
  return (
    <>
      {accounting.formatMoney(availableCash)}
    </>
  )
}

export default UserDetailsPanel;
