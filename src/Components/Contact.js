import React, { useState } from 'react'
import banner from "../Assets/bus2.jpeg";
import driver1 from "../Assets/aboutimage1.JPG";
import driver2 from "../Assets/aboutimage2.JPG";
import driver3 from "../Assets/aboutimage3.JPG";
import driver4 from "../Assets/aboutimage4.JPG";
import driver5 from "../Assets/aboutimage5.JPG";
import driver6 from "../Assets/aboutimage6.JPG";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Paper, TextField, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import axios from 'axios';
const Contact = () => {

  const [cusername,setCusername] = useState('')
  const [cgmail,setCgmail] = useState('')
  const [cmessage,setCmessage] = useState('')

  const Contactform = (e) =>{
    e.preventDefault();
    if(!cusername){
      toast.error('Enter the Name')
    }else if(!cgmail){
      toast.error('Enter the Email')
    }else if(!cmessage){
      toast.error('Enter the Message')
    }else{
      axios.post('http://localhost:3000/user/contactform',
      {
        "Name":cusername,
        "Gmail":cgmail,
        "Message":cmessage
   }).then((response)=>{
    // setOpen5(false);
    // console.log(response?.data?.message);
   toast.success(response?.data?.message)
   }).catch((error)=>{
    toast.error(error.response.data.message)
   })
  setCusername("");
  setCgmail("");
  setCmessage("");
    }
  }
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

          
         
             <Box pt={3} 
       sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
        <Typography sx={{color:'black',fontSize:'2rem'}}>Contact Us</Typography>
      
      </Box>
      <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
       
        <Typography sx={{color:'black',fontSize:{
        xs:"1rem",
        lg:'1.3rem'
      },fontFamily:"700%",fontWeight:"bold"}}>For any Tranport Support 24/7</Typography>
      </Box>



     <Box p={3}>
     <Box sx={{ flexGrow: 1}} >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={12} sm={12} md={4} lg={4} display={'flex'} alignItems={'center'} justifyContent={'center'} >
          <Card sx={{ maxWidth: 250 }}>
        
      <CardContent>
        <Typography variant='body3' gutterBottom  component="div">
          <b>Deputy-Incharge
</b>
        </Typography>
        <Typography variant="body1" color="text.secondary" maxWidth={'40rem'}>
       <b> Deputy-Incharge
+91 1234567899
deputyregister@cutmap.ac.in</b>
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} display={'flex'} alignItems={'center'} justifyContent={'center'} >
          <Card sx={{ maxWidth: 250 }}>
        
      <CardContent>
        <Typography gutterBottom variant="body3" component="div">
          <b>Transport Incharge
</b>
        </Typography>
        <Typography variant="body1" color="text.secondary"maxWidth={'40rem'}>
       <b> Transport Incharge
+91123456789
transport@cutmap.ac.in</b>
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} display={'flex'} alignItems={'center'} justifyContent={'center'} >
          <Card sx={{ maxWidth: 250 }}>
        
      <CardContent>
        <Typography gutterBottom variant="body3" component="div">
          <b>CustomCare</b>
        </Typography>
        <Typography variant="body1" color="text.secondary" maxWidth={'40rem'}>
       <b>Transport CustomCare
+91123456789
transport@cutmap.ac.in</b>
        </Typography>
      </CardContent>
     
    </Card>
        </Grid>
      </Grid>
    </Box>
     </Box>
      

      <Box  p={{xs:2,lg:5}} >
      <Grid container  component={Paper} p={2} >
        <Grid  xs={12} lg={6} md={6} sm={12}   display={'flex'} alignItems={'center'} flexDirection={'column'}>
          <Typography variant='h6'><b>Contact From</b></Typography>
          <Box display={'flex'} alignItems={'center'} flexDirection={'row'} pt={2}  >
            <Box><Typography>
             
                <TextField placeholder='UserName' size='small' fullWidth name='UserName'
                value={cusername} onChange={(e)=>setCusername(e.target.value)}
                />
             
              </Typography></Box>
            
          </Box>
          
          <Box display={'flex'} alignItems={'center'} flexDirection={'row'} pt={2} >
            <Box>
            <Typography>
             
             <TextField placeholder='Gmail' name='Gmail' size='small' fullWidth value={cgmail} onChange={(e)=>setCgmail(e.target.value)}/>
          
           </Typography>
            </Box>
            
          </Box>
          
          <Box display={'flex'} alignItems={'center'} flexDirection={'row'} pt={2} >
          <Box><Typography><TextField size='small' placeholder='Message' name='Message' value={cmessage} onChange={(e)=>setCmessage(e.target.value)} fullWidth/></Typography></Box>
             
          </Box>

          <Box display={'flex'} alignItems={'center'} flexDirection={'row'} pt={2} >
          <Button variant='contained'  sx={{backgroundColor:'red',width:"220px"}} onClick={Contactform}>Button</Button>
             
          </Box>
          
       </Grid>
        <Grid  xs={12} lg={6} md={6} sm={12}>
        
          <Box sx={{padding:{
            xs:'1rem',
            lg:'0rem'
          },
         
       
          }}>
          {/* <img
            style={{ width: '100%', objectFit: 'cover' }}
            src={banner}
            alt="green iguana"
          /> */}
           <center>
        
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d485177.74821636896!2d83.39253!3d18.18918!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3bef5e7fab5d93%3A0x8539c45d69778c2f!2sCenturion%20University%20Vizianagaram%20-%20BTech%20Engineering%20College%2C%20Paramedical%20Courses!5e0!3m2!1sen!2sus!4v1704353802851!5m2!1sen!2sus"
          height="250"
          width="100%" // Set the initial width to 100% for responsiveness
          maxWidth={{ xs: '100%', lg: '350px' }} // Set the maximum width for large screens
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </center>
          </Box>
        
       </Grid>
       
       
       
       
       </Grid></Box>
  
    </>
  )
}

export default Contact