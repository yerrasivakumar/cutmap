import React from 'react'
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowForwardIos';
import  map from "./Assets/map.png"
import { Box, Grid,  IconButton,  Paper, Typography, } from '@mui/material';
import { Link } from 'react-router-dom';
const Footer = () => {
  const boxStyle = {
    backgroundImage: `url(${map})`,
    backgroundColor:'#060214',
    backgroundSize: 'cover', // Optional: adjust the background size
    backgroundPosition: 'center', // Optional: adjust the background position
    width: '100%', // Optional: set the width of the Box
     // Optional: set the height of the Box
  };
  return (
    <>
    <Box  p={{xs:2,lg:5}} >
       
    <Grid container style={boxStyle} className='bg' component={Paper} p={3}>
      <Grid  xs={12} lg={3} md={3} sm={12}>
      <Typography variant='h5' color="white"><b>Address</b></Typography>
      <Box display={'flex'} alignItems={'center'} flexDirection={'row'} pt={2} gap={3}>
          <Box><Typography>
           
              <PlaceIcon  sx={{
                    fontSize: "1.5rem",
                    color: `white`,
                    borderRadius: "5%",
                    fontSizeAdjust: 4,
                  }}/>
             
           
            </Typography></Box>
          <Box >
            <Typography variant='body2'  sx={{color:'white',fontSize:'0.9rem', fontWeight:'bold'}}><b>Tekkali Village,Nilimarla Mandal,Vizianagaram</b></Typography>
          
           
            
            </Box>
        </Box>
      <Box display={'flex'} alignItems={'center'} flexDirection={'row'} pt={2} gap={3}>
          <Box><Typography>
           
              <PhoneIcon  sx={{
                    fontSize: "1.5rem",
                    color: `white`,
                    borderRadius: "5%",
                    fontSizeAdjust: 4,
                  }}/>
             
           
            </Typography></Box>
          <Box >
            <Typography variant='body2'  sx={{color:'white',fontSize:'0.9rem', fontWeight:'bold'}}><b>6301072269</b></Typography>
          
           
            
            </Box>
        </Box>
      <Box display={'flex'} alignItems={'center'} flexDirection={'row'} pt={2} gap={3}>
          <Box><Typography>
           
              <MailIcon  sx={{
                    fontSize: "1.5rem",
                    color: `white`,
                    borderRadius: "5%",
                    fontSizeAdjust: 4,
                  }}/>
             
           
            </Typography></Box>
          <Box >
            <Typography variant='body2'  sx={{color:'white',fontSize:'0.9rem', fontWeight:'bold'}}><b>yerrasiva1@cutmap.ac.in</b></Typography>
      </Box>  </Box>
       
      <Box display={'flex'} alignItems={'center'} flexDirection={'row'} pt={2} gap={2}>
      <Box >
         <IconButton size='small'   sx={{
          color: 'white',
          borderRadius: '50%',
        
          border: '2px solid white', 
          '&:hover': {
            color: 'red',
          },
        }}>
        <Link to={"https://twitter.com/CUTMIndia"}><TwitterIcon/></Link> 
         </IconButton>
           
            
            </Box>
      <Box >
         <IconButton size='small' sx={{
          color: 'white',
          borderRadius: '50%',
        
          border: '2px solid white', 
          '&:hover': {
            color: 'red',
          },
        }}>
          <Link to={"https://www.facebook.com/centurionuniversity/"}><FacebookIcon/></Link>
         
         </IconButton>
           
            
            </Box>
      <Box >
         <IconButton size='small' sx={{
          color: 'white',
          borderRadius: '50%',
           
          border: '2px solid white', 
          '&:hover': {
            color: 'red',
          },
        }}>
          <Link  to={'https://www.youtube.com/channel/UCy2a2NdleGSGlEd5FxyOcOA'}>

         <YouTubeIcon/>
          </Link>
         </IconButton>
           
            
            </Box>
      </Box>
     </Grid>
      <Grid  xs={12} lg={3} md={3} sm={12}>
      
      <Typography variant='h5' sx={{color:'white'}}><b>Admission</b></Typography>
      <Box display={'flex'} alignItems={'center'} flexDirection={'row'} pt={2} gap={1}>
          <Box><Typography>
           
              <ArrowBackIosNewIcon  sx={{
                    fontSize: "1rem",
                    color: `white`,
                    borderRadius: "5%",
                    fontSizeAdjust: 4,
                  }}/>
             
           
            </Typography></Box>
          <Box >
          <Link to={"https://cutmap.ac.in/admission/"}>
            <Typography variant='body2'  sx={{color:'white',fontSize:'0.9rem', fontWeight:'bold'}}>
            
            <b> Admission</b>
         
           </Typography>
          
           </Link>
            
            </Box>
        </Box>
      <Box display={'flex'} alignItems={'center'} flexDirection={'row'} pt={2} gap={1}>
          <Box><Typography>
           
          <ArrowBackIosNewIcon  sx={{
                    fontSize: "1rem",
                    color: `white`,
                    borderRadius: "5%",
                    fontSizeAdjust: 4,
                  }}/>
             
           
            </Typography></Box>
          <Box >
          <Link to={"https://cutmap.ac.in/admission/how-to-apply/"}>
            <Typography variant='body2'  sx={{color:'white',fontSize:'0.9rem', fontWeight:'bold'}}><b>How to Apply</b></Typography>
          </Link>
           
            
            </Box>
        </Box>
      <Box display={'flex'} alignItems={'center'} flexDirection={'row'} pt={2} gap={1}>
          <Box><Typography>
           
          <ArrowBackIosNewIcon  sx={{
                    fontSize: "1rem",
                    color: `white`,
                    borderRadius: "5%",
                    fontSizeAdjust: 4,
                  }}/>
           
            </Typography></Box>
          <Box >
          <Link to={"https://cutmap.ac.in/admission/course-fee/"}>
            <Typography variant='body2'  sx={{color:'white',fontSize:'0.9rem', fontWeight:'bold'}}><b>Course Fee</b></Typography>
          </Link>
           
            
            </Box>
        </Box>
      <Box display={'flex'} alignItems={'center'} flexDirection={'row'} pt={2} gap={1}>
          <Box><Typography>
           
               <ArrowBackIosNewIcon  sx={{
                    fontSize: "1rem",
                    color: `white`,
                    borderRadius: "5%",
                    fontSizeAdjust: 4,
                  }}/>
             
           
            </Typography></Box>
          <Box >
          <Link to={"https://cutmap.ac.in/admission/cancellation-and-refund-policy/"}>
            <Typography variant='body2'  sx={{color:'white',fontSize:'0.9rem', fontWeight:'bold'}}><b>Refund Policy</b></Typography>
          
           </Link>
            
            </Box>
        </Box>
      <Box display={'flex'} alignItems={'center'} flexDirection={'row'} pt={2} gap={1}>
          <Box><Typography>
           
          <ArrowBackIosNewIcon  sx={{
                    fontSize: "1rem",
                    color: `white`,
                    borderRadius: "5%",
                    fontSizeAdjust: 4,
                  }}/>
           
            </Typography></Box>
          <Box >
          <Link to={"https://cutmap.ac.in/admission/lateral-entry/"}>
          <Typography variant='body2'  sx={{color:'white',fontSize:'0.9rem', fontWeight:'bold'}}>
              <b>Lateral Entry</b></Typography></Link>
            
            </Box>
        </Box>
     </Grid>
      
      <Grid  xs={12} lg={3} md={3} sm={12}>
      
      <Typography variant='h5'  sx={{color:'white'}}><b>
General</b></Typography>
      <Box display={'flex'} alignItems={'center'} flexDirection={'row'} pt={2} gap={1}>
          <Box><Typography>
           
          <ArrowBackIosNewIcon  sx={{
                    fontSize: "1rem",
                    color: `white`,
                    borderRadius: "5%",
                    fontSizeAdjust: 4,
                  }}/>
           
            </Typography></Box>
          <Box >
          <Link to={"https://cutmap.ac.in/download-pdf/?pname=/wp-content/uploads/AP_campus/Holiday-list/HOLIDAY-LIST-2023-24&catID="}>
            <Typography variant='body2'  sx={{color:'white',fontSize:'0.9rem', fontWeight:'bold'}}><b>Holiday List</b></Typography>
          
           </Link>
            
            </Box>
        </Box>
      <Box display={'flex'} alignItems={'center'} flexDirection={'row'} pt={2} gap={1}>
          <Box><Typography>
           
          <ArrowBackIosNewIcon  sx={{
                    fontSize: "1rem",
                    color: `white`,
                    borderRadius: "5%",
                    fontSizeAdjust: 4,
                  }}/>
             
           
            </Typography></Box>
          <Box >
          <Link to={"https://cutmap.ac.in/"}>
            <Typography variant='body2'  sx={{color:'white',fontSize:'0.9rem', fontWeight:'bold'}}><b>CourseWare APK</b></Typography>
          </Link>
           
            
            </Box>
        </Box>
      <Box display={'flex'} alignItems={'center'} flexDirection={'row'} pt={2} gap={1}>
          <Box><Typography>
           
          <ArrowBackIosNewIcon  sx={{
                    fontSize: "1rem",
                    color: `white`,
                    borderRadius: "5%",
                    fontSizeAdjust: 4,
                  }}/>
             
           
            </Typography></Box>
          <Box >
          <Link to={"https://cutmap.ac.in/students-credentials-verification/"}>
            <Typography variant='body2'  sx={{color:'white',fontSize:'0.9rem', fontWeight:'bold'}}><b>Student Verification</b></Typography>
          </Link>
           
            
            </Box>
        </Box>
      <Box display={'flex'} alignItems={'center'} flexDirection={'row'} pt={2} gap={1}>
          <Box><Typography>
          <ArrowBackIosNewIcon  sx={{
                    fontSize: "1rem",
                    color: `white`,
                    borderRadius: "5%",
                    fontSizeAdjust: 4,
                  }}/>
           
            </Typography></Box>
          <Box >
          <Link to={"https://cutmap.ac.in/sitemap/"}>
            <Typography variant='body2'  sx={{color:'white',fontSize:'0.9rem', fontWeight:'bold'}}><b>Site-map</b></Typography>
          
           </Link>
            
            </Box>
        </Box>
      
     </Grid>
      
      <Grid  xs={12} lg={3} md={3} sm={12}>
      
      <Typography variant='h5'  sx={{color:'white'}}><b>Placements</b></Typography>
      <Box display={'flex'} alignItems={'center'} flexDirection={'row'} pt={2} gap={1}>
          <Box><Typography>
           
          <ArrowBackIosNewIcon  sx={{
                    fontSize: "1rem",
                    color: `white`,
                    borderRadius: "5%",
                    fontSizeAdjust: 4,
                  }}/>
             
           
            </Typography></Box>
          <Box >
          <Link to={"https://cutmap.ac.in/placements/overview/"}>
            <Typography variant='body2'  sx={{color:'white',fontSize:'0.9rem', fontWeight:'bold'}}><b>Overview</b></Typography>
          
           </Link>
            
            </Box>
        </Box>
      <Box display={'flex'} alignItems={'center'} flexDirection={'row'} pt={2} gap={1}>
          <Box><Typography>
           
          <ArrowBackIosNewIcon  sx={{
                    fontSize: "1rem",
                    color: `white`,
                    borderRadius: "5%",
                    fontSizeAdjust: 4,
                  }}/>
             
           
            </Typography></Box>
          <Box >
          <Link to={"https://cutmap.ac.in/placements/our-recruiters/"}>
            <Typography variant='body2'  sx={{color:'white',fontSize:'0.9rem', fontWeight:'bold'}}><b>Our Recruiters</b></Typography>
          </Link>
           
            
            </Box>
        </Box>
      <Box display={'flex'} alignItems={'center'} flexDirection={'row'} pt={2} gap={1}>
          <Box><Typography>
           
          <ArrowBackIosNewIcon  sx={{
                    fontSize: "1rem",
                    color: `white`,
                    borderRadius: "5%",
                    fontSizeAdjust: 4,
                  }}/>
             
           
            </Typography></Box>
          <Box >
          <Link to={"https://cutmap.ac.in/placements/placement-brochure/"}>
            <Typography variant='body2'  sx={{color:'white',fontSize:'0.9rem', fontWeight:'bold'}}><b>Placement Brochure</b></Typography>
          </Link>
           
            
            </Box>
        </Box>
      <Box display={'flex'} alignItems={'center'} flexDirection={'row'} pt={2} gap={1}>
          <Box><Typography>
           
          <ArrowBackIosNewIcon  sx={{
                    fontSize: "1rem",
                    color: `white`,
                    borderRadius: "5%",
                    fontSizeAdjust: 4,
                  }}/>
             
           
            </Typography></Box>
          <Box >
          <Link to={"https://cutmap.ac.in/placements/contact-placement-cell/"}>
            <Typography variant='body2'  sx={{color:'white',fontSize:'0.9rem', fontWeight:'bold'}}><b>Carrer-Development Cell</b></Typography>
          
           </Link>
            
            </Box>
        </Box>
     
     </Grid>
      
     
     
     
     
     </Grid></Box>
     <Box p={2}>
     <Grid  xs={12} lg={12} md={12} sm={12}>
     <Box  component="paper" display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'row'} >
      <Typography variant='body2' >
      © 2022 Centurion University | Disclaimer | Privacy Policy | Terms of Use | Blog
      </Typography>
        </Box>
     </Grid>
     </Box>
     </>
  )
}

export default Footer