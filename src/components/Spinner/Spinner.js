import React from 'react'
import {styled, Container, Grid} from '@mui/material';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from  'react-loader-spinner'

const SpinnerContainer = styled(Container)`
   padding:200px 0;
`

function Spinner() {
  return (
    <SpinnerContainer>
        <Grid container direction="column" justifyContent="center" alignItems="center">
            <Grid item>
                <TailSpin color='#333' height={80} width={80} />
            </Grid>
        </Grid>
    </SpinnerContainer>
  )
}

export default Spinner