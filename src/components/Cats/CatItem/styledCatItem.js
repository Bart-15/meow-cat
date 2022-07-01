import { Typography, styled} from '@mui/material';
// import { styled } from '@mui/styles';
import {Container, Box, CardMedia, Button} from '@mui/material';


export const StyledContainer = styled(Container)`
  margin:50px auto;
`
export const StyledBox = styled(Box)`
  padding:20px 50px;
`
export const CatContainer = styled(Container)`

`

export const CatName = styled(Typography)`
  font-size:40px;
  padding:36px 0px 0px;
  font-family:'Source Sans Pro', sans-serif;
  font-weight:bold;
`

export const CatDescription = styled(Typography)`
  font-size:18px;
  font-family:'Source Sans Pro', sans-serif;
  text-indent:20px;
`
export const StyledText = styled(Typography)`
  font-size:18px;
  font-family:'Source Sans Pro', sans-serif;
  font-size:18px;
`

export const CatImage = styled(CardMedia)`
  width:50%;
`

export const GoBack = styled(Button)`
  margin:0 77px;
  font-family:'Source Sans Pro', sans-serif;
  padding:10px 20px;
  font-size:16px;
  font-weight:bold;
  border:1px solid #e63e15;
  color:#333;

  &:hover {
    color:#fff;
    background:#e63e15;
  }


  
`