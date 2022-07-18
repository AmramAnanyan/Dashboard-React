import React from 'react'
import { StyledPriceBar, StyledSpan } from './styled';
import { doneIcone, monitoringIcone,moneyIcone,questionIcone} from '../../assets/svg';

function PriceBar() {
  return (
      <StyledPriceBar>
      <div>
        <span>
          <h1 style={{ color: "#31d1d1" }}>25</h1>
          <StyledSpan><img src={doneIcone} alt="" width="20" height="20"/> <p>SIGNUPS</p></StyledSpan>
        </span>
        
      </div>
      <div>
        <span>
          <h1 style={{ color: "#2a71d0" }}>$1000</h1>
          <StyledSpan><img src={monitoringIcone} alt="" width="20" height="20"/><p> PROFIT</p></StyledSpan>
        </span>
       
      </div>
      <div>
        <span>
          <h1 style={{ color: "#f3ba2f" }}>$350</h1>
          <StyledSpan><img src={moneyIcone} alt="" width="20" height="20"/> <p>COMMISSIONS</p></StyledSpan>
        </span>
       
      </div>
      <div>
      <span>
          <h1 style={{ color: "#31d1d1" }}>$300</h1>
          <StyledSpan><img src={questionIcone} alt="" width="20" height="20"/> <p> PENDING COMMISSION</p></StyledSpan>
        </span>
      </div>
    </StyledPriceBar>
  )
}

export { PriceBar };