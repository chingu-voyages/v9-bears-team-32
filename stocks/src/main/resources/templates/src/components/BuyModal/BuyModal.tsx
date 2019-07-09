import React, { FC } from 'react';
import accounting from 'accounting';
import { Modal } from '..';
import { iBuyModal } from '../../constants/types/';


const BuyModal: FC<iBuyModal> = ({
  setShowBuyModal,
  setStockSymbol,
  searchStockInfo,
  sendPurchaseRequest,
  setQuantity,
  stockInfo,
  quantity,
  totalCost,
}):JSX.Element => {

  const { formatMoney } = accounting;

  return (<Modal>
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
          onChange={(e) => setStockSymbol(e.target.value)}
          className="Global-input Global-input--modal"
        />
        <button
          className="UserDetailsPanel__buy-modal-btn"
          onClick={searchStockInfo}
          type="button"
        >
          Search
        </button>
        {
          stockInfo &&
          <div>
            <h3>{stockInfo.companyName}</h3>
            <h3>Price: {formatMoney(stockInfo.latestPrice)}</h3>
            <div><b>PE Ration:</b> {stockInfo.peRatio}</div>
            <div><b>52 Week High:</b> {formatMoney(stockInfo.week52High)}</div>
            <div><b>52 Week Low:</b> {formatMoney(stockInfo.week52Low)}</div>
            <br />
            <div>
              <span className="Global-bold">Number of Stocks to Purchase: </span>{quantity}
            </div>
            <div>
              <span className="Global-bold">Total Price: </span>{formatMoney(totalCost)}
            </div>
            <br />
            <div className="Global-bold">Quantity </div>
            <input
              className="Global-input Global-input--modal"
              onChange={(e) => setQuantity(+e.target.value)}
              type="number"
            />
            <button
              onClick={sendPurchaseRequest}
              className="UserDetailsPanel__buy-btn"
              type="button"
            >
              Purchase Stock
            </button>
          </div>
        }
      </div>
    </div>
  </Modal>)
}

export default BuyModal;
