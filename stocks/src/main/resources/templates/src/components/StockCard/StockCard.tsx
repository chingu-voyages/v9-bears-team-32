import React, { FC, useEffect, useState, useContext } from 'react';
import accounting from 'accounting';
import { iStockCard } from '../../constants/types';
import { SellModal } from '..';
import './StockCard.scss';
import { postAjax } from '../../shared/helpers';
import iStockInfo from '../../constants/types/iStockInfo';
import { ACTION_TYPES } from '../../context/GlobalContext/globalContextActions';
import GlobalContext from '../../context/GlobalContext';

const StockCard: FC<iStockCard> = ({stock}): JSX.Element => {
  const [showSellModal, setShowSellModal] = useState<boolean>(false);
  const [currentValue, setCurrentValue] = useState(0);
  const context = useContext(GlobalContext);
  const { purchasePrice, quantity, symbol } = stock;
  useEffect(() => {
    // TODO => API call does not go here. State is passed here, but API is made for all stocks for graph.
    retrieveData();
    setCurrentValue(0);
  }, []);

  const retrieveData = async () => {
    const response: iStockInfo = await postAjax('/search-stock', JSON.stringify({symbol}));
    setCurrentValue(response.latestPrice);
  }

  const sellStock = async (quantity: number) => {
    const stockValue: number = quantity * currentValue;

    if(quantity && currentValue) {
      try {
        const data = await postAjax('/sell-stock', JSON.stringify({quantity, symbol, stockValue}))
        const jsonResponse = await data;

        if(jsonResponse.status !== 500) {
          context.dispatch({ type: ACTION_TYPES.UPDATE_STOCKS, payload: jsonResponse.user.stocks});
          setShowSellModal(false);
        }
      } catch {
        console.log("Error in sell")
      }
    }
  }

  return (
    <>
      {showSellModal &&
        <SellModal
          symbol={symbol}
          price={currentValue}
          setShowSellModal={setShowSellModal}
          sellStock={sellStock}
        />}
      <div className="StockCard__wrap" onClick={() => setShowSellModal(true)}>
        <div className="StockCard__label">{symbol}</div>
        <div>
          <span className="StockCard__label"># Purchased </span>{quantity}</div>
        <div>
          <span className="StockCard__label">Stock Price </span>{accounting.formatMoney(currentValue)}
        </div>
        <div>
          <span className="StockCard__label">Gains/Losses </span>{accounting.formatMoney(purchasePrice - currentValue)}
        </div>
      </div>
    </>
  )
}

export default StockCard;
