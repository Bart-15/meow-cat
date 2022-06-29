import React, {useState, useEffect} from 'react'
import {CatName, StyledCard, Content, Description } from './styledCats';
import defaultImg from '../../assets/images/4-11.jpg';
import loading from '../../assets/images/loading.gif';
import * as catApi from '../../api/cat';
import Skeleton from 'react-loading-skeleton';

import {
    Grid,
    CardMedia,
    Link,
    Divider
} from '@mui/material';

const CardCats = ({result}) => {
  const cat = result;

  const [catImg, setCatImg] = useState([]);
  const [loadingImg, setLoadingImg] = useState(false)

  const [thumbnail, setThumbNail] = useState("")

  useEffect(() => {
    const fetchImg = async () =>{
      try {
        const res = await catApi.getByBreeds(`https://api.thecatapi.com/v1/images/search?breed_ids=${cat.id}&limit=100`);
        setCatImg(res.data);
      }catch(e) {
        console.log(e)
      }
    }

    fetchImg()
  }, [])



  
  useEffect(() => {

    const filterImg = () => {
      const img = catImg.filter(element => typeof element!==undefined).shift();

      if(!img) {
        setLoadingImg(true)
      }

      setThumbNail(img?.url)
    }

    setLoadingImg(false)
    filterImg();
  }, [catImg])
  

  return (
      <>
      <Grid item xs={12} md={6} lg={4} key={cat.id}>
        <StyledCard>
          {(!thumbnail) && <Skeleton height={300} />}
          {thumbnail && (<CardMedia component="img"src={thumbnail ? thumbnail : defaultImg}height="300"alt={cat.alt_names}loading="lazy"/>)}
        <Content>
          <CatName variant="h6">{cat.name}</CatName>
          <Description variant="subtitle1">
            {cat.description.substring(0, 150)} ... <Link href={cat.wikipedia_url} rel="noreferrer" target="_blank">Learn more</Link>
          </Description>
        </Content>
        <Divider  color="#1aa3ed" sx={{ height: 2, width: '100%' }}/>
        </StyledCard>
      </Grid>
      </>
  )
}

export default CardCats;