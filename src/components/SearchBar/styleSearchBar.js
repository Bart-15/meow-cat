import {styled} from '@mui/material';
import {Box, TextField} from '@mui/material';

export const NavContainer = styled(Box)`
  height:88px;
  background:#fff;
  color:#111;

  
`
export const LinksContainer = styled(Box)`
  position:relative;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  max-width:1200px;
  margin:0 auto;
  z-index:1;
`

export const LogoContainer = styled(Box)`
  display:flex;
  justify-content:start;
  align-items:center;

`

export const Logo = styled(Box)`
    position: absolute;
    height: 100px;
    z-index: 1;
    top: 15px;
    left: 20px;
`


export const StyledTextField = styled(TextField)({
    margin:'15px 0 !important',
    fontSize:'14px',

    '& label.Mui-focused': {
      color: '#5b631d',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#eefa93',
        padding: '25.5px 14px !important',
        fontSize:'14px !important',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#e2f553',
      },
    },
});