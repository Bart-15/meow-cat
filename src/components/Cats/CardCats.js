import useStyles from './styles';
import {Link as LinkRouter} from 'react-router-dom';
import defaultImg from '../../assets/images/4-11.jpg'
import {
    Grid,
    CardMedia,
    Link,
    Divider, 
    Card, 
    CardContent,
    Typography
} from '@mui/material';

const CardCats = ({result}) => {
  const classes = useStyles();
  const cat = result;
  return (
      <>
      <Grid item xs={12} md={6} lg={4} key={cat.id}>
        <Card className={classes.cardRoot}>
          <CardMedia 
            component="img"
            src={cat.image ? cat.image?.url : defaultImg}
            height='300'
          />
        <CardContent className={classes.cardContent}>
          <Typography className={classes.catName} variant="h6">
            <LinkRouter to={`/search/cat/${cat.id}`} style={{textDecoration:'none', color:'#333'}}>
              {cat.name}
            </LinkRouter>
          </Typography>
          <Typography className={classes.description} variant="subtitle1">
            {cat.description.substring(0, 120)} ... <Link href={cat.wikipedia_url} rel="noreferrer" target="_blank">Learn more</Link>
          </Typography>
        </CardContent>
        <Divider color="#1aa3ed" sx={{ height: 2, width: '100%' }}/>
        </Card>
      </Grid>
      </>
  )
}

export default CardCats;