import React from 'react';
import { DashboardPanel } from '../components/DashBoardPanel';
import { GraphicBar } from '../components/GraphicBar';
import { GraphicBottomBar } from '../components/GraphicBottomBar';
import { MenuBar } from '../components/MenuBar';
import { PriceBar } from '../components/PriceBar';
import { UserBar } from '../components/UserBar';
import { UserDashBoard } from '../components/UserDashBoard/UserDashBoard';
import { UserTable } from '../components/UserTable';
import { StyledDashboard } from './styled';

function Dashboard() {
    return (
        <StyledDashboard>
            
            <div>
                <UserBar />
                <DashboardPanel />
                <PriceBar />
                <GraphicBar />
                <GraphicBottomBar backColor="#282626" />
                <UserDashBoard/>
                <MenuBar />
                
            </div>
      </StyledDashboard>
    
  )
}

export {Dashboard} 