import React from 'react'
import { Box, Grid, Paper, Typography } from '@mui/material'
import whats from '../Assets/wc.jpg'
const Whatsup = () => {
  return (
    <>
    <Box  p={{xs:2,lg:5}} >
      <Grid container  component={Paper} p={2}>
        <Grid  xs={12} lg={12} md={12} sm={12}>
          <Typography variant='h5'  sx={{display:'flex',alignItems:'center',justifyContent:'center', color:'red'}}><b>WhatsApp Community</b></Typography>
         <Box p={1} display={'flex'} alignItems={'center'} justifyContent={'center'}>
         <img
            style={{ width: '15%', objectFit: 'cover', height:'10%', }}
            src={whats}
            alt="green iguana"
          />
         </Box>
          <Box display={'flex'} alignItems={'center'} justifyContent={'center'} pt={2} >
           
    <Typography variant='h6'  fontStyle={'revert'}>
   <ul>   
<li>Centurion provides What�sApp community group for all the buses.
</li>
<li>At first student need to pay the bus fee as per the University norms.
</li>
<li>.By showing the fee payment receipt, student can fill the transportation form to get Bus Pass.</li>
<li>without bus pass there will be no entry to board the bus.</li>
<li>To join the WhatsApp community, kindly contact the transport incharge.</li>
<Typography variant='h6'>NOTE : kindly carry your passport size photo for filling the transportation form</Typography>
<Typography variant='h5'><b>Details of Transport Incharge :</b></Typography>
<Typography variant='h6'>Name:transport incharge</Typography>
<Typography variant='h6'>Phone No:+91�1234567899</Typography>
<Typography variant='h6'>Email:transport@cutmap.ac.in</Typography>
</ul>


    </Typography>
   
        </Box>
       </Grid>
       </Grid></Box>
   </>
  )
}

export default Whatsup