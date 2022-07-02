import { makeStyles } from "@mui/styles";
import { blue } from '@mui/material/colors';


export default makeStyles((theme) => ({
    root : {
       width : '100%',
       maxWidth:'1200px',
       margin:'0 auto',
       padding:'150px 20px',
       height: '100vh',

       [theme.breakpoints.up('md')] : {
        padding:'300px 20px'
       }
    }, 
    
    contentContainer : {
      transision:'.4s ease-in-out'
    },

    title : {
        fontSize:24
    },

    btnExplore : {
        margin:'10px 0',
        padding:'5px 15px',
        color:blue[500],
        border:`1px solid ${blue[500]}`,
        borderRadius:50,
        transition: '.4s ease-in-out',


        '&:hover' :{
          background: blue[700],
          color:theme.pallete.light
        }
    },
    
    [theme.breakpoints.up('md')] : {
        rightContent : {
            padding: '28px 50px'
        },
        title : {
          fontSize:30
        },
       description: {
        fontSize:14
       },
       btnExplore : {
        fontSize:18,
       }
    },

})) 