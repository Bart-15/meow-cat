import React from 'react'
import { CatContainer, CatName, StyledCard, Content, Description } from './styledCats';
import defaultImg from '../../assets/images/4-11.jpg'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {
    Grid,
    Divider
} from '@mui/material';

const CardSekeleton = ({cards}) => {
  return (
    <CatContainer>
     <Grid container spacing={2}>
        {
            Array(cards)
             .fill(0)
             .map((item, idx) => (
                <Grid item xs={12} md={6} lg={4} key={idx}>
                <StyledCard>
                    <Skeleton height={300} />
                <Content>
                    <CatName variant="h6"><Skeleton count={1} width={100}/></CatName>
                    <Description variant="subtitle1">
                     <Skeleton count={3}/>
                     <Skeleton count={1} width={150}/>
                    </Description>
                </Content>
                <Divider  color="#1aa3ed" sx={{ height: 2, width: '100%' }}/>
                </StyledCard>
                </Grid>
             ))
        }
     </Grid>
    </CatContainer>
  )
}

export default CardSekeleton;
