import React, { useEffect, useState, useContext } from 'react';
import accounting from 'accounting';;
import { iContext } from '../../constants/types/index';
import { Modal } from '..';
import GlobalContext from '../../context/GlobalContext/index';
import './UserDetailsPanel.scss';
import { postAjax } from '../../shared/helpers';
import iStockInfo from '../../constants/types/iStockInfo';
import iPurchaseRequestPayload from '../../constants/types/iPurchaseRequestPayload';

function UserDetailsPanel(): JSX.Element {
  const globalContext: iContext = useContext(GlobalContext);
  const [showBuyModal, setShowBuyModal] = useState<boolean>(false);
  const [stockSymbol, setStockSymbol] = useState<string>('');
  const [stockInfo, setStockInfo] = useState<iStockInfo | null>(null);
  const [quantity, setQuantity] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);
  const { cash, displayName, } = globalContext.state.user;

  const { formatMoney } = accounting;

  useEffect(() => {
    setStockInfo(null);
  },[showBuyModal])

  useEffect(() => {
    if(stockInfo) {
      setTotalCost(quantity * stockInfo.latestPrice);
    }
  }, [quantity, stockInfo])

  const searchStockInfo = async () => {
    if(stockSymbol.length) {
      const response: iStockInfo = await postAjax('/search-stock', JSON.stringify({symbol: stockSymbol}));
      setStockInfo(response);
    } else {
      alert('Please enter stock symbol');
    }
  }

  const sendPurchaseRequest = async () => {
    if(!quantity) {
      alert('Please enter quantity.');
      return;
    }

    const purchaseRequestPayload: iPurchaseRequestPayload = {
      expectedPrice: totalCost,
      quantity,
      stockSymbol,
    }

    try {
    const data = await postAjax('/purchase-stock', JSON.stringify(purchaseRequestPayload));
    const jsonResponse = await data.json();
    } catch {
      console.log('failed request');
    }
  }

  return (
    <div className="UserDetailsPanel__wrap">
      <div>
        <div>{displayName}</div>
        <div className="Global-link">
          <a href="/logout">Logout</a>
        </div>
      </div>
      <div className="UserDetailsPanel__info-wrap">
        <div>Available Cash: {formatMoney(cash)}</div>
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
      </Modal>}
    </div>
  )
}

export default UserDetailsPanel;
