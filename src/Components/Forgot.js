import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Forgot = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState('')
  const [newPassword,setNewPassword] = useState('')
  const [chosse,setChosse] = useState('')

  const handleSubmit = () =>{
    if(!email){
      toast.error('Enter a Email')
    }else if(!newPassword){
    toast.error('Enter a NewPassword')
    }else if(!chosse){
       toast.error('Enter a Favorite Friend name')
    }else{
      axios({
        method: "post",
        url: `http://localhost:3000/auth/resetpassword`,
        data:{
          "email":email,
          "newPassword":newPassword,
          "chosse":chosse
        }
   }).then((response)=>{
    navigate("/")
    toast.success(response?.data?.message)
   }).catch((error)=>{
 toast.error(error.response?.data.message);
   })
  }
  setEmail('')
  setNewPassword('')
  setChosse('')
    }
  return (
    <>
     <Box sx={{
    display:'flex',
    justifyContent:"center",
    alignItems:"center",
   padding:'5rem'

  }}>
  <Paper elevation={3}  >
 
    
    <Box   display={"flex"} alignItems={'center'} justifyContent={'center'} >

<Typography variant='h5'><b>Forgot-Password</b></Typography>
</Box>
<Box p={2} justifyContent="center" alignItems={"center"} display={"flex"}>


            
  <form >
            <Box pt={2} >
            <TextField
            required
            size="small"
            placeholder={'Email'}
            label={'Email'}
           fullWidth
           name="Email"
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
          />
            </Box>
            <Box pt={2} >
            <TextField
            required
            size="small"
            placeholder={'NewPassword'}
            label={'NewPassword'}
           fullWidth
           name="NewPassword"
           value={newPassword}
           onChange={(e)=>setNewPassword(e.target.value)}
          />
            </Box>
          
            <Box pt={2}>
            
            <TextField
            size="small"
            required
            placeholder={'Confirm-Password'}
            label={'Confirm-Password'}
            fullWidth
           name="Confirm-Password"
           
          />
            </Box>
              <Box pt={2}>
            
            <TextField
            size="small"
            required
            placeholder={'Your Favorite Friend name'}
            label={'Your Favorite Friend name'}
            fullWidth
           name="Your Favorite Friend name"
           value={chosse}
           onChange={(e)=>setChosse(e.target.value)}
           
          />
            </Box>
            </form>
            </Box>
          
      
      
<Box>
            <Button fullWidth variant="contained"  autoFocus onClick={handleSubmit} >
     Submit
    </Button>
            </Box>
           



  </Paper>
  </Box>
    </>
  )
}

export default Forgot