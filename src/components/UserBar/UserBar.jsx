import React from 'react'
import { StyledUserBar } from './styled';

function UserBar() {
  return (
      <StyledUserBar>
          <ul>
              <li>
                  <img src="" alt="" width="36" height="24"/>
              </li>
              <li>En</li>
              <li>
                  <img src="" alt="" width="56" height="56" />
                  Last Login:Thu Mar 20 2014
              </li>
          </ul>
    </StyledUserBar>
  )
}

export { UserBar };