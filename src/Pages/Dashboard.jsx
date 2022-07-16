import React from 'react';
import { DashboardPanel } from '../components/DashBoardPanel';
import { GraphicBar } from '../components/GraphicBar';
import { MenuBar } from '../components/MenuBar';
import { PriceBar } from '../components/PriceBar';
import { UserBar } from '../components/UserBar';
import { StyledDashboard } from './styled';
import { useState } from 'react';


const UserData = [
    {
      id: 1,
      year: 2016,
      userGain: -40,
      userLost: 555,
    },
    {
      id: 2,
      year: 2017,
      userGain: 20,
      userLost: 345,
    },
    {
      id: 3,
      year: 2018,
      userGain: 60,
      userLost: 555,
  },
  {
    id: 4,
    year: 2018,
    userGain: 18,
    userLost: 555,
  },
  {
    id: 5,
    year: 2018,
    userGain: -44,
    userLost: 555,
  },
  {
    id: 6,
    year: 2018,
    userGain: -35,
    userLost: 555,
  }, {
    id: 7,
    year: 2018,
    userGain: 20,
    userLost: 555,
  }
   
  
];
  
const UserData2 = [
  {
    id: 1,
    year: 2016,
    userGain: 20,
    userLost: 555,
  },
  {
    id: 2,
    year: 2017,
    userGain: 60,
    userLost: 345,
  },
  {
    id: 3,
    year: 2018,
    userGain: 19,
    userLost: 555,
},
{
  id: 4,
  year: 2018,
  userGain: -40,
  userLost: 555,
},
{
  id: 5,
  year: 2018,
  userGain: -46,
  userLost: 555,
},
{
  id: 6,
  year: 2018,
  userGain: 20,
  userLost: 555,
}, {
  id: 7,
  year: 2018,
  userGain: 40,
  userLost: 555,
}
 

]; 

function Dashboard() {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
          {
            label: "Page view",
            data: UserData.map((data) => data.userGain),
            backgroundColor: [
              "#31d1d1",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor:  "#2a71d0",
            borderWidth: 2,
            tension:0.4,
          },
          {
            label: "Page view",
            data: UserData2.map((data) => data.userGain),
            backgroundColor: [
              "#31d1d1",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor:   "#f3ba2f",
            borderWidth: 2,
            tension:0.4,
          },
      ],
        
      });
    
    return (
        <StyledDashboard>
            
            <div>
                <UserBar />
                <DashboardPanel />
                <PriceBar />
                <GraphicBar chartData={userData}/>
                <MenuBar />
                
            </div>
      </StyledDashboard>
    
  )
}

export {Dashboard} 