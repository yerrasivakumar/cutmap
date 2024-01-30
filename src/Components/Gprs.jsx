import React from 'react'
import { Box, Grid, Paper, Typography } from '@mui/material'
import gprs from '../Assets/gprsimage.JPG'
const Gprs = () => {
  return (
    <>
    <Box  p={{xs:2,lg:5}} >
      <Grid container  component={Paper} p={2}>
        <Grid  xs={12} lg={12} md={12} sm={12}>
          <Typography variant='h5'  sx={{display:'flex',alignItems:'center',justifyContent:'center', color:'red'}}><b>GPRS</b></Typography>
          <img
            style={{ width: '100%', objectFit: 'cover', height:'30%'}}
            src={gprs}
            alt="green iguana"
          />
          <Box display={'flex'} alignItems={'center'} justifyContent={'center'} pt={2} >
           
    <Typography variant='h6'  fontStyle={'revert'}>
   <ul>   
<li>Centurion University is providing GPRS Tracking System for every Bus.
</li>
<li>Managemngt and students can able to track the bus location before bording the bus.
</li>
<li>By this feature students can able to view bus location duirng travelling.</li>
<li> If anyone need to access the GPRS link need to join the whats app group.</li>
<Typography variant='h6'>NOTE: Only authorised persons get the access to the GPRS link , only parents,faculty,students and transport departement</Typography>
<Typography variant='h5'>In order to access the GPRS link or for any information regarding GPRS link , Conatct the transprot incharge</Typography>
</ul>


    </Typography>
   
        </Box>
       </Grid>
       </Grid></Box>
   </>
  )
}

export default Gprs