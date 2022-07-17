import React from 'react'
import { StyledPriceBar } from './styled';

function PriceBar() {
  return (
      <StyledPriceBar>
      <div>
        <span>
          <h1 style={{ color: "#31d1d1" }}>25</h1>
          <span><p>SIGNUPS</p></span>
        </span>
        
      </div>
      <div>
        <span>
          <h1 style={{ color: "#2a71d0" }}>$1000</h1>
          <span><p>PROFIT</p></span>
        </span>
       
      </div>
      <div>
        <span>
          <h1 style={{ color: "#f3ba2f" }}>$350</h1>
          <span><p>COMMISSIONS</p></span>
        </span>
       
      </div>
      <div>
      <span>
          <h1 style={{ color: "#31d1d1" }}>$300</h1>
          <span><p>PENDING COMMISSION</p></span>
        </span>
      </div>
    </StyledPriceBar>
  )
}

export { PriceBar };