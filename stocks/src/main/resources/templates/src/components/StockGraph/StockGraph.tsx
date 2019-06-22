import React, { useEffect } from 'react';
import Chart from 'chart.js';
import './StockGraph.scss';

function StockGraph(): JSX.Element {

  useEffect(() => {
    var ctx = document.getElementById("myChart")

    const data = [1220, 1500, 1430, 1800, 700,1900,2300];

    const data2 = [1000, 1800, 1630, 1300, 1000,1800,2000];

    const dates = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"];

    new Chart(ctx, {
        type: 'line',
        data: {
        labels: dates,
        datasets: [{
          label: "Total Worth",
          fill: true,
          borderColor: '#edad29',
          borderWidth: 1,
          pointRadius: 2,
          backgroundColor: 'rgba(237, 128, 41, 0.2)',
          data: data,
        },
        {
          label: "Stock 1",
          fill: true,
          borderColor: '#1346a3',
          borderWidth: 1,
          pointRadius: 2,
          backgroundColor: 'rgba(19, 70, 163, 0.2)',
          data: data2,
        }]
        },
      options: {
        legend: {
          labels: {
            boxWidth: 12
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            },
          }]
        }
      }
    });
  }, []);

  return (
    <div className="Global-max-width">
      <div className="StockGraph__wrapper">
        <canvas id="myChart" height="50px" width="236px"></canvas>
      </div>
    </div>
  )
}

export default StockGraph;
