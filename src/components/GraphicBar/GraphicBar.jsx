import React from 'react';
import { LineChart } from '../LineChart';
import { PieChart } from '../PieChart';
import { MyWorldMap } from '../WorldMap';
import { StyledGraphicBar } from './styled';

function GraphicBar({ chartData }) {
  return (
      <StyledGraphicBar>
          <div className='lineGraph'>
              <LineChart />
          </div>
      <div className='pieGraph'>
        <PieChart/>
          </div>
      <div className='worldMap'>
          <MyWorldMap />
          </div>

    </StyledGraphicBar>
  )
}

export { GraphicBar };