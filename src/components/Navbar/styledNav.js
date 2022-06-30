import {styled} from '@mui/material';
import {Box} from '@mui/material';

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
