import React, { FC } from 'react';
import accounting from 'accounting';
import { iStockCard } from '../../constants/types';
import './StockCard.scss';

const StockCard: FC<iStockCard> = ({stock}): JSX.Element => {
  return (
    <div className="StockCard__wrap">
      <div className="StockCard__label">{stock.name}</div>
      <div>
        <span className="StockCard__label"># Purchased </span>{stock.numberOwned}</div>
      <div>
        <span className="StockCard__label">Stock Price </span>{accounting.formatMoney(stock.value)}
      </div>
    </div>
  )
}

export default StockCard;
