import React from 'react'
import banner from "../Assets/bus2.jpeg";
import cctv from "../Assets/CCTV.jpeg";
import gps from "../Assets/gp.jpg";
import  whatsapp from "../Assets/Whatsapp.png"
import  Timetable from "../Assets/bt.jpg"
import  rules from "../Assets/rr.jpg"
import  emergency from "../Assets/erg.jpg"

import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Icon, Typography, } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Service = () => {
  const navigate = useNavigate()
  return (
    <>
     <Box sx={{padding:{
    lg:"0rem",
    xs:"1rem",
    md:"0rem",
    sm:"1rem"
  }}}>
  <img src={banner} alt='userbanner' style={{width: '100%',
             height: 'auto',
             backgroundSize:'cover',
             backgroundPosition:'center',
             overflow: 'hidden'
             }}/>
             </Box>
             <Box
       sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',paddingTop:'2rem'}}>
        <Typography sx={{color:'blue',fontSize:'1.4rem'}}>OUR SERVICES</Typography>
      
      </Box>
      <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
       
        <Typography sx={{color:'black',fontSize:{
        xs:"1rem",
        lg:'1.3rem'
      },fontFamily:"700%",fontWeight:"bold"}}>Explore Our Services</Typography>
      </Box>

             <Box pt={'3rem'}>
      <Box>
      <Grid container rowSpacing={4} >
        <Grid display={'flex'} alignItems={'center'} justifyContent={'center'}  xs={12} lg={4} md={4} sm={12}>
        <Card sx={{ maxWidth: 340 }}>
        <CardMedia
        sx={{
          height: 200,
          position: 'relative', // Make sure the container is relative for absolute positioning
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            // backgroundColor: 'rgba(0, 0', // Adjust the color and opacity as needed
            padding: '42px 20px', // Adjust the padding as needed
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            style={{ width: '100%', height: '150%', objectFit: 'cover' }}
            src={cctv}
            alt="green iguana"
          />
        </div>
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <b>CCTV</b>
        </Typography>
        <Typography variant="body2" color="text.secondary" width={'30rem'}>
       <b> Centurion CCTV survilance.</b>
        </Typography>
      </CardContent>
      <CardActions>

        <Button size="small" color='error' onClick={()=>(navigate("/CCTV"))}>Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid xs={12} lg={4} md={4} sm={12} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Card sx={{ maxWidth: 340 }}>
        <CardMedia
        sx={{
          height: 200,
          position: 'relative', // Make sure the container is relative for absolute positioning
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            // backgroundColor: 'rgba(0, 0', // Adjust the color and opacity as needed
            padding: '45px 17px', // Adjust the padding as needed
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            style={{ width: '90%', height: '130%', objectFit: 'cover' }}
            src={gps}
            alt="green iguana"
          />
        </div>
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <b>GPRS</b>
        </Typography>
        <Typography variant="body2" color="text.secondary" width={'30rem'}>
       <b> GPRS Tracking System.</b>
        </Typography>
      </CardContent>
      <CardActions>

        <Button size="small" color='error' onClick={()=>(navigate("/Gprs"))}>Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid xs={12} lg={4} md={4} sm={12} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Card sx={{ maxWidth: 340 }}>
        <CardMedia
        sx={{
          height: 200,
          position: 'relative', // Make sure the container is relative for absolute positioning
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            // backgroundColor: 'rgba(0, 0', // Adjust the color and opacity as needed
            padding: '42px 20px', // Adjust the padding as needed
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            style={{ width: '60%', height: '160%', objectFit: 'cover' }}
            src={whatsapp}
            alt="green iguana"
          />
        </div>
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <b>What's App</b>
        </Typography>
        <Typography variant="body2" color="text.secondary" width={'30rem'}>
       <b> Transport what'sapp community.</b>
        </Typography>
      </CardContent>
      <CardActions>

        <Button size="small" color='error'  onClick={()=>(navigate("/Whatsup"))}>Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
        
      </Grid>
      <Grid container rowSpacing={4} marginTop={'3rem'} >
        <Grid display={'flex'} alignItems={'center'} justifyContent={'center'}  xs={12} lg={4} md={4} sm={12} >
        <Card sx={{ maxWidth: 340 }}>
        <CardMedia
        sx={{
          height: 200,
          position: 'relative', // Make sure the container is relative for absolute positioning
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            // backgroundColor: 'rgba(0, 0', // Adjust the color and opacity as needed
            padding: '42px 20px', // Adjust the padding as needed
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            style={{ width: '100%', height: '150%', objectFit: 'cover' }}
            src={Timetable}
            alt="green iguana"
          />
        </div>
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <b>Time-Table</b>
        </Typography>
        <Typography variant="body2" color="text.secondary" width={'30rem'}>
       <b> Find out bus timings.</b>
        </Typography>
      </CardContent>
      <CardActions>

        <Button size="small" color='error' onClick={()=>(navigate("/Timetable"))}>Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid xs={12} lg={4} md={4} sm={12} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Card sx={{ maxWidth: 340 }}>
        <CardMedia
        sx={{
          height: 200,
          position: 'relative', // Make sure the container is relative for absolute positioning
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            // backgroundColor: 'rgba(0, 0', // Adjust the color and opacity as needed
            padding: '42px 20px', // Adjust the padding as needed
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            style={{ width: '100%', height: '150%', objectFit: 'cover' }}
            src={rules}
            alt="green iguana"
          />
        </div>
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <b>Rules&Regulations</b>
        </Typography>
        <Typography variant="body2" color="text.secondary" width={'30rem'}>
       <b> Follow our rules and Regulations.</b>
        </Typography>
      </CardContent>
      <CardActions>

        <Button size="small" color='error'onClick={()=>(navigate("/Rules"))} >Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid xs={12} lg={4} md={4} sm={12} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Card sx={{ maxWidth: 340 }}>
        <CardMedia
        sx={{
          height: 200,
          position: 'relative', // Make sure the container is relative for absolute positioning
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            // backgroundColor: 'rgba(0, 0', // Adjust the color and opacity as needed
            padding: '42px 20px', // Adjust the padding as needed
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            style={{ width: '100%', height: '150%', objectFit: 'cover' }}
            src={emergency}
            alt="green iguana"
          />
        </div>
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <b>Emergency Services</b>
        </Typography>
        <Typography variant="body2" color="text.secondary" width={'30rem'}>
       <b> CUTM provides Emergency Services</b>
        </Typography>
      </CardContent>
      <CardActions>

        <Button size="small" color='error' onClick={()=>(navigate("/Emergency"))}>Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
        
      </Grid>
    </Box>
      </Box>
    </>
  )
}

export default Service