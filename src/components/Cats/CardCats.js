import React, {useState, useEffect} from 'react'
import { CatContainer, CatName, StyledCard, Content, Description } from './styledCats';
import defaultImg from '../../assets/images/4-11.jpg';
import * as catApi from '../../api/cat'
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

  useEffect(() => {
    fetchImg();
  }, [])

  const fetchImg = async () =>{
    setLoadingImg(true);
    try {
      const res = await catApi.getByBreeds(`https://api.thecatapi.com/v1/images/search?breed_ids=${cat.id}&limit=100`);
      setCatImg(res.data);
      setLoadingImg(false);
    }catch(e) {
      console.log(e)
    }
  }

  
  const filterImg = () => {
    const img = catImg.map((item) => item?.url)
    console.log(img)
    return img;
  }

  useEffect(() => {
    filterImg();
  })
  return (
      <>
      <Grid item xs={12} md={6} lg={4} key={cat.id}>
        <StyledCard>
          <CardMedia 
            component="img"
            src={defaultImg}
            height="300"
            alt={cat.alt_names}
            loading="lazy"
          />
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