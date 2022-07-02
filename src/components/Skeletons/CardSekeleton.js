import React from 'react'
import {Card, CardContent, Typography, Container} from '@mui/material'
import defaultImg from '../../assets/images/4-11.jpg'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import useStyles from '../Cats/styles';
import {
    Grid,
    Divider
} from '@mui/material';

const CardSekeleton = ({cards}) => {
  const classes = useStyles();
  return (
    <>
    <Container className={classes.cardContainer}>
     <Grid container spacing={2}>
        {
            Array(cards)
             .fill(0)
             .map((item, idx) => (
                <Grid item xs={12} md={6} lg={4} key={idx}>
                <Card>
                    <Skeleton height={300} />
                <CardContent className={classes.cardContent}>
                    <Typography className={classes.catName} variant="h6"><Skeleton count={1} width={100}/></Typography>
                    <Typography className={classes.description} variant="subtitle1">
                     <Skeleton count={2}/>
                     <Skeleton count={1} width={150}/>
                    </Typography>
                </CardContent>
                <Divider  color="#1aa3ed" sx={{ height: 2, width: '100%' }}/>
                </Card>
                </Grid>
             ))
        }
     </Grid>
    </Container>
    </>
  )
}

export default CardSekeleton;
