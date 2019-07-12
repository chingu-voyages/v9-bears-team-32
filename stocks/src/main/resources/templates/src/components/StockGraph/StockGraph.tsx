import React, { useEffect, useContext, useState } from 'react';
import Chart from 'chart.js';
import './StockGraph.scss';
import GlobalContext from '../../context/GlobalContext';
import { iStock } from '../../constants/types';

function StockGraph(): JSX.Element {
  const { state } = useContext(GlobalContext);
  const [quantities, setQuantities] = useState<Array<number>>([]);
  const [symbols, setSymbols] = useState<Array<string>>([]);
  const [colors, setColors] = useState<Array<string>>([]);

  const ctxRef = React.createRef<HTMLCanvasElement>();

    const randomColor = (): string => {
      const randomHelper  = () => Math.round(Math.random()*255);
      return `rgba(${randomHelper()},${randomHelper()},${randomHelper()},.5)`
    }

    useEffect(()=>{
      const { stocks } = state.user;
      const colorArr: Array<string> = []
      const quantArr: Array<number> = stocks.map((stock: iStock) => stock.quantity);
      const symArr: Array<string> = stocks.map((stock: iStock) => stock.symbol);
      state.user.stocks.forEach((stock: iStock) => {
        colorArr.push(randomColor());
      });
      setQuantities(quantArr);
      setSymbols(symArr);
      setColors(colorArr);
    },[state.user.stocks])

    useEffect(() => {
      if(quantities.length) {
        chartInit();
      }
    }, [quantities])

  const chartInit = () => {
    new Chart(ctxRef.current.getContext('2d'), {
      type: 'bar',
      data: {
      labels: symbols,
      datasets: [{
        label: 'Stocks',
        backgroundColor: colors,
        data: quantities,
      }]
    },
  options: {
      legend: {
        display: false
      },
    }
    });
  }

  return (
    <div className="Global-max-width">
      <div className="StockGraph__wrapper">
        <canvas
          height="50px"
          ref={ctxRef}
          width="236px"
        />
      </div>
    </div>
  )
}

export default StockGraph;
