import React from 'react'
import {Stack, Autocomplete} from '@mui/material';
import logo from '../../assets/images/logo-small.png';
import {Box, TextField} from '@mui/material';
import useStyles from './styles'
const SearchBar = ({query, setQuery, queryResult, searchCat}) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.navContainer}>
        <Box className={classes.linksContainer}>
          <Box className={classes.logoContainer}>
            <Box 
             className={classes.logo}
             component="img"
             src={logo}
            />
          </Box>
          <Box className={classes.textFieldContainer}>
            <Stack spacing={2}>
            <Autocomplete 
              id="free-solo-demo"
              loading={(query.length > 2 && queryResult.length > 0) ? true : false}
              freeSolo
              sx={{ width: 200}}
              options={queryResult}
              getOptionLabel={(option) => option.name || ""}
              onChange={(e, v) => searchCat(e, v)}
              renderInput={(params) => 
                <TextField
                className={classes.textField}
                {...params}
                id="combo-box-demo"
                variant="outlined"
                  placeholder="Search..."
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
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default SearchBar