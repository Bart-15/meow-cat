import React, { useState, useEffect } from 'react';
import {useParams, Link} from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import axios from 'axios';
import {StyledContainer, StyledBox, CatName, CatDescription, StyledText, CatImage, GoBack, CatContainer} from './styledCatItem';
import {Grid, Box, Typography, CircularProgress, Container} from '@mui/material';
import Spinner from '../../Spinner/Spinner';


const CatItem = () => {
  const {id} = useParams();
  const lowercase = id.toLocaleLowerCase()
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const {data, errors, isLoading} = useFetch(`${BASE_URL}/breeds/search?q=${lowercase}`);

  // hooks for retrieving images
  const [images, setImages] = useState([]);
  const [image, setImage] = useState("")
  const [imgLoading, setImgLoading] = useState(false);


  useEffect(() => {
    setImgLoading(true)
    const getImg = async() => {
      try {
        const res = await axios.get(`${BASE_URL}/images/search?breed_ids=${id}&limit`);
        setImages(res.data);
      } catch(e) {
        console.log(e)
      }
    }

    setTimeout(() => {
      setImgLoading(false);
    }, 1500)

    getImg();
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
       <StyledBox component="div" >
       {imgLoading ? (<ImgProgress />) : (
         <CatImage 
           alt={data.name}
           component="img"
           src={image}
         />
       )}
       <CatName variant="h2">{data.name}</CatName>
       <CatDescription variant="subtitle1">{data.description}</CatDescription>
       <StyledText variant="subtitle1">Origin: {data.origin}</StyledText>
       <StyledText variant="p">Life span: {data.life_span}yrs.</StyledText>
       <StyledText variant="subtitle1">Temperament: {data.temperament}</StyledText>
       </StyledBox>
       </>
    )
  }

  return (
    <StyledContainer>
      <Container>
        <Link to="/search" style={{textDecoration:'none'}}>
          <GoBack>Go Back</GoBack>
       </Link>
      <CatContainer>
        <Grid container direction="column" justifyContent="center" alignItems="center" style={{overflowX: "hidden !important"}}>
              {data.length > 0 && (<Grid item>{!isLoading && data?.map((item, idx) => (<Cats cats={item} key={idx} />))}</Grid>)}
              {isLoading && (<Spinner />)}
              {(!isLoading && errors.message) && (<Typography variant="h3">{errors.message}</Typography>)}
        </Grid>         
      </CatContainer>  
      </Container>
    </StyledContainer>
  )
}

export default CatItem;