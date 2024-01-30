import React, { useEffect, useState } from 'react'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import EditIcon from '@mui/icons-material/Edit';
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  TableBody,
  TableRow,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TextField,
 
  Grid,
  TableCell,
  tableCellClasses,
  
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
 
} from "@mui/material";

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import styled from '@emotion/styled';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux'
// import { setbranch } from '../slices';
import demo from "../Assets/th.jpeg"
import { yellow } from '@mui/material/colors';








function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const AdminDashBoard = () => {


  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#cccccc",
      color: "#343434",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
    borderRight: "1.5px solid #ababab",
  }));
  
  // const StyledTableRow = styled(TableRow)(({ theme }) => ({
  //   position: "relative",
  //   "&::after": {
  //     content: '""',
  //     position: "absolute",
  //     left: 0,
  //     right: 0,
  //     bottom: 0,
  //     height: "1px", // Adjust the thickness of the horizontal lines as needed
  //     backgroundColor: "#ababab", // Customize the color of the horizontal lines
  //   },
  // }));
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [users, setUsers] = useState([{}]);
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  
   const [acceptedCount, setAcceptedCount] = useState(0);
  const [rejectCount, setRejectCount] = useState(0);
  const [requestCount, setRequestCount] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
 
  const [request, setRequest] = useState();
  const [type, setType] = useState();
  const [fromid, setFromid] = useState();
  const [type1, setType1] = useState();
  const [fromid1, setFromid1] = useState();
  const [images,setImages] = useState([])


  const moment = require('moment');
const today = moment();
const tt = today.format('YYYY-MM-DD');
// const [images,setImages] = useState('')
  //console.log('hello',tt)

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:3000/auth/AlluserDetails`
    })
      .then((response) => {
        // console.log('ssss',response?.data?.users[0]?.AdminbuspassAccepted?.[0]?.BusAccept)
      setRequest(response?.data?.users[0]?.Accepted[0]?.Accept)
        setUsers(response?.data?.users);
        // dispatch(setbranch(response?.data?.users[0]?.branch));
        //dispatch(setAccepted(response?.data?.users[0]?.Accepted[0]?.Accept));
        //dispatch(setmessage(response?.data?.users[0]?.Accepted[0]?.message));
        setMaleCount(response?.data?.maleCount)
        setFemaleCount(response?.data?.femaleCount)
        setTotalCount(response?.data?.totalCount)
        setRequestCount(response?.data?.fromRequestedCount)
        setAcceptedCount(response?.data?.acceptedCount)
        setRejectCount(response?.data?.rejectedCount)
        // console.log('hiii')
        response?.data?.users?.forEach((imagess)=>{
          if(imagess.image?.length){
            axios.get(`http://localhost:3000/auth/image/${imagess.image[0]?.imageData}`,{
          responseType: "arraybuffer",
          "Content-Type": "image/png",

        }).then((response)=>{
      //console.log('sadas',response.data)

        const base64 = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ''
          )
        )
        // console.log("ssss",images);
        setImages(prev=>[...prev,base64])
      
      
      })
          }
          else{
            setImages(prev=>[...prev,demo])
         
    }
        })
        
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      });
      
  }, []);

  
  const [useremails ,setUseremails] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/user/AllEmails').then((response)=>{
    //  console.log('ss',response?.data?.Forms
    //  );
     setUseremails(response?.data?.Forms)
    }).catch((error)=>{
     console.log(error);
    })
   },[])
 

const [seachtext,setSeachtext] = useState('')
 //const [seachdata,setSeachdata] = useState([])
 const handleChange1 =(e)=>{
  setSeachtext(e.target.value);
  if(!e.target.value){
   // window.location.reload();
   
 
    axios({
      method: "get",
      url: `http://localhost:3000/auth/AlluserDetails`
    })
      .then((response) => {
        setRequest(response?.data?.users[0]?.fromrequested[0])
        setUsers(response?.data?.users);
        setMaleCount(response?.data?.maleCount)
        setFemaleCount(response?.data?.femaleCount)
        setTotalCount(response?.data?.totalCount)
        setRequestCount(response?.data?.fromRequestedCount)
        setAcceptedCount(response?.data?.acceptedCount)
        setRejectCount(response?.data?.rejectedCount)

      })
      .catch((error) => {
        console.log(error);
      });
 

  }
}
  const HandelSearch1 = (e) => {
    if (!seachtext) {
      toast.error('Please Enter the RollNumber')
    } else{
      setUsers(users?.filter(item => item?.registrationNumber === seachtext))
    }
  }

const [rootno,setRootno] = useState('')
// const [filteredUsers, setFilteredUsers] = useState([]);
const [filteredUsersCount, setFilteredUsersCount] = useState(0);
  const HandelSearch2= (e) => {
    if (!rootno) {
      toast.error('Please Enter the BusNumber')
    } else{
      const filteredData = users.filter(item => item?.BoadingPoint === rootno);
      setUsers(filteredData)
      setFilteredUsersCount(filteredData.length);
    }
  }

  const handleChange2 =(e)=>{
    setRootno(e.target.value);
    if(!e.target.value){
      // window.location.reload();
      setUsers([{}]);
      setFilteredUsersCount(0);
    
       axios({
         method: "get",
         url: `http://localhost:3000/auth/AlluserDetails`
       })
         .then((response) => {
           setRequest(response?.data?.users[0]?.fromrequested[0])
           setUsers(response?.data?.users);
           setMaleCount(response?.data?.maleCount)
           setFemaleCount(response?.data?.femaleCount)
           setTotalCount(response?.data?.totalCount)
           setRequestCount(response?.data?.fromRequestedCount)
           setAcceptedCount(response?.data?.acceptedCount)
           setRejectCount(response?.data?.rejectedCount)
   
         })
         .catch((error) => {
           console.log(error);
         });
    
   
     }}
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  
const [upi,setUpi] = useState('')
const [bpoint,setBpoint] = useState('')
const [payupdated,setPayupdated] = useState('')
const [payid,setPayid] = useState('')
const [paystatus,setPaystatus] = useState('')
const [imginx,setImginx] = useState('')

