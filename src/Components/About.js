import React from 'react'
import banner from "../Assets/bus2.jpeg";


import driver1 from "../Assets/aboutimage1.JPG";
import driver2 from "../Assets/aboutimage2.JPG";
import driver3 from "../Assets/aboutimage3.JPG";
import driver4 from "../Assets/aboutimage4.JPG";
import driver5 from "../Assets/aboutimage5.JPG";
import driver6 from "../Assets/aboutimage6.JPG";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';










const About = () => {


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
 
 
              <Box p={3}
        sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
         <Typography sx={{color:'black',fontSize:'1rem'}}>Centurion is providing Bus facility from many location. Students can avail bus facility from different locations such as , visakhapatnam , vijayanagaram. We are maintaining TATA- ULTRA bus models for our students flexibility and safaty. Centurion has a well experienced drivers team. It is mandotory that every year drivers need to submit Vision and fitness certificate inorder to start the service. we are providing many services in our transport wing. please refer once in services page.</Typography>
       
       </Box>
              <Box pt={3}
        sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
         <Typography sx={{color:'black',fontSize:'2rem'}}>Gallery</Typography>
       
       </Box>
              
 <Box pt={5}>
       <Box>
       <Grid container rowSpacing={4}  >
         <Grid display={'flex'} alignItems={'center'} justifyContent={'center'}  xs={12} lg={4} md={4} sm={12} >
         <Card sx={{ maxWidth: 340 }}>
         <CardMedia
         sx={{
           height: 350,
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
             padding: '60px 20px', // Adjust the padding as needed
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
           }}
         >
           <img
             style={{ width: '100%', height: '140%', objectFit: 'cover' }}
             src={driver1}
             alt="green iguana"
           />
         </div>
       </CardMedia>
       <CardContent>
         {/* <Typography gutterBottom variant="h5" component="div">
         <b>What's App</b>
         </Typography> */}
         <Typography variant="body2" color="text.secondary" width={'30rem'}>
        {/* <b> Transport what'sapp community.</b> */}
         </Typography>
       </CardContent>
       {/* <CardActions>
         <Button size="small">Share</Button>
         <Button size="small">Learn More</Button>
       </CardActions> */}
     </Card>
         </Grid>
         <Grid xs={12} lg={4} md={4} sm={12} display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <Card sx={{ maxWidth: 340 }}>
         <CardMedia
         sx={{
           height: 350,
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
             padding: '60px 20px', // Adjust the padding as needed
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
           }}
         >
           <img
             style={{ width: '100%', height: '140%', objectFit: 'cover' }}
             src={driver2}
             alt="green iguana"
           />
         </div>
       </CardMedia>
       <CardContent>
         {/* <Typography gutterBottom variant="h5" component="div">
         <b>What's App</b>
         </Typography> */}
         <Typography variant="body2" color="text.secondary" width={'30rem'}>
        {/* <b> Transport what'sapp community.</b> */}
         </Typography>
       </CardContent>
       {/* <CardActions>
         <Button size="small">Share</Button>
         <Button size="small">Learn More</Button>
       </CardActions> */}
     </Card>
         </Grid>
         <Grid xs={12} lg={4} md={4} sm={12} display={'flex'} alignItems={'center'} justifyContent={'center'}>
         <Card sx={{ maxWidth: 340 }}>
         <CardMedia
         sx={{
           height: 350,
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
             padding: '60px 20px', // Adjust the padding as needed
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
           }}
         >
           <img
             style={{ width: '100%', height: '140%', objectFit: 'cover' }}
             src={driver3}
             alt="green iguana"
           />
         </div>
       </CardMedia>
       <CardContent>
         {/* <Typography gutterBottom variant="h5" component="div">
         <b>What's App</b>
         </Typography> */}
         <Typography variant="body2" color="text.secondary" width={'30rem'}>
        {/* <b> Transport what'sapp community.</b> */}
         </Typography>
       </CardContent>
       {/* <CardActions>
         <Button size="small">Share</Button>
         <Button size="small">Learn More</Button>
       </CardActions> */}
     </Card>
         </Grid>
         
       </Grid>
       <Grid container rowSpacing={4}  pt={6}>
         <Grid display={'flex'} alignItems={'center'} justifyContent={'center'}  xs={12} lg={4} md={4} sm={12}>
         <Card sx={{ maxWidth: 340 }}>
         <CardMedia
         sx={{
           height: 350,
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
             padding: '60px 20px', // Adjust the padding as needed
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
           }}
         >
           <img
             style={{ width: '100%', height: '140%', objectFit: 'cover' }}
             src={driver4}
             alt="green iguana"
           />
         </div>
       </CardMedia>
       <CardContent>
         {/* <Typography gutterBottom variant="h5" component="div">
         <b>What's App</b>
         </Typography> */}
         <Typography variant="body2" color="text.secondary" width={'30rem'}>
        {/* <b> Transport what'sapp community.</b> */}
         </Typography>
       </CardContent>
       {/* <CardActions>
         <Button size="small">Share</Button>
         <Button size="small">Learn More</Button>
       </CardActions> */}
     </Card>
         </Grid>
         <Grid xs={12} lg={4} md={4} sm={12} display={'flex'} alignItems={'center'} justifyContent={'center'}>
         <Card sx={{ maxWidth: 340 }}>
         <CardMedia
         sx={{
           height: 350,
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
             padding: '60px 20px', // Adjust the padding as needed
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
           }}
         >
           <img
             style={{ width: '100%', height: '140%', objectFit: 'cover' }}
             src={driver5}
             alt="green iguana"
           />
         </div>
       </CardMedia>
       <CardContent>
         {/* <Typography gutterBottom variant="h5" component="div">
         <b>What's App</b>
         </Typography> */}
         <Typography variant="body2" color="text.secondary" width={'30rem'}>
        {/* <b> Transport what'sapp community.</b> */}
         </Typography>
       </CardContent>
       {/* <CardActions>
         <Button size="small">Share</Button>
         <Button size="small">Learn More</Button>
       </CardActions> */}
     </Card>
         </Grid>
         <Grid xs={12} lg={4} md={4} sm={12} display={'flex'} alignItems={'center'} justifyContent={'center'}>
         <Card sx={{ maxWidth: 340 }}>
         <CardMedia
         sx={{
           height: 350,
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
             padding: '60px 20px', // Adjust the padding as needed
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
           }}
         >
           <img
             style={{ width: '100%', height: '140%', objectFit: 'cover' }}
             src={driver6}
             alt="green iguana"
           />
         </div>
       </CardMedia>
       <CardContent>
         {/* <Typography gutterBottom variant="h5" component="div">
         <b>What's App</b>
         </Typography> */}
         <Typography variant="body2" color="text.secondary" width={'30rem'}>
        {/* <b> Transport what'sapp community.</b> */}
         </Typography>
       </CardContent>
       {/* <CardActions>
         <Button size="small">Share</Button>
         <Button size="small">Learn More</Button>
       </CardActions> */}
     </Card>
         </Grid>
         
       </Grid>
      
     </Box>
       </Box>
   
     </>
  )
}
    
export default About