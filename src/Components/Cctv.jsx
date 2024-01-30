import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import cctv from '../Assets/cctvpage.jpeg'
const Cctv = () => {
  return (
   <>
   <Box>
   <Box  p={{xs:2,lg:5}} >
      <Grid container  component={Paper} p={2}>
        <Grid  xs={12} lg={12} md={12} sm={12}>
   
        
        
          <Typography variant='h5'  sx={{display:'flex',alignItems:'center',justifyContent:'center', color:'red'}}><b>CCTV</b></Typography>
          <img
            style={{ width: '100%', objectFit: 'cover' ,}}
            src={cctv}
            alt="green iguana"
          />
         
          <Box display={'flex'} alignItems={'center'} justifyContent={'center'} pt={2} >
           
    <Typography variant='h6'  fontStyle={'revert'}>
   <ul>   
<li>Centurion University is providing CCTV Survilance in every Bus
</li>
<li> Centurion monitors every bus inside actions on daily bases.
</li>
<li> By this feature Parents and Management can able to view student's activities in the bus duirng travelling.</li>
<li>If anyone need to access the cctv link can contact the transport incharge.</li>
<li>NOTE: Only authorised persons get the access to the CCTV link , only parents,faculty and transport departement in some condition
In order to access the CCTV or for any information regarding CCTV , Conatct the transprot incharge</li>
</ul>
    </Typography>
        </Box>
       </Grid>
     
       </Grid></Box>
   </Box>
  
   </>
  )
}

export default Cctv