import React from 'react';
import { LineChart } from '../LineChart';
import { StyledGraphicBar } from './styled';

function GraphicBar({ chartData }) {
  return (
      <StyledGraphicBar>
          <div className='lineGraph'>
              <LineChart chartData={chartData}/>
          </div>
          <div className='pieGraph'></div>
          <div className='worldMap'></div>

    </StyledGraphicBar>
  )
}

export { GraphicBar };