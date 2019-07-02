import React, { FC, useEffect, useState } from 'react';
import accounting from 'accounting';
import { iStockCard } from '../../constants/types';
import './StockCard.scss';

const StockCard: FC<iStockCard> = ({stock}): JSX.Element => {
  const [currentValue, setCurrentValue] = useState(0);
  useEffect(() => {
    // Add API call here
    setCurrentValue(0);
  }, []);

  return (
    <div className="StockCard__wrap">
      <div className="StockCard__label">{stock.symbol}</div>
      <div>
        <span className="StockCard__label"># Purchased </span>{stock.quantity}</div>
      <div>
        <span className="StockCard__label">Stock Price </span>{accounting.formatMoney(currentValue)}
      </div>
      <div>
        <span className="StockCard__label">Gains/Losses </span>{accounting.formatMoney(stock.purchasePrice - currentValue)}
      </div>
    </div>
  )
}

export default StockCard;
