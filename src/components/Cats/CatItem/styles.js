
import { makeStyles } from '@mui/styles';
export default makeStyles((theme) => ({
    rootContainer: {
      padding:'50px 20px'
    },

    backBtn : {
      color: theme.pallete.danger,
      padding:'10px 20px',
      border:`1px solid #e63e15`,
      margin:'10px 0',

      '&:hover': {
        background: theme.pallete.danger,
        color: theme.pallete.light,
      }
    },

    title : {
      fontSize:24,
      padding:'20px 0',
      fontWeight:'bold'
    },

    text: {
      lineHeight:'28px'
    },


    [theme.breakpoints.up('md')] : {
      text : {
        fontSize:14,
      },
      title : {
        fontSize:30
      }
    },
    
    cardMedia : {
      width:230,

      [theme.breakpoints.up('sm')] : {
        width:300
      },
      
      [theme.breakpoints.up('md')] : {
        width:700
      }
    }


}))