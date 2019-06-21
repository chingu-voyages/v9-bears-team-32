import React, { FC } from 'react';
import iStock from '../../constants/types/iStock';

interface IProps {
  stock: iStock,
}

const StockCard: FC<IProps> = ({stock}): JSX.Element => {
  return (
    <>
      {stock.name}
    </>
  )
}

export default StockCard;
