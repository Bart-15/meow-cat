import React from 'react'
import {Stack, Autocomplete} from '@mui/material';
import {NavContainer, LogoContainer, LinksContainer, StyledTextField, Logo} from './styleSearchBar';
import logo from '../../assets/images/logo-small.png';

const SearchBar = ({query, setQuery, queryResult, searchCat}) => {
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
          <Stack spacing={2} >
          <Autocomplete 
            id="free-solo-demo"
            loading={query.length > 2 ? true : false}
            freeSolo
            sx={{ width: 200}}
            options={queryResult}
            getOptionLabel={(option) => option.name || ""}
            onChange={(e, v) => searchCat(e, v)}
            renderInput={(params) => 
              <StyledTextField 
               {...params}
               id="combo-box-demo"
               variant="outlined"
                placeholder="Meow search :)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                InputProps={{
                  ...params.InputProps,
                  // type: 'search',
                  //   endAdornment: (
                  //     <InputAdornment variant="standard" position="end">
                  //       <SearchIcon color="success" />
                  //     </InputAdornment>
                  //   ),
                  }}
              />
            }
          />
          </Stack>
        </LinksContainer>
      </NavContainer>
    </>
  )
}

export default SearchBar