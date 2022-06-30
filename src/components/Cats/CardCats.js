import React, {useState, useEffect} from 'react'
import {CatName, StyledCard, Content, Description } from './styledCats';
import {Link as LinkRouter} from 'react-router-dom';
import {
    Grid,
    CardMedia,
    Link,
    Divider
} from '@mui/material';

const CardCats = ({result}) => {
  const cat = result;
  return (
      <>
      <Grid item xs={12} md={6} lg={4} key={cat.id}>
        <StyledCard>
          <CardMedia 
            component="img"
            src={cat.image?.url}
            height='300'
          />
        <Content>
          <CatName variant="h6">
            <LinkRouter to={`/search/cat/${cat.id}`} style={{textDecoration:'none', color:'#333'}}>
              {cat.name}
            </LinkRouter>
          </CatName>
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