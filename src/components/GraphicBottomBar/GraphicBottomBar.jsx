import React from 'react'
import { StyledGraphicBottomBar } from './styled'

function GraphicBottomBar({backColor,color,children}) {
  return (
      <StyledGraphicBottomBar backColor={backColor} color={color}>
                    <div>Top Affilates</div>
                    <div>Signups</div>
                    <div>Pending Commisions</div>
    </StyledGraphicBottomBar>
  )
}

export {GraphicBottomBar} 