const handleClose5 = (value) => {
  setOpen5(false);
};
const handleClickOpen5 = (indeximg) => {
  setImginx(indeximg)
   setOpen5(true);
};

const handleClose4 = (value) => {
  setOpen4(false);
};
const handleClickOpen4 = (busId,status) => {
  // console.log('id',busId);
  // console.log('idstatus',status);
  setPayid(busId);
  setPayupdated(status)
  setOpen4(true);
};

useEffect(() => {
  setPaystatus(payupdated);
}, [payupdated]);



const sumbithandle4 = ()=>{
  axios({
       method: "put",
       url: `http://localhost:3000/auth/buspass/accept/${payid}`,
       data:{
        "BusAccept":paystatus
       }
  }).then((response)=>{
    setOpen4(false);
    // console.log(response);
    if(response){
      toast.success(response?.data.message)
      window.location.reload();
    }
  }).catch((error)=>{
toast.error(error.response?.data.message);
  })
}




const handleClose3 = (value) => {
  setOpen3(false);
};
const handleClickOpen3 = (userId,point) => {
  setUpi(userId);
  setBpoint(point)
  setOpen3(true);
 
};

useEffect(() => {
  setBusno(bpoint);
}, [bpoint]);
 
  const [busno,setBusno] = useState('')
const sumbithandle3 = ()=>{
  axios({
       method: "put",
       url: `http://localhost:3000/auth/users/${upi}`,
       data:{
        "BoadingPoint":busno,
       }
  }).then((response)=>{
    setOpen3(false);
    //console.log(response?.data.message);
    if(response){
      toast.success(response?.data.message)
      axios({
        method: "get",
        url: `http://localhost:3000/auth/AlluserDetails`
      })
        .then((response) => {
          setRequest(response?.data?.users[0]?.fromrequested[0])
          setUsers(response?.data?.users);
          setMaleCount(response?.data?.maleCount)
          setFemaleCount(response?.data?.femaleCount)
          setTotalCount(response?.data?.totalCount)
          setRequestCount(response?.data?.fromRequestedCount)
          setAcceptedCount(response?.data?.acceptedCount)
          setRejectCount(response?.data?.rejectedCount)
  
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }).catch((error)=>{
toast.error(error.response?.data.message);
  })
}
  // const sumbithandle = (e) =>{
  //   e.preventDefault();
  //  //  console.log('date', userdate);
  //   axios({
  //    method: "put",
  //    url: `http://localhost:3000/auth/${token1}`,
  //    data:{
  //      'firstName':usedeta.firstName,
  //      'lastName':usedeta.lastName,
  //      'age':usedeta.age,
  //      'phoneNumber':usedeta.phoneNumber,
  //      'address':usedeta.address,
  //      "year":usedeta.year,
      
  //    }
  //  })
  //  .then((response) => {
  //    console.log(response);
  //    toast.success('User Details Updated Successfully')
  //    setOpen5(false);
  //  })
  //  .catch((error) => {
  //    console.log(error?.response?.data?.message);
  //  });
  //  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const handleClickOpen1 = (id,type,from) => {
    setOpen1(true);
    setAcpt(id)
    setType(type)
    setFromid(from)
  };

  const handleClose1 = (value) => {
    setOpen1(false);
  };
  const handleClickOpen2 = (id,type,bus) => {
    setOpen2(true);
    setPayacpt(id)
    setType1(type)
    setFromid1(bus)
    //console.log("kkkk",id);
   
  };

  const handleClose2 = (value) => {
    setOpen2(false);
  };



 const [ausername,setAusername] = useState('');
  const [agmail,setAgmail] = useState('');
  const [apassword,setApassword] = useState('');
  const [phoneNumber,setPhoneNumber] = useState('');
  const [employeeId,setEmployeeId] = useState('');
  const [message,setMessage] = useState('');
  const [acpt,setAcpt] = useState('');
  const [payacpt,setPayacpt] = useState('');
  const [astatus,setAstatus] = useState('');
 
  let dispatch = useDispatch()

const sumbithandle1 = () =>{
  if(type === true){
    if(!message){
      toast.error('Enter a Message')
    }else{
      axios({
        method: "post",
        url: `http://localhost:3000/auth/Accept`,
        data:{
          "userId": acpt,
          "Accept": true,
          'message':message,
          
    
        }
      })
      .then((response) => {
        setOpen1(false);
        toast.success('User Message Sent Successfully')
        window.location.reload();
        
        setAstatus(response?.data?.users[0]?.Accepted[0].accept)
        //window.location.reload();
        //  console.log("sssss",response?.data?.users[0]?.Accepted[0].accept);
        // setAcpt(response?.data?.users[0]?.Accepted[0].accept)
  if(response?.data?.users[0]?.Accepted[0].accept === 200){
    axios({
      method: "get",
      url: `http://localhost:3000/auth/AlluserDetails`
    })
      .then((response) => {
        setRequest(response?.data?.users[0]?.fromrequested[0])
        setUsers(response?.data?.users);
        setMaleCount(response?.data?.maleCount)
        setFemaleCount(response?.data?.femaleCount)
        setTotalCount(response?.data?.totalCount)
        setRequestCount(response?.data?.fromRequestedCount)
        setAcceptedCount(response?.data?.acceptedCount)
        setRejectCount(response?.data?.rejectedCount)

      })
      .catch((error) => {
        console.log(error);
      });
  }
       
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      });
    }
  }else{
    if(!message){
      toast.error('Enter a Message')
    }else{
      axios({
        method: "delete",
        url: `http://localhost:3000/auth/deleteform/${acpt}/requests/${fromid}`,

      })
      .then((response) => {
        //  console.log("sssss",response?.data?.users[0]?.Accepted[0].accept);
        // setAcpt(response?.data?.users[0]?.Accepted[0].accept)
        setOpen1(false);
        toast.success('User Request From deleted Successfully')
        axios({
          method: "get",
          url: `http://localhost:3000/auth/AlluserDetails`
        })
          .then((response) => {
          console.log('ssss',response?.data?.users[0]?.Accepted[0]?.Accept
          );
          setRequest(response?.data?.users[0]?.Accepted[0]?.Accept)
            setUsers(response?.data?.users);
           
            setMaleCount(response?.data?.maleCount)
            setFemaleCount(response?.data?.femaleCount)
            setTotalCount(response?.data?.totalCount)
            setRequestCount(response?.data?.fromRequestedCount)
            setAcceptedCount(response?.data?.acceptedCount)
            setRejectCount(response?.data?.rejectedCount)
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      });
      setMessage("")
    }

  }

}

const [payment,setPayment] = useState('')

const sumbithandle2 = () =>{
  // console.log("ggggg",payment);
  if(type1 === true){
    if(!payment){
      toast.error('Please selected a dropdown')
    }else{
      axios({
        method: "post",
        url: `http://localhost:3000/auth/BusPassAccept`,
        data:{
              "userId": payacpt,
              "BusAccept":payment
            }
      })
      .then((response) => {
      if(response){
        setOpen2(false);
        toast.success('User Message Sent Successfully')
      }
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
       
      });
      setPayment("")
    }
  }else{
    if(!message){
      toast.error('Enter a Message')
    }else if(type1 === false){
      axios({
        method: "delete",
        url: `http://localhost:3000/auth/deleteform/${payacpt}/requests/${fromid1}`,

      })
      .then((response) => {
        //  console.log("sssss",response?.data?.users[0]?.Accepted[0].accept);
        // setAcpt(response?.data?.users[0]?.Accepted[0].accept)
        setOpen1(false);
        toast.success('User Request From deleted Successfully')
        axios({
          method: "get",
          url: `http://localhost:3000/auth/AlluserDetails`
        })
          .then((response) => {
          console.log('ssss',response?.data?.users[0]?.Accepted[0]?.Accept
          );
          setRequest(response?.data?.users[0]?.Accepted[0]?.Accept)
            setUsers(response?.data?.users);
           
            setMaleCount(response?.data?.maleCount)
            setFemaleCount(response?.data?.femaleCount)
            setTotalCount(response?.data?.totalCount)
            setRequestCount(response?.data?.fromRequestedCount)
            setAcceptedCount(response?.data?.acceptedCount)
            setRejectCount(response?.data?.rejectedCount)
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      });
      setMessage("")
    }
  }
  

}
  


const sumbithandle = () =>{
  if(!ausername){
  toast.error('Enter a UserName')
  }else if(!agmail){
    toast.error('Enter a Gmail')
  }else if(!apassword){
    toast.error('Enter a Password')
  }
  else if(!employeeId){
    toast.error('Enter a EmplyeeId')
  }
  else if(!phoneNumber){
    toast.error('Enter a PhoneNumber')
  }
  else{
    
  
  axios({
    method: "post",
    url: `http://localhost:3000/user/adminRegistration`,
    data:{
      'username':ausername,
      'email':agmail,
      'password':apassword,
      'employeeId':employeeId,
      'phonenumber':phoneNumber,

    }
  })
  .then((response) => {
   // console.log(response);
    setOpen(false);
    toast.success('Admin Registration Successfully')
   
  })
  .catch((error) => {
    toast.error(error?.response?.data?.message);
  });
  setAgmail('');
  setApassword('');
  setAusername('');
  setEmployeeId('');
  setPhoneNumber('')
} 
}

const [userdetials,setUserdetials] = useState('')

// useEffect(() => {
//   axios({
//     method: "get",
//     url: `http://localhost:3000/auth/students/${user.id}`
//   })
//   .then((response) => {
 

//    setUserdetials(response?.data?.user)
   
//   })
//   .catch((error) => {
//   toast.error(error?.response?.data?.message);
//   });
// }, [user.id])

// axios({
//   method: "post",
//   url: `http://localhost:3000/auth/BusPassAccept`,
//   data:{
//     "userId": acpt,
//     "BusAccept":true
    

//   }
// })
// .then((response) => {

 
//   toast.success('User Message Sent Successfully')

// })
// .catch((error) => {
//   toast.error(error?.response?.data?.message);
// });




  // const handlesee =(img)=>{
  //   setFilenames(img)
  // }
  // useEffect(() => {
  //       axios.get('http://localhost:3000/auth/image/657aef9f89a7cea1d310299c',{
  //         responseType: "arraybuffer",
  //         "Content-Type": "image/png",

  //       }).then((response)=>{
  //     //console.log('sadas',response.data)
  //     const base64 = btoa(
  //       new Uint8Array(response.data).reduce(
  //         (data, byte) => data + String.fromCharCode(byte),
  //         ''
  //       )
  //     )
  //      setImage(base64)
  //     })
        
     
      
  // }, []);

  // const fetchAndSetImageData = async (userId, imageId) => {
   
  //   try {
  //     const imageResponse = await axios.get(`http://localhost:3000/auth/image/${imageId}`, {
  //       responseType: 'arraybuffer',
  //       headers: {
  //         'Content-Type': 'image/png', // Adjust content type based on your image format
  //       },
  //     });

  //     const base64 = btoa(
  //       new Uint8Array(imageResponse.data).reduce(
  //         (data, byte) => data + String.fromCharCode(byte),
  //         ''
  //       )
  //     );

  //     setUsers((prevUsers) => {
  //       // Find the user with the matching ID and update its imageData
  //       const updatedUsers = prevUsers.map((user) =>
  //         user._id === userId ? { ...user, imageData: base64 } : user
  //       );

  //       return updatedUsers;
  //     });
  //   } catch (error) {
  //     console.error(`Error fetching image for user ${userId}:`, error.message);
  //   }
  // };

  // useEffect(() => {
  //   users.forEach((user) => {
  //     if (user.image && user.image.length > 0) {
  //       const imageId = user.image[0].imageData;
  //       fetchAndSetImageData(user._id, imageId);
  //     }
  //   });
  // }, [users]);

  return (
    <>

<Dialog
        open={open5}
        onClose={handleClose5}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" >
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Typography variant="h5">Image view</Typography>
        </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
        <Box  display={'flex'} alignItems={'center'} justifyContent={'center'}>
                  <img   src={ `data:image/jpeg;charset=utf-8;base64,${images?.[imginx]}`}  alt='img' style={{width:'27rem',height:'15rem',marginRight:'1rem'}}/> 
                  </Box>
     
    <Box pt={3} gap={4} display={'flex'} alignItems={'center'} justifyContent={'center'}  >
    <Button variant="contained" onClick={handleClose5}>cancel</Button>
    {/* <Button variant="contained" onClick={()=>sumbithandle4()}>submit</Button> */}
    </Box>
          </DialogContentText>
        </DialogContent>
       
      </Dialog>

<Dialog
        open={open4}
        onClose={handleClose4}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" >
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Typography variant="h5">PaymentStatus-Update</Typography>
        </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Box pt={2}>
          <FormControl  size="small" style={{ width: "100%" }}>
      <InputLabel id="PaymentStatusUpdated">PaymentStatusUpdated</InputLabel>
      <Select
        labelId="PaymentStatusUpdated"
        id="PaymentStatusUpdated"
        value={paystatus}
       onChange={(e)=> setPaystatus(e.target.value)}
        label="PaymentStatusUpdated"
        placeholder="PaymentStatusUpdated"
       
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'true'}>Paid</MenuItem>
        <MenuItem value={'false'}>Unpaid</MenuItem>
       
        
      </Select>

    </FormControl>
                  </Box>
         
         
       
      
     
    <Box pt={3} gap={4} display={'flex'} alignItems={'center'} justifyContent={'center'}  >
    <Button variant="contained" onClick={handleClose4}>cancel</Button>
    <Button variant="contained" onClick={()=>sumbithandle4()}>submit</Button>
    </Box>
          </DialogContentText>
        </DialogContent>
       
      </Dialog>
{/* busno updted */}

<Dialog
        open={open3}
        onClose={handleClose3}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" >
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Typography variant="h5">Student Bus Number Update</Typography>
        </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Box pt={2}>
                  <TextField
                  size="small"
                  required
                  placeholder={'Bus Number'}
                  label={'Bus Number'}
                  fullWidth
                 name="Bus Number"
                  value={busno}
                 onChange={(e)=>setBusno(e.target.value)}
                />
                  </Box>
         
         
       
      
     
    <Box pt={3} gap={4} display={'flex'} alignItems={'center'} justifyContent={'center'}  >
    <Button variant="contained" onClick={handleClose3}>cancel</Button>
    <Button variant="contained" onClick={()=>sumbithandle3()}>submit</Button>
    </Box>
          </DialogContentText>
        </DialogContent>
       
      </Dialog>
      {/* adminreg dialog */}
<Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" >
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Typography variant="h5">Admin-Registeration</Typography>
        </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Box pt={2}>
                  <TextField
                  size="small"
                  required
                  placeholder={'UserName'}
                  label={'UserName'}
                  fullWidth
                 name="UserName" value={ausername}
                 onChange={(e)=>setAusername(e.target.value)}
                />
                  </Box>
          <Box pt={2}>
                  <TextField
                  size="small"
                  required
                  placeholder={'AdminGmail'}
                  label={'AdminGmail'}
                  fullWidth
                 name="AdminGmail" value={agmail}
                 onChange={(e)=>setAgmail(e.target.value)}
                />
                  </Box>
         
          <Box pt={2}>
                  <TextField
                  size="small"
                  required
                  placeholder={'Password'}
                  label={'Password'}
                  fullWidth
                 name="Password" value={apassword}
                 onChange={(e)=>setApassword(e.target.value)}
                />
                  </Box>
          <Box pt={2}>
                  <TextField
                  size="small"
                  required
                  placeholder={'EmployeeId'}
                  label={'EmployeeId'}
                  fullWidth
                 name="EmployeeId" value={employeeId}
                 onChange={(e)=>setEmployeeId(e.target.value)}
                />
                  </Box>
          <Box pt={2}>
                  <TextField
                  size="small"
                  required
                  placeholder={'PhoneNumber'}
                  label={'PhoneNumber'}
                  fullWidth
                 name="PhoneNumber" value={phoneNumber}
                 onChange={(e)=>setPhoneNumber(e.target.value)}
                />
                  </Box>
         
       
      
     
    <Box pt={3} gap={4} display={'flex'} alignItems={'center'} justifyContent={'center'}  >
    <Button variant="contained" onClick={handleClose}>cancel</Button>
    <Button variant="contained" onClick={sumbithandle}>submit</Button>
    </Box>
          </DialogContentText>
        </DialogContent>
       
      </Dialog>

<Dialog
        open={open1}
        onClose={handleClose1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" >
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Typography variant="h5">Admin-AcceptedFrom</Typography>
        </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Box pt={2}>
                  <TextField
                  size="small"
                  required
                  placeholder={'Message'}
                  label={'Message'}
                  fullWidth
                 name="Message"
                   value={message}
                 onChange={(e)=>setMessage(e.target.value)}
                />
                  </Box>
         
       
      
     
    <Box pt={3} gap={4} display={'flex'} alignItems={'center'} justifyContent={'center'}  >
    <Button variant="contained" onClick={handleClose1}>cancel</Button>
    <Button variant="contained" onClick={sumbithandle1}>submit</Button>
    </Box>
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose4}>cancel</Button>
          <Button onClick={handleClose4} autoFocus>
submi         
 </Button>
        </DialogActions> */}
      </Dialog>


      <Dialog
        open={open2}
        onClose={handleClose2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" >
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Typography variant="h5">Admin-PaymentVerified</Typography>
        </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Box pt={2}>
                          {/* <TextField
                  size="small"
                  
                  // style={{width:'18vw'}}
                  placeholder='Year'
                  id="year"
                  label="Year"
                  {...formik.getFieldProps('year')}
                  error={formik.touched.year && Boolean(formik.errors.year)}
                  helperText={formik.touched.year && formik.errors.year}
                  > */}
                          <FormControl  size="small" style={{ width: "100%" }}>
      <InputLabel id="PaymentStatus">PaymentStatus</InputLabel>
      <Select
        labelId="PaymentStatus"
        id="PaymentStatus"
       value={payment}
       onChange={(e)=>setPayment(e.target.value)}
        label="PaymentStatus"
        placeholder="PaymentStatus"
       
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'true'}>Paid</MenuItem>
        <MenuItem value={'false'}>Unpaid</MenuItem>
       
        
      </Select>

    </FormControl>
                        </Box>
         
       
      
     
    <Box pt={3} gap={4} display={'flex'} alignItems={'center'} justifyContent={'center'}  >
    <Button variant="contained" onClick={handleClose2}>cancel</Button>
    <Button variant="contained" onClick={sumbithandle2}>submit</Button>
    </Box>
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose4}>cancel</Button>
          <Button onClick={handleClose4} autoFocus>
submi         
 </Button>
        </DialogActions> */}
      </Dialog>



   
{/* tabs */}
<Box pt={7}>
<Box  sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="AdminDashBoard" {...a11yProps(0)} />
          <Tab label="Request From" {...a11yProps(1)} />
          <Tab label="UserEmails" {...a11yProps(2)} />
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <Paper
        elevation={3}>
        <Stack
          flexDirection={{
            xs: "column",
            md: "column",
            sm: "row",
            lg: "column",
          }}
          justifyContent={"center"}
          display={"flex"}
          alignItems={"center"}
          pb={1}
        >
          <Box sx={{ width: "100%" }}>
            <Grid container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >

<Grid item sm={12} lg={12} xs={12} md={12}>
  <Box display="flex" alignItems={'center'} justifyContent={'space-between'} p={1} flexDirection={"row"} >
    <Box><Typography variant='h5' color={'black'}>AdminDashBoard</Typography></Box>
    <Box><Button  onClick={handleClickOpen} variant='contained'>Admin-create</Button></Box>
  </Box>
</Grid>

           </Grid>
    </Box></Stack></Paper>
    <Box>
    <Paper sx={{ backgroundColor: "white" }} elevation={2}>
        <Stack
          flexDirection={{
            xs: "column",
            md: "column",
            sm: "row",
            lg: "column",
          }}
          justifyContent={"center"}
          display={"flex"}
          alignItems={"center"}
          pb={1}
        >
          <Box sx={{ width: "100%" }}>
            <Grid container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >

<Grid item sm={6} lg={3} xs={12} md={3}>
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'14vh'} flexDirection={'column'} gap={2} backgroundColor={'#ff6600'}>
               <Box>Total Students</Box>
               <Box> {totalCount}</Box>
                </Box>
              </Grid>
<Grid item sm={6} lg={3} xs={12} md={3}>
                <Box display={'flex'} gap={2} justifyContent={'center'} alignItems={'center'} height={'14vh'}  flexDirection={'column'}backgroundColor={'#00cccc'}>
                <Box>Total Boys</Box>
               <Box>{maleCount}</Box>
                </Box>
              </Grid>
<Grid item sm={6} lg={3} xs={12} md={3}>
                <Box display={'flex'} gap={2} justifyContent={'center'} alignItems={'center'} height={'14vh'} flexDirection={'column'}backgroundColor={'#80ff00'}>
                <Box>Total Girls</Box>
               <Box>{femaleCount}</Box>
                </Box>
              </Grid>
<Grid item sm={6} lg={3} xs={12} md={3}>
                <Box display={'flex'} gap={2} justifyContent={'center'} alignItems={'center'} height={'14vh'} flexDirection={'column'}backgroundColor={'yellow'}>
                <Box>Filtered BusNumber-Count</Box>
               <Box>{filteredUsersCount}</Box>
                </Box>
              </Grid>

<Grid item sm={12} lg={12} xs={12} md={12}>
<Box display={'flex'} gap={3} justifyContent={'center'} alignItems={'center'} flexDirection={'row'} backgroundColor={''}>
               <Box>


               <TextField label='RegistrationNumber' 
                size='small'
                value={seachtext}
                onChange={handleChange1}
                />
               </Box>
               <Box>
              <Button onClick={HandelSearch1} variant='contained' size='small'>Search</Button>
               </Box>
               <Box>


<TextField label='Bus Number' 
 size='small'
 value={rootno}
 onChange={handleChange2}
 />
</Box>
<Box>
<Button onClick={HandelSearch2} variant='contained' size='small'>Search</Button>
</Box>
                </Box>
              </Grid>

             
<Grid item sm={12} lg={12} xs={12} md={12}>
                <Box  >
               <Box>
               <TableContainer
            component={Paper}
            style={{ borderRadius: "0" }}
            elevation={0}
          >
            <Table
              size="small"
              sx={{
                minWidth: 800,
                borderLeft: "1.5px solid #ababab",
                borderTop: "1.5px solid #ababab",
              }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow
                  sx={{
                    borderBottom: "1.5px solid #888888",
                    fontSize: "2rem",
                  }}
                >
                  <StyledTableCell >
                    <b>Email</b>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <b>UserName</b>
                  </StyledTableCell>
                 
                  <StyledTableCell align="left">
                    <b>registrationNumber</b>
                  </StyledTableCell>
                  
                  <StyledTableCell align="left">
                    <b>branch</b>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <b>PhoneNumber</b>
                  </StyledTableCell>
                
                  <StyledTableCell align="left">
                    <b>Year</b>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <b>Gender</b>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <b>Bus Number</b>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <b>Parent Number</b>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <b>Address</b>
                  </StyledTableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody>
                  {isLoading ? (
                    <TableRow>
                      <TableCell colSpan={users.length + 2}>
                        <Typography p={5} textAlign="center">
                          <CircularProgress />
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ) : users.length ? (
                    users.map((eachItem) => (
                      <TableRow key={eachItem.id}>
                        <StyledTableCell align="left">
                         {eachItem.email}
                  </StyledTableCell>
                        <StyledTableCell align="left">
                         {eachItem.UserName}
                  </StyledTableCell>
                        
                        <StyledTableCell align="left">
                         {eachItem.registrationNumber}
                  </StyledTableCell>
                       
                        <StyledTableCell align="left">
                         {eachItem.branch}
                  </StyledTableCell>
                        <StyledTableCell align="left">
                         {eachItem.phoneNumber}
                  </StyledTableCell>
                       
                        <StyledTableCell align="left">
                         {eachItem.year}
                  </StyledTableCell>
                        <StyledTableCell align="left">
                         {eachItem.gender}
                  </StyledTableCell>
                        <StyledTableCell align="left">
                        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'row'} gap={2}>
                        {eachItem.BoadingPoint}
                        <EditIcon
                        sx={{
                          size:'small'
                        }}
                        onClick={() => handleClickOpen3(eachItem._id,eachItem.BoadingPoint)}/>
                        
                        </Box>
                  </StyledTableCell>
                        <StyledTableCell align="left">
                         {eachItem.ParentPhoneNumber}
                  </StyledTableCell>
                        <StyledTableCell align="left">
                         {eachItem.address}
                  </StyledTableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={users.length + 2}>
                        <Typography p={5} textAlign="center">
                          NO Data Available
                        </Typography>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
            </Table>
          </TableContainer>
               </Box>
                </Box>
              </Grid>
           </Grid>
    </Box></Stack></Paper>
    </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Paper
        elevation={3}>
        <Stack
          flexDirection={{
            xs: "column",
            md: "column",
            sm: "row",
            lg: "column",
          }}
          justifyContent={"center"}
          display={"flex"}
          alignItems={"center"}
          pb={1}
        >
          <Box sx={{ width: "100%" }}>
            <Grid container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >

{/* <Grid item sm={12} lg={12} xs={12} md={12}>
  <Box display="flex" alignItems={'center'} justifyContent={'space-between'} p={1} flexDirection={"row"} >
    <Box><Typography variant='h5' color={'black'}>Request-Form-DashBoard</Typography></Box>
    <Box > <Button sx={{mr:'10px'}} component="label" variant='contained'>
          Upload image
        <input hidden accept="image/*" multiple type="file"  onChange={handleFileChange} 
      />
      </Button>
      <Button  variant='contained' onClick={handleUpload}>Submit</Button></Box>
   
  </Box>
</Grid> */}

           </Grid>
    </Box></Stack></Paper>
    <Box>
    <Paper sx={{ backgroundColor: "white" }} elevation={2}>
        <Stack
          flexDirection={{
            xs: "column",
            md: "column",
            sm: "row",
            lg: "column",
          }}
          justifyContent={"center"}
          display={"flex"}
          alignItems={"center"}
          pb={1}
        >
          <Box sx={{ width: "100%" }}>
            <Grid container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >

<Grid item sm={4} lg={4} xs={12} md={4}>
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'14vh'} flexDirection={'column'} gap={2} backgroundColor={'#00cccc'}>
               <Box>Total Form Requests</Box>
               <Box> {requestCount}</Box>
                </Box>
              </Grid>
<Grid item sm={4} lg={4} xs={12} md={4}>
                <Box display={'flex'} gap={2} justifyContent={'center'} alignItems={'center'} height={'14vh'}  flexDirection={'column'}backgroundColor={' #99ff99'}>
                <Box>Accepted Count</Box>
               <Box>{acceptedCount}</Box>
                </Box>
              </Grid>
<Grid item sm={4} lg={4} xs={12} md={4}>
                <Box display={'flex'} gap={2} justifyContent={'center'} alignItems={'center'} height={'14vh'} flexDirection={'column'}backgroundColor={'#ffbf00'}>
                <Box>Reject Count</Box>
               <Box>{rejectCount}</Box>
                </Box>
              </Grid>

{/* <Grid item sm={12} lg={12} xs={12} md={12} >
                <Box display={'flex'} gap={3} justifyContent={'center'} alignItems={'center'} flexDirection={'row'} backgroundColor={''}>
                <Box>


<LocalizationProvider dateAdapter={AdapterDayjs}>
<DatePicker
 size="small"
 value={fromdate}
 inputFormat="DD/MM/YYYY"

 onChange={(newValue) => {
   if(newValue){
    setFromdate(moment(newValue['$d'])?.format('YYYY-MM-DD'));
   }
   else{
    setFromdate('')
   }
   

 //  console.log(moment(newValue['$d']).format('YYYY-MM-DD'))
 }}
 
 renderInput={(params) => 
 
 <TextField
   size="small"
   
   sx={{
     backgroundColor:'white',
    
     border:'1px solid black',
     "&.MuiDateField-root": {
       height: "10px" 
     },

   }}
     

   
   {...params} />
 }
/>
</LocalizationProvider>
</Box>
               <Box>
              <Button variant='contained' size='small' onClick={'handleSearch'}>Search</Button>
               </Box>
                </Box>
              </Grid> */}
<Grid item sm={12} lg={12} xs={12} md={12}>
                <Box  >
               <Box>
               <TableContainer
            component={Paper}
            style={{ borderRadius: "0" }}
            elevation={0}
          >
            <Table
              size="small"
              sx={{
                minWidth: 800,
                borderLeft: "1.5px solid #ababab",
                borderTop: "1.5px solid #ababab",
              }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow
                  sx={{
                    borderBottom: "1.5px solid #888888",
                    fontSize: "2rem",
                  }}
                >
                  
                  <StyledTableCell align="center">
                    <b>Gmail</b>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <b>FirstName</b>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <b>BoardingPoint</b>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <b>RegistrationNumber</b>
                  </StyledTableCell>
                 
                  <StyledTableCell align="center">
                    <b>branch</b>
                  </StyledTableCell>
                  {/* <StyledTableCell align="center">
                    <b>PhoneNumber</b>
                  </StyledTableCell> */}
                  <StyledTableCell align="center">
                    <b>Date</b>
                  </StyledTableCell>
                  {/* <StyledTableCell align="center">
                    <b>Year</b>
                  </StyledTableCell> */}
                  <StyledTableCell align="center">
                    <b>Gender</b>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <b>Action</b>
                  </StyledTableCell>
                 <StyledTableCell align="center">
                    <b>Image</b>
                  </StyledTableCell> 
                 <StyledTableCell align="center">
                    <b>PaymentStatus</b>
                  </StyledTableCell> 
                 
                  
                  
                </TableRow>
              </TableHead>
              <TableBody>
                  {isLoading ? (
                    <TableRow>
                      <TableCell colSpan={users.length + 2}>
                        <Typography p={5} textAlign="center">
                          <CircularProgress />
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ) : users.length ? (
                    users.map((eachItem,index) => 
                     eachItem?.fromrequested?.length ?
                      (<TableRow key={eachItem._id}>
                        <StyledTableCell align="center">
                         {eachItem?.fromrequested?.[0]?.email1}
                  </StyledTableCell>
                        <StyledTableCell align="center">
                         {eachItem?.fromrequested?.[0]?.firstName || ''}
                  </StyledTableCell>
                        <StyledTableCell align="center">
                         {eachItem?.fromrequested?.[0]?.BoardingPoint || ''}
                  </StyledTableCell>
                        <StyledTableCell align="center">
                         {eachItem?.fromrequested?.[0]?.registrationNumber1 || ''}
                  </StyledTableCell>
                       
                        <StyledTableCell align="center">
                         {eachItem?.fromrequested?.[0]?.branch1 || ''}
                  </StyledTableCell>
                        {/* <StyledTableCell align="center">
                         {eachItem?.fromrequested?.[0]?.phoneNumber1 || ''}
                  </StyledTableCell> */}
                        <StyledTableCell align="center">
                       {moment(eachItem?.fromrequested?.[0]?.date || '').format('DD/MM/YYYY')}
                  </StyledTableCell>
                        {/* <StyledTableCell align="center">
                         {request?.year}
                  </StyledTableCell> */}
                        <StyledTableCell align="center">
                         {eachItem?.fromrequested?.[0]?.gender1 || ''}
                  </StyledTableCell>
                        
                       {}
                        <StyledTableCell align="center">
                          {eachItem?.Accepted[0]?.Accept === true ?
                          <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'row'}>
                            <Box><TaskAltIcon  sx={{
                      fontSize: "1.1rem",
                      color:`green`,
                      borderRadius: "1%",
                      fontSizeAdjust: 1,
                    }}/></Box>
                            <Box><Typography variant='h6' sx={{color:'green',fontSize:'1rem',fontWeight:'bold'}} >  Accepted</Typography></Box>
                          </Box> :
                          <Box display={'flex'} alignItems={'center'} flexDirection={'row'} justifyContent={'center'} gap={2}>
                          <Button variant='contained' color='success'  onClick={()=>{handleClickOpen1(eachItem._id,true,eachItem?.fromrequested?.[0]?._id)}}><Typography  sx={{fontSize:'0.5rem',
                           fontFamily:'bold',
                         }}>Accepted</Typography></Button>
                        <Button variant='contained' color='error'><Typography sx={{fontSize:'0.5rem',
                           fontFamily:'bold',
                         }} onClick={()=>{handleClickOpen1(eachItem._id,false,eachItem?.fromrequested?.[0]?._id)}}>Rejected</Typography></Button>
                          </Box>
}
                  </StyledTableCell>
                       
                  <StyledTableCell align="left">
                  {/* {eachItem?.imageData && (
                  <img
                    src={`data:image/jpeg;charset=utf-8;base64,${eachItem?.image}`}
                    alt={`eachItem ${eachItem._id}`}
                    style={{width:'2rem',height:'2rem',marginRight:'1rem'}}
                  />
                )} */}
               
              <Box>
               <Box  display={'flex'} alignItems={'center'} justifyContent={'center'}>
               <Button onClick={() =>handleClickOpen5(index)} >
                  <img   src={images?.[index]!==demo ? `data:image/jpeg;charset=utf-8;base64,${images?.[index]}`:demo}  alt='img' style={{width:'5rem',height:'5rem',marginRight:'1rem'}}/></Button> 
                  </Box>
                  {
                images?.[index]!==demo?(
                  <Box pt={1} display={'flex'} alignItems={'center'} flexDirection={'row'} justifyContent={'center'} gap={3}>
                    
                   
                    {/* {
                      eachItem?.AdminbuspassAccepted[0]?.BusAccept?(<><Typography></Typography></>):(<> <Button sx={{fontSize:"0.35rem"}} size='small' variant='contained' onClick={()=>{handleClickOpen2(eachItem._id,true, eachItem?.AdminbuspassAccepted[0]?._id)}}>Payment Verified</Button>
                      
                      
                      </>)
                    } */}
                 {
                      !eachItem?.AdminbuspassAccepted?.length ?<Button sx={{fontSize:"0.35rem"}} size='small' variant='contained' onClick={()=>{handleClickOpen2(eachItem._id,true, eachItem?.AdminbuspassAccepted[0]?._id)}}>Payment Verified</Button>:eachItem?.AdminbuspassAccepted[0]?.BusAccept === false ?<Button  sx={{fontSize:"0.35rem"}}variant='contained' size='small' onClick={() => handleClickOpen4(eachItem._id, eachItem?.AdminbuspassAccepted[0]?.BusAccept, eachItem?.AdminbuspassAccepted[0]?._id)} >Update</Button>:''
                    }
                  </Box>):(
                <></>)
                }
                 </Box>
                
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {/* {(
                      ()=>{
                        if(eachItem?.AdminbuspassAccepted?.[0]?.BusAccept === 'true'){
                          
                            <>
                            <Typography sx={{fontWeight:"bold",color:'green'}}>Paid</Typography>
                            </>
                          
                        }
                        else if(eachItem?.AdminbuspassAccepted?.[0]?.BusAccept ==='false'){
                         
                            <>
                            <Typography sx={{fontWeight:"bold",color:'green'}}>UnPaid</Typography>
                            </>
                          
                        }else{
                          return(
                            <>
                             <Typography sx={{fontWeight:"bold",color:'green'}}>Pending</Typography>
                            </>
                          )
                        }
                      }
                    )} */}
                         {eachItem?.AdminbuspassAccepted?.[0]?.BusAccept?(<><Typography sx={{fontWeight:"bold",color:'green'}}>Paid</Typography></>):(<>UnPaid</>) || ''}
                  </StyledTableCell>
                      </TableRow>
                      
                      ):''
                    )
                  )
                   : (
                    <TableRow>
                      <TableCell colSpan={users.length + 2}>
                        <Typography p={5} textAlign="center">
                          NO Data Available
                        </Typography>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
            </Table>
          </TableContainer>
               </Box>
                </Box>
              </Grid>
           </Grid>
    </Box></Stack></Paper>
    </Box>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
      <Box>
    <Paper sx={{ backgroundColor: "white" }} elevation={2}>
        <Stack
          flexDirection={{
            xs: "column",
            md: "column",
            sm: "row",
            lg: "column",
          }}
          justifyContent={"center"}
          display={"flex"}
          alignItems={"center"}
          pb={1}
        >
          <Box sx={{ width: "100%" }}>
            <Grid container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
             
<Grid item sm={12} lg={12} xs={12} md={12}>
                <Box  >
               <Box>
               <TableContainer
            component={Paper}
            style={{ borderRadius: "0" }}
            elevation={0}
          >
            <Table
              size="small"
              sx={{
                minWidth: 800,
                borderLeft: "1.5px solid #ababab",
                borderTop: "1.5px solid #ababab",
              }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow
                  sx={{
                    borderBottom: "1.5px solid #888888",
                    fontSize: "2rem",
                  }}
                >
                  <StyledTableCell align="center" >
                    <b>Email</b>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <b>UserName</b>
                  </StyledTableCell>
                 
                  <StyledTableCell align="center">
                    <b>Message</b>
                  </StyledTableCell>
                  
               
                  
                </TableRow>
              </TableHead>
              <TableBody>
                  {isLoading ? (
                    <TableRow>
                      <TableCell colSpan={useremails.length + 2}>
                        <Typography p={5} textAlign="center">
                          <CircularProgress />
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ) : useremails.length ? (
                    useremails.map((eachItem) => (
                      <TableRow key={eachItem.id}>
                        <StyledTableCell align="center">
                         {eachItem.Gmail}
                  </StyledTableCell>
                        <StyledTableCell align="center">
                         {eachItem.Name}
                  </StyledTableCell>
                        
                        <StyledTableCell align="center">
                         {eachItem.Message}
                  </StyledTableCell>
                       
                      
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={useremails.length + 2}>
                        <Typography p={5} textAlign="center">
                          NO Data Available
                        </Typography>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
            </Table>
          </TableContainer>
               </Box>
                </Box>
              </Grid>
           </Grid>
    </Box></Stack></Paper>
    </Box>
      </CustomTabPanel>
    </Box>
</Box>
{/* heading */}


    <Box mt={'-7px'}>
    
    </Box>

   

    </>
  )
}

export default AdminDashBoard