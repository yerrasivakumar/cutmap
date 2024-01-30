import React, { useEffect, useState } from 'react'

import slider1 from "../Assets/bus1.jpeg";
import slider2 from "../Assets/bus2.jpeg";
import slider3 from "../Assets/bus1.jpeg";
import cctv from "../Assets/CCTV.jpeg";
import gps from "../Assets/gp.jpg";
import  whatsapp from "../Assets/Whatsapp.png"
import  Timetable from "../Assets/bt.jpg"
import  rules from "../Assets/rr.jpg"
import  emergency from "../Assets/erg.jpg"
import  bus from "../Assets/bus5.JPG"
import  driver1 from "../Assets/Satyanarayana.jpeg"
import  driver2 from "../Assets/arun.jpeg"

import LanguageIcon from '@mui/icons-material/Language';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShippingOutlined';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Icon, Paper, Typography, useTheme } from '@mui/material';
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from 'react-router-dom';
import demo from "../Assets/th.jpeg"
import axios from 'axios';
import { toast } from 'react-toastify';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const MuiCard = ({ Username, Branch, FeedBack, }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          {/* Left side: Details */}
          <Grid item xs={8}>
            <Typography variant="h6"><b>{Username}</b></Typography>
            <Typography  color="text.secondary">
              {Branch}
            </Typography>
            <Typography sx={{color:'green'}}>
              {FeedBack}
            </Typography>
          </Grid>
          {/* Right side: Image */}
          <Grid item xs={4}>
            <img src={demo} alt="User" style={{ width: '100%', height: 'auto' }} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  </Grid>

  );
};
const images = [
  {
    imgPath: `${slider2}` ,
  },
  {
    imgPath: `${slider1}`,label: "",
  },
  {
    imgPath: `${slider3}`,label: "",
  },
];
const images1 = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

const Home = () => {
 

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const [userfeedback ,setUserfeedback] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/user/AllFeedback').then((response)=>{
     console.log('ss',response?.data?.feedbacks
     );
     setUserfeedback(response?.data?.feedbacks)
    }).catch((error)=>{
     console.log(error);
    })
   },[])
  return (
   <>
   
   <Box>
   <Box>
        <Box >
          <Paper
            square
            elevation={1}
            sx={{
              display: "flex",
            }}
          >
            <Typography>{images[activeStep].label}</Typography>
          </Paper>
          <AutoPlaySwipeableViews
  axis={useTheme.direction === "rtl" ? "x-reverse" : "x"}
  index={activeStep}
  onChangeIndex={handleStepChange}
  enableMouseEvents
>
  {images?.map((step, index) => (
    <div key={step.label}>
      {Math.abs(activeStep - index) <= 2 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            // justifyContent: "center",
            padding:{
              lg:"0rem",
              xs:"1rem",
              md:"0rem",
              sm:"1rem"
            }
          }}
        >
          <Box
            component="img"
            sx={{
              width: "100%",
              height: "80vh",
              backgroundSize: "cover",
              backgroundPosition: "center",
              overflow: "hidden",
            }}
            src={step.imgPath}
            alt={step.label}
          />
          {/* <Typography className='small' variant="h5"
            sx={{
              
              position: "absolute",
               fontSize:"3rem", 
              paddingLeft:"20%",
              transform: "translateX(-50%)",
              color: "white", // Customize text color
            }}>
           {step.label}
          
          </Typography> */}
         
        </Box>
      ) : null}
    </div>
  ))}
