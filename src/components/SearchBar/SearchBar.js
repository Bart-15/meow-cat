import React from 'react'
import {Container, InputAdornment, TextField } from '@mui/material';
import {NavContainer, LogoContainer, LinksContainer, StyledTextField, Logo} from './styleSearchBar';
import SearchIcon from '@mui/icons-material/Search';

import logo from '../../assets/images/logo-small.png'


  
const SearchBar = () => {
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
          <StyledTextField 
             id="standard-bare"
             variant="outlined"
             placeholder="Meow search :)"
             InputProps={{
                endAdornment: (
                  <InputAdornment variant="standard" position="end">
                    <SearchIcon color="success" />
                  </InputAdornment>
                ),
              }}
          />
        </LinksContainer>
      </NavContainer>
    <Container>
    </Container>
    </>
  )
}

export default SearchBar