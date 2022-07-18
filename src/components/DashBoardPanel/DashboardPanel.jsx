import React from 'react'
import { StyledImageIcone } from '../MenuBar/styled';
import { StyledDashBoardPanel } from './styled';
import { menu10 } from '../../assets/svg';

function DashboardPanel() {
  return (
      <StyledDashBoardPanel>
          <div className='bigDiv'><h3>Dashboard</h3></div>
      <div className='smallDiv'> <StyledImageIcone src={menu10 } /> ADD THIS PAGE TO FAVORITES</div>
      </StyledDashBoardPanel>
  )
}

export {DashboardPanel } ;