import {styled, Typography} from '@mui/material';
import {Container, Box, CardMedia} from '@mui/material';


export const StyledContainer = styled(Container)`
  margin:50px auto;
`
export const StyledBox = styled(Box)`
  padding:20px 50px;
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

export const CarousellWrapper = styled(Container)`
  padding:0 40px;
`

export const CatImage = styled(CardMedia)`
  width:50%;
`