import React from 'react';
import {Grid} from '@mui/material';

const Pagination = ({catsPerPage, totalCats, changePage}) => {
  let pageNumbers = [];

  for(let i = 1; i < Math.ceil(totalCats / catsPerPage); i++) {
    pageNumbers.push(i);
  } 


  return (
    <Grid container>
      <Grid item>
       <ul>
        {
          pageNumbers.map((item, i) => {
            return (<li key={item} onClick={() => changePage(item)}>{item}</li>)
          })
        }
       </ul>
      </Grid>
    </Grid>
  )
}

export default Pagination