
import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  navContainer: {
    height:'88px',
    background:theme.pallete.light,
    color:theme.pallete.light
  },

  linksContainer : {
   position:'relative',
   display:'flex',
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'space-between',
   maxWidth:'1200px',
   margin:'0 auto',
   zIndex:1
  },

  logoContainer : {
    display:'flex',
    justifyContent:'start',
    alignItems:'center',
  },

  logo : {
    position: 'absolute',
    height: '60px',
    zIndex: 1,
    top: '15px',
    left: '20px',
    transition: '.3s ease-in-out',
    [theme.breakpoints.up('md')] : {
        height: '88px'
    },
    [theme.breakpoints.up('lg')] : {
        height: '100px'
    }
  },

  textFieldContainer : {
    display: 'flex',
    height: '88px',
    alignItems: 'center',
    justifyContent: 'center',
    padding:'0 20px 0',
},

textField : {
    padding:'0 0 0 40px',
    transition:'.3s ease-in-out',

    [theme.breakpoints.up('md')] : {
      padding:0,
    }
  }


}))