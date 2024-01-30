import React from 'react'
import { Box, Grid, Paper, Typography } from '@mui/material'
import com from '../Assets/groupimages.PNG'

const Rules = () => {
  return (
    <>
    <Box  p={{xs:2,lg:5}} >
      <Grid container  component={Paper} p={2}>
        <Grid  xs={12} lg={12} md={12} sm={12}>
          <Typography variant='h5'  sx={{display:'flex',alignItems:'center',justifyContent:'center', color:'red'}}><b>Rules&Regulations</b></Typography>
          <Box display={'flex'} justifyContent={'center'} alignContent={'center'}>
          <img
            style={{ width: '50%', objectFit: 'cover', height:'30%'}}
            src={com}
            alt="green iguana"
          />
          </Box>
          
          <Box display={'flex'} alignItems={'center'} justifyContent={'center'} pt={2} >
           
    <Typography variant='h6'  fontStyle={'revert'}>
   <ul>   
<li> Student must and should need to pay the bus fee to avail the transportation fee .
</li>
<li> Be 5 minutes before the boarding time at the stop.
</li>
<li>Students should behave decently in the bus , if any one found making in convince to others will be punished.</li>
<li>Students should be in proper uniform and ID card to board the bus.</li>
</ul>
    </Typography>
        </Box>
       </Grid>
       </Grid></Box>
   </>
  )
}

export default Rules