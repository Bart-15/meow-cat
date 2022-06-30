import React from 'react'
import {NavContainer, LogoContainer, LinksContainer, Logo} from './styledNav';
import logo from '../../assets/images/logo-small.png'


const Navbar = () => {
  return (
    <>
      <NavContainer>
        <LinksContainer>
          <LogoContainer>
            <Logo 
             component="img"
             src={logo}
            />
          </LogoContainer>
          {/* Todo: add links if you want :) */}
        </LinksContainer>
      </NavContainer>
    </>
  )
}

export default Navbar