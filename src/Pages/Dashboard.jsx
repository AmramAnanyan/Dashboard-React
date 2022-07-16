import React from 'react';
import { DashboardPanel } from '../components/DashBoardPanel';
import { GraphicBar } from '../components/GraphicBar';
import { MenuBar } from '../components/MenuBar';
import { PriceBar } from '../components/PriceBar';
import { UserBar } from '../components/UserBar';
import { StyledDashboard } from './styled';

function Dashboard() {
    return (
        <StyledDashboard>
            
            <div>
                <UserBar />
                <DashboardPanel />
                <PriceBar />
                <GraphicBar />
                <MenuBar />
                
            </div>
      </StyledDashboard>
    
  )
}

export {Dashboard} 