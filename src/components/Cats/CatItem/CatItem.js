import React, { useState, useEffect } from 'react';
import {StyledContainer, StyledBox, CatName, CatDescription, StyledText, CatImage} from './styledCatItem';
import useFetch from '../../../hooks/useFetch';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {Paper, Grid, Box, Card, Typography} from '@mui/material';
import Spinner from '../../Spinner/Spinner';


const CatItem = () => {
  const {id} = useParams();
  const lowercase = id.toLocaleLowerCase()
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const {data, error, isLoading} = useFetch(`${BASE_URL}/breeds/search?q=${lowercase}`);

  const [images, setImages] = useState([]);
  const [image, setImage] = useState("")
  const [imgLoading, setImgLoading] = useState(false);

  useEffect(() => {
    setImgLoading(true);
    const getImg = async() => {
      try {
        const res = await axios.get(`${BASE_URL}/images/search?breed_ids=${id}&limit=100`);
        setImages(res?.data);
        setImgLoading(false)
      } catch(e) {
        console.log(e)
      }
    }

    getImg();
  }, [ ])


  // if you want a single image you can remove this comment :)
  useEffect(() => {
    const filterImg = () => {
      // get single image im array;
      const img = images.filter(element => typeof element!==undefined).shift();
      setImage(img?.url);

      // pic random image in array
      // const rndImg = images[Math.floor(Math.random() * images.length)];
      // setImage(rndImg?.url)
    }

    filterImg();
  }, [images])

  const Cats = (cats) => {
    const data = cats.cats;
    return (
     <>
       <StyledBox component="div" key={data.id}>
       <CatImage 
         alt={data.name}
         component="img"
         src={image}
       />
       <CatName variant="h2">{data.name}</CatName>
       <CatDescription variant="subtitle1">{data.description}</CatDescription>
       <StyledText variant="p">Life span: {data.life_span}yrs.</StyledText>
       <StyledText variant="subtitle1">Temperament: {data.temperament}</StyledText>
       </StyledBox>
       </>
    )
  }

  return (
    <StyledContainer>
      <Box component="div">
      <StyledContainer>         
            {
              data.length > 0 && (<Grid container direction="column" justifyContent="center" alignItems="center" style={{overflowX: "hidden !important"}}>
                {
                  !isLoading && data?.map((item, idx) => (
                    <Grid item >
                      <Cats cats={item} id={idx} />
                    </Grid>
                  ))}
              </Grid>
              )}
            {isLoading && (
              <Grid container direction="column" justifyContent="center" alignItems="center" style={{overflowX: "hidden !important"}}>
                <Spinner />
              </Grid>
            )}
        </StyledContainer>  
        {(!isLoading && data.length === 0) && (<Typography variant="h3">Data not available right now :)</Typography>)}
      </Box>
    </StyledContainer>
  )
}

export default CatItem;