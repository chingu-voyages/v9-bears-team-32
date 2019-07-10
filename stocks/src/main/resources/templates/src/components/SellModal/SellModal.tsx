import React, { FC, useState } from 'react';
import Modal from '../Modal/Modal';
import { iSellModal } from '../../constants/types';

const SellModal: FC<iSellModal> = ({setShowSellModal, sellStock, symbol, price}): JSX.Element => {
  const [quantity, setQuantity] = useState(0);
  return (
    <Modal>
      <div className="UserDetailsPanel__buy-modal">
        <div className="UserDetailsPanel__buy-header">
          <h3>Sell Stock</h3>
          <div
            className="Global-exit"
            onClick={() => setShowSellModal(false)}
          >
            X
          </div>
        </div>
       <div className="UserDetailsPanel__buy-body">
         <h3>{symbol}</h3>
         <h3>{price}</h3>
         <h3>Quantity: </h3>
         <input
          onChange={(e) => setQuantity(+e.target.value)}
          className="Global-input Global-input--modal"
          type="number"
         />
         <br />
         <br />
         <button
          onClick={() => sellStock(quantity)}
          className="UserDetailsPanel__sell-btn UserDetailsPanel__sell-btn--wide"
          type="button"
        >
          Sell
        </button>
       </div>
      </div>
    </Modal>
  )
};

export default SellModal;
