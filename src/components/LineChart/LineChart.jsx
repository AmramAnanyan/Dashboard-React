import React from 'react'
import { Pie ,Line} from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";


function LineChart({chartData }) {
   
  return (
    <div>
      <Line data={chartData} width={150} height={65}/> 
  </div>
  )
}

export { LineChart };