</AutoPlaySwipeableViews>

        </Box>
      </Box>
   <Box pt={2}>
   <Box  sx={{backgroundColor:"red", }}><marquee ><p style={{color:"white",fontSize:'1rem'}}>Avail CUTM transport facility. Centurion is providing TATA ULTRA BUSES for student Comfort.</p></marquee></Box>
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



      <Box pt={2}>
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
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
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
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
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
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
        
      </Grid>
      <Grid container rowSpacing={4}  >
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
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
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
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
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
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
        
      </Grid>
    </Box>
      </Box>

      <Box  p={{xs:2,lg:5}} >
      <Grid container  component={Paper} p={2}>
        <Grid  xs={12} lg={6} md={6} sm={12}>
          <Typography variant='h5'><b>OUR FEATURES</b></Typography>
          <Box display={'flex'} alignItems={'center'} flexDirection={'row'} pt={2} gap={6}>
            <Box><Typography>
             
                <LanguageIcon  sx={{
                      fontSize: "3rem",
                      color: `red`,
                      borderRadius: "5%",
                      fontSizeAdjust: 4,
                    }}/>
             
              </Typography></Box>
            <Box >
              <Typography variant='body2'  sx={{color:'black',fontSize:'1.2rem', fontWeight:'bold'}}><b>We Are providing Maximum Traceability</b></Typography>
              <Typography variant='body2'  >With the help of GPRS and CCTV survilance</Typography>
             
              
              </Box>
          </Box>
          
          <Box display={'flex'} alignItems={'center'} flexDirection={'row'} pt={2} gap={6}>
            <Box><Typography>  <LocalShippingIcon sx={{
                      fontSize: "3rem",
                      color: `red`,
                      borderRadius: "5%",
                      fontSizeAdjust: 4,
                    }}/></Typography></Box>
             <Box >
              <Typography variant='body2'  sx={{color:'black',fontSize:'1.2rem', fontWeight:'bold'}}><b>Fastest Mode of Transport</b></Typography>
              <Typography variant='body2'  >Although other means are faster, college transport is much more agile and safe.</Typography>
             
              
              </Box>
          </Box>
          
          <Box display={'flex'} alignItems={'center'} flexDirection={'row'} pt={2} gap={6}>
          <Box><Typography>  <HeadsetMicOutlinedIcon sx={{
                      fontSize: "3rem",
                      color: `red`,
                      borderRadius: "5%",
                      fontSizeAdjust: 4,
                    }}/></Typography></Box>
             <Box >
              <Typography variant='body2'  sx={{color:'black',fontSize:'1.2rem', fontWeight:'bold'}}><b>24/7 Telephone Support</b></Typography>
              <Typography variant='body2'  >24/7 Telephone Support Available, college transport and safe.</Typography>
             
              
              </Box>
          </Box>
          
       </Grid>
        <Grid  xs={12} lg={6} md={6} sm={12}>
        
          <Box>
          <img
            style={{ width: '100%', objectFit: 'cover' }}
            src={bus}
            alt="green iguana"
          />
          </Box>
        
       </Grid>
       
       
       
       
       </Grid></Box>

       <Box
       sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',paddingTop:'2rem'}}>
        <Typography sx={{color:'blue', fontSize:{
        xs:"1rem",
        lg:'1.3rem'
      }}}>OUR TEAM</Typography>
      
      </Box>
      <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
       
        <Typography sx={{color:'black',fontFamily:"700%",display:'flex',flexDirection:'row',justifyContent:'center',fontWeight:"bold",
      fontSize:{
        xs:"1rem",
        lg:'1.3rem'
      }
      }}>Expert Team Members</Typography>
      </Box>


      <Box pt={2}>
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
            style={{ width: '60%', height: '160%', objectFit: 'cover' }}
            src={driver2}
            alt="green iguana"
          />
        </div>
      </CardMedia>
      <CardContent >
        <Typography sx={{display:'flex',alignItems:'center',justifyContent:'center'}} gutterBottom variant="h5" component="div">
          <b>U.Arun Kumar</b>
        </Typography>
        <Typography sx={{display:'flex',alignItems:'center',justifyContent:'center',color:'green'}} variant="body2" color="text.secondary" width={'30rem'}>
       <b> Driver</b>
        </Typography>
      </CardContent>
      <CardActions>
       
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
            style={{ width: '90%', height: '160%', objectFit: 'cover' }}
            src={driver1}
            alt="green iguana"
          />
        </div>
      </CardMedia>
      <CardContent>
        <Typography sx={{display:'flex',alignItems:'center',justifyContent:'center'}} gutterBottom variant="h5" component="div">
          <b>L.Satyanarayana</b>
        </Typography>
        <Typography  sx={{display:'flex',alignItems:'center',justifyContent:'center',color:'green'}}variant="body2" color="text.secondary" width={'30rem'}>
       <b> Driver</b>
        </Typography>
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>
        </Grid>
        <Grid xs={12} lg={4} md={4} sm={12} display={'flex'} alignItems={'center'} justifyContent={'center'} >
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
            src={driver2}
            alt="green iguana"
          />
        </div>
      </CardMedia>
      <CardContent>
        <Typography  sx={{display:'flex',alignItems:'center',justifyContent:'center',}} gutterBottom variant="h5" component="div">
        <b>U.Arun Kumar</b>
        </Typography>
        <Typography sx={{display:'flex',alignItems:'center',justifyContent:'center',color:'green'}} variant="body2" color="text.secondary" width={'30rem'}>
       <b> Driver</b>
        </Typography>
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>
        </Grid>
        
      </Grid>
     
    </Box>
      </Box>

      <Box
       sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',paddingTop:'2rem'}}>
        <Typography sx={{color:'blue', fontSize:{
        xs:"1rem",
        lg:'1.3rem'
      }}}>TESTIMONIAL</Typography>
      
      </Box>
      <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
       
        <Typography sx={{color:'black', fontSize:{
        xs:"1rem",
        lg:'1.3rem'
      },fontFamily:"700%",fontWeight:"bold"}}>Our Students Feedback</Typography>
       </Box>

      <Box>

      {/* <Box  sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        {
          userfeedback.map((item,index)=>{
            return<ul>
              <li>{item.Username}</li>
              <li>{item.Branch}</li>
              <li>{item.FeedBack}</li>
            </ul>
          })
        }
      </Box> */}
       <Box p={5}>
        
       <Grid container spacing={2} >
      {/* Loop over feedback items and render a card for each */}
      {userfeedback?.map((item, index) => (
        <MuiCard key={index} {...item} />
      ))}
    </Grid>
    
     
    </Box>
      </Box>
   </Box>
   </>
  )
}

export default Home
