import React from 'react'
import { Pie ,Line} from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getLineGraph } from '../../redux/features/lineGraphSlice';
import { StyledLineChart } from './styled';

function LineChart() {
   const chartDate=useSelector(getLineGraph)
  return (
    <StyledLineChart>
      <Line data={chartDate} width={150} height={75}/> 
  </StyledLineChart>
  )
}

export { LineChart };