import React from 'react'
import { Box, Grid, Typography, Button, CardMedia} from '@mui/material';
import {Link} from 'react-router-dom'
import welcome from '../assets/images/welcome.svg';
import useStyles from './styles';
const Landingpage = () => {
  const classes = useStyles();



  return (
    <Box className={classes.root} component="div">
      <Box className={classes.contentContainer} component="div"> 
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <CardMedia 
              component="img"
              src={welcome}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className={classes.rightContent}>
              <Typography variant="h2" className={classes.title}>Meow Cat!</Typography>
              <Typography className={classes.description} variant="subtitle1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum viverra ultricies. Aenean pharetra consequat mi, vitae tristique sem. Suspendisse molestie, augue ut rutrum aliquet, sem nunc dictum lorem, quis fermentum risus libero sed leo. In ante lorem, sagittis a ullamcorper eu, volutpat a magna.</Typography>
              <Link to="/search" style={{textDecoration:'none'}}>
                <Button className={classes.btnExplore}>Explore now</Button>
              </Link>
            </Box>  
          </Grid>
        </Grid>
      </Box>  
    </Box>
  )
}

export default Landingpage