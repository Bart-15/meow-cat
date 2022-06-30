import React from 'react';
import {Grid, Box, Pagination as CatPagination} from '@mui/material';

const Pagination = ({count, page, changePage}) => {
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" p={5}>
      <Grid item>
        <Box p="5">
          <CatPagination
            count={count}
            size="large"
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={changePage}
          />
          </Box>
      </Grid>
    </Grid>
  )
}

export default Pagination;