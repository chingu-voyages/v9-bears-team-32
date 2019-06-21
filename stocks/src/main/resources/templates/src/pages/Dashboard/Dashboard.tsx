import React from 'react';
import iStock from '../../constants/types/iStock';
import StockCard from '../../components/StockCard/StockCard';

function Dashboard(): JSX.Element {
  // Dummy data to be replaced with API call

  const purchasedStocks: Array<iStock> = [
    {
      name: 'Facebook',
      symbol: 'FB',
      value: 200,
      numberOwned: 2,
    }
  ]

  const availableCash: number = 10000;


  return (
    <>
      {purchasedStocks.map((stock: iStock) => <StockCard stock={stock} /> )}
    </>
  )
}

export default Dashboard;
