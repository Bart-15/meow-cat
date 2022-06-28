import {
    styled,
    Container,
    Typography,
    Card,
    CardContent
} from '@mui/material';

export const CatContainer = styled(Container)`
  padding: 40px 0;
`

export const CatName = styled(Typography)`
  font-weight: bold;
  font-family:'Source Sans Pro', sans-serif;
`

export const StyledCard = styled(Card)({
  margin: "auto",
  transition: "0.3s",
  boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
  
  "&:hover": {
    boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
  }
});

export const Content = styled(CardContent)`
  padding:30px 40px;
`

export const Description = styled(Typography)`
  padding:10px 0;
  font-size:14px;
  font-family:'Source Sans Pro', sans-serif;
`