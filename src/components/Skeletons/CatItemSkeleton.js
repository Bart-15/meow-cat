import React, { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {StyledContainer, StyledBox, CatName, CatDescription, StyledText, CatImage} from '../Cats/CatItem/styledCatItem';

import {Paper, CardMedia, Typography, Grid, Box, formControlClasses} from '@mui/material';

const CatItemSekelton = () => {

  return (
  <StyledContainer>
    <Grid container direction="column" justifyContent="center" alignItems="center">
      <Grid item >
          <Skeleton count={1} height={100} />
            <Skeleton height={40}/>
            <Skeleton count={2} />
            <Skeleton counr={2} />
      </Grid>
    </Grid>
  </StyledContainer> 
  )
}

export default CatItemSekelton;