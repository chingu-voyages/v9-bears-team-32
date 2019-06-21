import React from 'react';
import iStock from '../../constants/types/iStock';
import StockCard from '../../components/StockCard/StockCard';
import UserDetailsPanel from '../../components/UserDetailsPanel/UserDetailsPanel';
import './Dashboard.scss';

function Dashboard(): JSX.Element {
  // Dummy data to be replaced with API call and placed in store
  const purchasedStocks: Array<iStock> = [
    {
      name: 'Facebook',
      symbol: 'FB',
      value: 200,
      numberOwned: 2,
    },
    {
      name: 'Facebook',
      symbol: 'FB',
      value: 200,
      numberOwned: 2,
    },
    {
      name: 'Facebook',
      symbol: 'FB',
      value: 200,
      numberOwned: 2,
    },
    {
      name: 'Facebook',
      symbol: 'FB',
      value: 200,
      numberOwned: 2,
    },
    {
      name: 'Facebook',
      symbol: 'FB',
      value: 200,
      numberOwned: 2,
    },
  ]

  const availableCash: number = 10000;


  return (
    <>
      <UserDetailsPanel
        availableCash={availableCash}
      />
      <div className="Dashboard__stockcards-wrap">
        {purchasedStocks.map((stock: iStock) => <StockCard stock={stock} /> )}
      </div>
    </>
  )
}

export default Dashboard;
