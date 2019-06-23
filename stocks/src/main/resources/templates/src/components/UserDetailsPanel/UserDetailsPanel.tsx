import React, { useState, useContext } from 'react';
import accounting from 'accounting';;
import { iContext } from '../../constants/types/index';
import { Modal } from '..';
import GlobalContext from '../../context/GlobalContext/index';
import './UserDetailsPanel.scss';

function UserDetailsPanel(): JSX.Element {
  const globalContext: iContext = useContext(GlobalContext);
  const [showBuyModal, setShowBuyModal] = useState<boolean>(false);
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
        <button
          className="UserDetailsPanel__buy-btn"
          onClick={() => setShowBuyModal(true)}
          >
            Buy
          </button>
        <button className="UserDetailsPanel__sell-btn">Sell</button>
      </div>
      {showBuyModal &&
      <Modal>
        <div className="UserDetailsPanel__buy-modal">
          <div className="UserDetailsPanel__buy-header">
            <h3>Buy Stock</h3>
            <div
              className="Global-exit"
              onClick={() => setShowBuyModal(false)}
            >
              X
            </div>
          </div>
          <div className="UserDetailsPanel__buy-body">
            <h3>Search by Stock Symbol</h3>
            <input
              className="Global-input Global-input--modal"
            />
            <button className="UserDetailsPanel__buy-modal-btn">
              Search
            </button>
          </div>
        </div>
      </Modal>}
    </div>
  )
}

export default UserDetailsPanel;
