import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  cardContainer : {
    padding:'50px 0'
  },

  cardRoot : {
      margin: "0 auto",
      transition: "0.3s",
      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",

      "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
      }
  },

  cardContent : {
    padding:'30px 40px'
  },

  catName : {
    fontSize:18
  },

  description : {
    lineHeight:'25px'
  },


  [theme.breakpoints.up('md')] : {
    catName: {
      fontSize:20
    }
  }
}))