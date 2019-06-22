import React, { useState, useEffect } from 'react';
import { iStock } from '../../constants/types';
import { StockCard, UserDetailsPanel, StockGraph} from '../../components/index';
import './Dashboard.scss';
import { getAjax } from '../../shared/helpers';

function Dashboard(): JSX.Element {

  useEffect(() => {
    getUserDetails();
  }, []);

  //todo save to store
  const getUserDetails = async () =>  {
   const data = await getAjax('/user-details');
  }

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
      <StockGraph />
      <div className="Dashboard__stockcards-wrap">
        {purchasedStocks.map((stock: iStock) => <StockCard stock={stock} /> )}
      </div>
    </>
  )
}

export default Dashboard;
