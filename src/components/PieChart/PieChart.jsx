import React from 'react';
import { Doughnut} from 'react-chartjs-2';
import { useSelector } from 'react-redux/es/exports';
import { StyledPieChart } from './styled';
import { getPieGraph } from '../../redux/features/pieGraphSlice';
function PieChart() {
    const chartDate=useSelector(getPieGraph)
  return (
      <StyledPieChart>
      <Doughnut data={chartDate} width={25} height={25} />
    </StyledPieChart>
  )
}

export {PieChart} 