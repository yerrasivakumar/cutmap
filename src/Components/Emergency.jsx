import React from 'react'
import { Box, Grid, Paper, Typography } from '@mui/material'
import bus from '../Assets/bus1.jpeg'
const Emergency = () => {
  return (
    <>
    <Box  p={{xs:2,lg:5}} >
      <Grid container  component={Paper} p={2}>
        <Grid  xs={12} lg={12} md={12} sm={12}>
          <Typography variant='h5'  sx={{display:'flex',alignItems:'center',justifyContent:'center', color:'red'}}><b>Emergency</b></Typography>
          <Box display={'flex'} justifyContent={'center'} alignContent={'center'}>
          <img
            style={{ width: '50%', objectFit: 'cover', height:'30%'}}
            src={bus}
            alt="green iguana"
          />
          </Box>
          <Box display={'flex'} alignItems={'center'} justifyContent={'center'} pt={2} >
           
    <Typography variant='h6'  fontStyle={'revert'}>
   <ul>   
<li> Centurion University is providing Emergency services.
</li>
<li> Emergency services such as Amubalnce and First-aid center.
</li>
<li>  Also provides an E-vechicles , when parents and guests visits the campus for campus visit.</li>
<li>In order to avail , please conact to the Transport Incharge.</li>
</ul>
    </Typography>
        </Box>
       </Grid>
       </Grid></Box>
   </>
  )
}

export default Emergency