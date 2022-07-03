import React, { useState, useEffect, useRef } from 'react';
import {useParams, Link} from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import axios from 'axios';
import {Grid, Box, Typography, CircularProgress, Container, CardMedia, Button} from '@mui/material';
import {Spinner} from '../../../components/';
import useStyles from './styles';

const CatItem = () => {
  const classes = useStyles();
  const mounted = useRef(false)
  const {id} = useParams();
  const lowercase = id.toLocaleLowerCase()
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const {data, errors, isLoading} = useFetch(`${BASE_URL}/breeds/search?q=${lowercase}`);

  // hooks for retrieving images
  const [images, setImages] = useState([]);
  const [image, setImage] = useState("")
  const [imgLoading, setImgLoading] = useState(false);


  useEffect(() => {
    if(!mounted.current) {
      const getImg = async() => {
        setImgLoading(true)
        try {
          const res = await axios.get(`${BASE_URL}/images/search?breed_ids=${id}&limit`);
          setImages(res.data);
          setImgLoading(false)
        } catch(e) {
          console.log(e)
        }
      }  
      getImg();
    }


    // cleanup
    return () => {
      mounted.current = true;
    }

  }, [id])


  useEffect(() => {
    const filterImg = () => {
      // pic random image in array
      const rndImg = images[Math.floor(Math.random() * images.length)];
      setImage(rndImg?.url)
    }

    filterImg();
  }, [images])

  const ImgProgress = () => {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress color="secondary" />
      </Box>
    )
  }


  const Cats = (cats) => {
    const data = cats.cats;
    return (
     <>
       <Box component="div" >
       {imgLoading ? (<ImgProgress />) : (
         <CardMedia
           className={classes.cardMedia} 
           alt={data.name}
           component="img"
           src={image}
         />
       )}
       <Typography variant="h2" className={classes.title}>{data.name}</Typography>
       <Typography className={classes.text} variant="subtitle1">{data.description}</Typography>
       <Typography className={classes.text} variant="subtitle1">Origin: {data.origin}</Typography>
       <Typography className={classes.text} variant="subtitle1">Life span: {data.life_span}yrs.</Typography>
       <Typography className={classes.text} variant="subtitle1">Temperament: {data.temperament}</Typography>
       </Box>
       </>
    )
  }

  return (
    <Box>
      <Container className={classes.rootContainer}>
        <Link to="/search" style={{textDecoration:'none'}}>
          <Button className={classes.backBtn}>Go Back</Button>
       </Link>
        <Grid container direction="column" justifyContent="start" alignItems="start" style={{overflowX: "hidden !important"}}>
              {data.length > 0 && (<Grid item>{!isLoading && data?.map((item, idx) => (<Cats cats={item} key={idx} />))}</Grid>)}
              {isLoading && (<Spinner />)}
              {(!isLoading && errors.message) && (<Typography variant="h3">{errors.message}</Typography>)}
        </Grid>          
      </Container>
    </Box>
  )
}

export default CatItem;