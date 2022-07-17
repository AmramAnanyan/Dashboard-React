import React from 'react'
import { UserTable } from '../UserTable';
import { StyledUseerDashBoard } from './styled';

function UserDashBoard() {
  return (
      <StyledUseerDashBoard>
          <UserTable />
          <UserTable />
          <UserTable />
    </StyledUseerDashBoard>
  )
}

export { UserDashBoard };