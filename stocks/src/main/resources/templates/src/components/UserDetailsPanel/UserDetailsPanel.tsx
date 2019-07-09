import React, { useEffect, useState, useContext } from 'react';
import accounting from 'accounting';;
import { iContext } from '../../constants/types/index';
import GlobalContext from '../../context/GlobalContext/index';
import { postAjax } from '../../shared/helpers';
import iStockInfo from '../../constants/types/iStockInfo';
import iPurchaseRequestPayload from '../../constants/types/iPurchaseRequestPayload';
import { ACTION_TYPES } from '../../context/GlobalContext/globalContextActions';
import './UserDetailsPanel.scss';
import { BuyModal } from '..';

function UserDetailsPanel(): JSX.Element {
  // Local state
  const [showBuyModal, setShowBuyModal] = useState<boolean>(false);
  const [stockSymbol, setStockSymbol] = useState<string>('');
  const [stockInfo, setStockInfo] = useState<iStockInfo | null>(null);
  const [quantity, setQuantity] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);

  // Global State
  const globalContext: iContext = useContext(GlobalContext);
  const { state, dispatch } = globalContext;
  const { cash, displayName, } = state.user;

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
      const jsonResponse = await data;
      if(jsonResponse.status !== 500) {
        dispatch({ type: ACTION_TYPES.UPDATE_STOCKS, payload: jsonResponse.user.stocks});
        setShowBuyModal(false);
      }
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
      <BuyModal
        setShowBuyModal={setShowBuyModal}
        setStockSymbol={setStockSymbol}
        searchStockInfo={searchStockInfo}
        sendPurchaseRequest={sendPurchaseRequest}
        setQuantity={setQuantity}
        stockInfo={stockInfo}
        quantity={quantity}
        totalCost={totalCost}
      />
      }
    </div>
  )
}

export default UserDetailsPanel;
