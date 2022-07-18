import React from 'react'
import { MenuLogo, StyledImageIcone, StyledMenuBar } from './styled';
import { menu1,menu2,menu3,menu4,menu5,menu6,menu7 } from '../../assets/svg';

function MenuBar() {
  return (
      <StyledMenuBar>
      <div className='div1'>
        <MenuLogo>b</MenuLogo>
        <StyledImageIcone src={menu1} />
        <StyledImageIcone src={menu2} />
        <StyledImageIcone src={menu3} />
        <StyledImageIcone src={menu4} />
        <StyledImageIcone src={menu5} />
        <StyledImageIcone src={menu6} />
        <StyledImageIcone src={menu7} />
      </div>
      <div className='div2'></div>
    </StyledMenuBar>
  )
}

export { MenuBar };