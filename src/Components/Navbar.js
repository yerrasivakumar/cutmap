import React, { useEffect, useState } from 'react'
import jsPDF from "jspdf";
import "jspdf-autotable";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel,  Menu,  Select, TextField, useTheme } from "@mui/material";
import { useDispatch } from 'react-redux'
// import { setbranch } from '../slices';
import MenuItem from "@mui/material/MenuItem";

import slider1 from "../Assets/bus1.jpeg";
import slider2 from "../Assets/bus2.jpeg";
import slider3 from "../Assets/bus1.jpeg";

import  map from "../Assets/map.png"

import {PATHS} from '../utils/constants'
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Grid from '@mui/material/Unstable_Grid2';
import { useSelector  } from 'react-redux'
import { Link as Links, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { logout,} from '../slices';


import pdfimg from '../Assets/collegelogo.png'
import pdfimg1 from '../Assets/websiteQR-removebg-preview.png'
import pdfimg2 from '../Assets/th-removebg-preview.png'
import moment from 'moment';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


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
const drawerWidth = 240;
const navItems = [
  {
    title:  "Home",
      link: PATHS.home
  },
  {
    title:  "About",
      link: PATHS.about
  },
  {
    title:  "Contact",
      link: PATHS.Contact
  },
  {
    title:   "Services",
      link: PATHS.services
  },
  // {
  //   title:  "Page1",
  //     link: PATHS.Page1
  // },
 
]

const settings = ["Profile", "RequestForm","FeedBackForm","EditProfile","Logout"];

const Navbar = (props) => {

  const user = useSelector((state)=>{
    return state.user
  })
  // console.log(user.adminName);
  const [navItems1,setNavitems] = useState([
    {
      title:  "Home",
        link: PATHS.home
    },
    {
      title:  "About",
        link: PATHS.about
    },
    {
      title:  "Contact",
        link: PATHS.Contact
    },
    {
      title:   "Services",
        link: PATHS.services
    },
    // {
    //   title:  "Page1",
    //     link: PATHS.Page1
    // },
    {
      title:  "SignUp",
        link: PATHS.Page1
    },
    {
      title:  "Login",
        link: PATHS.Page2
    }
  ])
  useEffect(()=>{
    if(user?.token?.length ||user?.adminToken?.length){
      setNavitems([
      {
        title:  "Home",
          link: PATHS.home
      },
      {
        title:  "About",
          link: PATHS.about
      },
      {
        title:  "Contact",
          link: PATHS.Contact
      },
      {
        title:   "Services",
          link: PATHS.services
      },

     
    ])
  }else{
    setNavitems([
      {
        title:  "Home",
          link: PATHS.home
      },
      {
        title:  "About",
          link: PATHS.about
      },
      {
        title:  "Contact",
          link: PATHS.Contact
      },
      {
        title:   "Services",
          link: PATHS.services
      },
      // {
      //   title:  "Page1",
      //     link: PATHS.Page1
      // },
      {
        title:  "SignUp",
          link: PATHS.Page1
      },
      {
        title:  "Login",
          link: PATHS.Page2
      }
    ])
  }
  },[user.token,user.adminToken])
  
      //  console.log("siva", user?.branchName);
      // useEffect(() => {
      //   // Check if user and branchName exist before logging
      //   if (user && user.branchName) {
      //    console.log("siva", user.branchName);
      //   }
      // }, [user]);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const [mOpen, setMOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };
  const navigate = useNavigate();
  let dispatch = useDispatch()
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleMenuClick = (name)=> {
    handleCloseUserMenu()
    if(name === "RequestForm"){
      setOpen(true);
    }
    else if(name === "Logout" ){
      dispatch(logout())
      toast.success("Logut successfully")
      navigate('/')
    }
    else if(name === "Profile"){
      setOpen4(true);
    }
    else if(name === "FeedBackForm"){
setOpen5(true)
    }
    else if(name === "EditProfile"){
setOpen6(true)
    }
  }
  const [ side ,setSide] = useState(true)
  const drawer = (

    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        CUTMAP-Transport
      </Typography>
      <Divider />
      {
        side?(<>
         <List>
          
      {navItems1.map((item,index) => (
      <Links key={index} to={item.link}>
        
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
      
        </Links>
          ))}
           
          
      </List>
        </>):(<>
          <List>
      {navItems1.map((item) => (
      <Links  to={item.link}>
        
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
      
        </Links>
          ))}
      </List>

        </>)
      }
     
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  //   const theme = useTheme();
  // const [activeStep, setActiveStep] = React.useState(0);
  // const handleStepChange = (step) => {
  //   setActiveStep(step);
  // };
  const boxStyle = {
    backgroundImage: `url(${map})`,
    backgroundColor:'bluedark',
    backgroundSize: 'cover', // Optional: adjust the background size
    backgroundPosition: 'center', // Optional: adjust the background position
    width: '100%', // Optional: set the width of the Box
     // Optional: set the height of the Box
  };
  // const tokendata = sessionStorage?.getItem('token1')
  //  const [token, setToken] = useState(tokendata)

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const [fusername,setFusername] = useState('')
  const [fuserbranch,setFuserbranch] = useState('')
  const [fmessage,setFmessage] = useState('')
  const [open5, setOpen5] = React.useState(false);
  const handleClickOpen5 = () => {
    setOpen5(true);
  };

  const handleClose5 = (value) => {
    setOpen5(false);
  };



  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: `http://localhost:3000/auth/AlluserDetails`
  //   })
  //     .then((response) => {
  //       dispatch(setbranch(response?.data?.users[0]?.branch)); 
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
      
  // }, []);

  const [firstname,setFirstname] = useState('')
  const [registrationNumber,setRegistrationNumber] = useState('')
  const [phoneNumber,setPhoneNumber] = useState('')
  const [email,setEmail] = useState('')
  const [boardingPoint,setBoardingPoint] = useState('')
  const [gender,setGender] = useState('')
  




  const sumbithandle  = (e) =>{
    e.preventDefault();
    if(!firstname){
    toast.error("Enter a Firstname")
    }else if(!registrationNumber){
      toast.error("Enter a registrationNumber")
    } else if(!phoneNumber){
      toast.error("Enter a phoneNumber")
    }else if(!email){
      toast.error("Enter a email")
    } else if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) === false){
      toast.error(`Please Enter valid Email Address`);
    } else if(!boardingPoint){
      toast.error("Enter a boardingPoint")
    }else if(!gender){
      toast.error("Enter a Gender")
    }else{
      
axios({
  method: "post",
  url: `http://localhost:3000/auth/requestform`,
  data:{
        "userId":user.id,
        "firstName":firstname,
        "registrationNumber1":registrationNumber,
        "branch1":user?.branchName,
        "phoneNumber1":phoneNumber,
        "email1":email,
        "BoardingPoint":boardingPoint,
        "type":true,
        "gender1":gender
     }
})
.then((response) => {
console.log(response.data.message);
  setOpen(false);
    toast.success('RequestFrom Submit Successfully');
      navigate("/")
  

    
})
.catch((error) => {
toast.error(error?.response?.data?.message);
});
      
    }
    setFirstname("")
    setRegistrationNumber("")
    setPhoneNumber("")
    setEmail("")
    setBoardingPoint("")
    setGender("")
  }
const [getone,setGetone] = useState('')
const [payment,setPayment] = useState('')
const [userdetials,setUserdetials] = useState(
  {
    UserName : '',
    phoneNumber : '',
    ParentPhoneNumber : '',
    address : '',
    year : ''
  }
)
const [notification,setNotification] = useState('')
const [studentname,setStudentname] = useState('')
const [studentbranch,setStudentbranch] = useState('')
const [studentreg,setStudentReg] = useState('')
const [studentphone,setStudentphone] = useState('')
const [studentboadingpoint,setStudentBoadingpoint] = useState('')
const [unames,setUnames] = useState('')
  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:3000/auth/students/${user.id}`
    })
    .then((response) => {
     // console.log('ssss',unames)
  
      setUnames(response?.data?.user?.UserName)
      setStudentname(response?.data?.user?.fromrequested[0]?.firstName)
      setStudentReg(response?.data?.user?.fromrequested[0]?.registrationNumber1)
      setStudentbranch(response?.data?.user?.fromrequested[0]?.branch1)
      setStudentBoadingpoint(response?.data?.user?.fromrequested[0]?.BoardingPoint)
      setStudentphone(response?.data?.user?.fromrequested[0]?.phoneNumber1)
      setPayment(response?.data?.user?.AdminbuspassAccepted[0]?.BusAccept)
      setGetone(response?.data?.user?.Accepted[0]);
      setUserdetials(response?.data?.user)
      setNotification(response?.data?.user?.Accepted[0]);
        
    })
    .catch((error) => {
    toast.error(error?.response?.data?.message);
    });
  }, [user.id])
  
  const sumbithandle6 = (e) =>{
    e.preventDefault();
   //  console.log('date', userdate);
    axios({
     method: "put",
     url: `http://localhost:3000/auth/userUpdate/${user.id}`,
     data:{
      "UserName": userdetials.UserName, 
      "phoneNumber":userdetials.phoneNumber,
      "ParentPhoneNumber":userdetials.ParentPhoneNumber,
      "address": userdetials.address,
      "year":userdetials.year
      
     }
   })
   .then((response) => {
     setOpen6(false);
    //  console.log(response);
     toast.success('User Details Updated Successfully')
   })
   .catch((error) => {
     console.log(error?.response?.data?.message);
   });
   }
      


  const badgeCount = notification?.message ? 1 : 0;

  const [open9, setOpen9] = React.useState(false);

  const handleClickOpen9 = () => {
    setOpen9(true);
  };

  const handleClose9 = () => {
    setOpen9(false);
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const [filenames, setFilenames] = useState([]);
  const[image,setImage] = useState(null)



  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if(!selectedFile){
toast.error("Please upload a photo")
    }
    else{
      const data =user.id
      const formData = new FormData();
      formData.append('fileFieldName', selectedFile,);
      formData.append('userId', data);
      axios.post( `http://localhost:3000/auth/upload`,formData  
      )
      .then((response) => {
       
          setOpen9(false);
         toast.success('Image uploaded successfully');
          // Fetch updated image filenames after uploading
          // fetchImageFilenames();
        
      })
      .catch((error) => {
        //console.log("eeee",error?.response?.data);
       toast.error(error?.response?.data);
       
      });
    }

   
  };
  const [open4, setOpen4] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);

  const handleClickOpen6= () => {
    setOpen4(false)
    setOpen6(true);
  };

  const handleClose6 = () => {
    setOpen6(false);
  };
  const handleClickOpen4 = () => {
    setOpen4(true);
  };

  const handleClose4 = () => {
    setOpen4(false);
  };


  const handleSubmit1 = e => {
    setOpen9(false);
    const pdf = new jsPDF("landscape");
 
    pdf.autoTable( {
     
      didDrawPage: function (data) {
  
        // Header
        // const backgroundImageUrl = '../../assets/bg1.png';
        // pdf.addImage(backgroundImageUrl, 'JPEG',90, 26, 120, 120,); 
        // pdf.setFillColor(169, 169, 169); // Grey background color
        // pdf.rect(90, 26, 120, 120, 'F');
        // pdf.setFillColor(238, 45, 20); // Red background color
        // pdf.rect(90, 26, 120, 120, 'F');
        // pdf.addImage(pdfimg, "PNG", 125, 30, 50, 25);
        // pdf.setLineWidth(0.5);
        // pdf.rect(90, 26,  120, 120 );
        // pdf.setFontSize(15);
        // pdf.text('Student BusPass',127,61)
        // pdf.setFontSize(16);
        // pdf.text('Student Id',100, 76)
        // pdf.setFontSize(14);
        // pdf.text(studentreg,100, 82,)
        // pdf.setFontSize(14);
        // pdf.text('Name',100, 90)
        // pdf.setFontSize(13);
        // pdf.text(studentname,100, 95,)
        // pdf.setFontSize(14);
        // pdf.text('Gmail',100, 103)
        // pdf.setFontSize(13);
        // pdf.text(studentgmail,100, 108,)
        // pdf.setFontSize(14);
        // pdf.text('BoardingPoint',100, 116)
        // pdf.setFontSize(13);
        // pdf.text(`CutmCollege-${studentboadingpoint}`,100, 121,)
        // pdf.setFontSize(14);
        // pdf.text('Expired-Date',100, 129)
        // pdf.setFontSize(14);
        // pdf.text('19-04-2024',100, 134,)
        // pdf.addImage(pdfimg1, "PNG", 166, 77, 40, 32);
        // pdf.addImage(pdfimg2, "PNG", 166, 107, 40, 32);
        // pdf.setFontSize(11);
        // pdf.text(`Date : ${moment(new Date()).format("DD-MM-YYYY")}`, 170, 75);
        pdf.addImage(pdfimg, "PNG", 85, 28, 40, 27);
      pdf.setLineWidth(0.5);
      pdf.rect(90, 26,  125, 81);
      pdf.setFontSize(15);
      pdf.text('Centurion University of',127,33)
      pdf.setFontSize(15);
      pdf.text('Technology of Management',120,40) 
      pdf.setFontSize(13);
      pdf.text('Andhra Pradesh',135,47) 
      pdf.setFontSize(15);
      pdf.text('BUS PASS',136,55)
      pdf.setFontSize(13);
      pdf.text('Academic year:',133,62)
      pdf.setFontSize(14);
      pdf.text('Student Id :',95, 70)
      pdf.setFontSize(14);
      pdf.text('Bus No:',156, 70)
      pdf.setFontSize(14);
      pdf.text(studentreg,126, 70,)
      
      pdf.setFontSize(14);
      pdf.text('Name:',95,78)
      pdf.setFontSize(14);
      pdf.text(studentname,127,78,)
      pdf.setFontSize(14);
      pdf.text('Seat No:',156,78)

      pdf.setFontSize(14);
      pdf.text('Branch:',95, 86)
      pdf.setFontSize(13);
      pdf.text(studentbranch,127, 86)

      pdf.setFontSize(14);
      pdf.text('Boarding at:',156, 86)
      pdf.setFontSize(12);
      pdf.text(studentboadingpoint,183, 86)
      pdf.setFontSize(14);
      pdf.text('Phone:',95, 94)
      pdf.setFontSize(13);
      pdf.text(studentphone,127,94)
      pdf.setFontSize(14);
      pdf.text('Blood Group:',156, 94)
      pdf.setFontSize(13);
      pdf.text('Stamp&Signature of Incharge',97, 105)
      // pdf.setFontSize(14);
      // pdf.text('19-04-2024',100, 134,)
      // pdf.addImage(pdfimg1, "PNG", 179, 27, 38, 27);
      // pdf.addImage(pdfimg2, "PNG", 166, 107, 40, 32);
      pdf.setFontSize(10);
      pdf.text(`Date : ${moment(new Date()).format("DD-MM-YYYY")}`, 185, 30);
        // pdf.setFontSize(11);
        // pdf.text(
        //   `Channel : ${Channel.split(" ")
        //     .map(
        //       word => word[0]?.toUpperCase() + word.substring(1).toLowerCase(),
        //     )
        //     .join(" ")}`,
        //   250,
        //   60,
        // );
        // pdf.setFontSize(11);
        // pdf.text(
        //   `Client : ${Type.split(" ")
        //     .map(
        //       word => word[0]?.toUpperCase() + word.substring(1).toLowerCase(),
        //     )
        //     .join(" ")}`,
        //   250,
        //   70,
        // );
        pdf.setFontSize(11);
        // if (deviceName?.length || status !== "status") {
        //   pdf.text(
        //     `${
        //       selectedFilter === "status"
        //         ? "Status"
        //         : selectedFilter === "deviceName"
        //         ? "Device Name"
        //         : selectedFilter
        //     } : ${
        //       selectedFilter === "status"
        //         ? status
        //         : selectedFilter === "deviceName"
        //         ? deviceName
        //         : null
        //     }`,
        //     11.5,
        //     70,
        //   );
        // }
  
        // if (fromDate && toDate) {
        //   pdf.setFontSize(11);
        //   pdf.text(
        //     `Date Period : ${moment(fromDate).format("DD-MM-YYYY")} To ${moment(
        //       toDate,
        //     ).format("DD-MM-YYYY")}`,
        //     11.5,
        //     60,
        //   );
        // }
        // if (!fromDate && !toDate) {
        //   pdf.setFontSize(11);
        //   pdf.text(
        //     `Date Period : 01-01-2022 To ${moment(new Date()).format(
        //       "DD-MM-YYYY",
        //     )}`,
        //     11.5,
        //     60,
        //   );
        // }
        pdf.setFontSize(10);
        // pdf.text(
        //   `Generated by : ${roleName
        //     .split("_")
        //     .join(" ")
        //     .split(" ")
        //     .map(
        //       word => word[0]?.toUpperCase() + word.substring(1).toLowerCase(),
        //     )
        //     .join(" ")} (${reportingRoleName
        //     .split("_")
        //     .join(" ")
        //     .split(" ")
        //     .map(
        //       word => word[0]?.toUpperCase() + word.substring(1).toLowerCase(),
        //     )
        //     .join(" ")})`,
        //   11.5,
        //   200,
        // );
        pdf.setFontSize(11);
        pdf.text(
          `Timestamp : ${moment(new Date()).format("hh:mm:ss A")}`,
          240,
          200,
        );
        // Footer
        let str = "Page No " + pdf.internal.getNumberOfPages();
        pdf.setFontSize(10);
  
        // jsPDF 1.4+ uses getWidth, <1.4 uses .width
        let pageSize = pdf.internal.pageSize;
        let pageHeight = pageSize.height
          ? pageSize.height
          : pageSize.getHeight();
        // pdf.text('index+1', data.settings.margin.left+250, pageHeight - 10);
        pdf.text(str, data.settings.margin.left + 135, pageHeight - 5);
      },
  
     
      theme: "grid",
     
    });
    pdf.save("Cnam");
  };

  const name = unames
  const firstLetter = name && name.trim() !== '' ? name.charAt(0).toUpperCase() : '';
 // console.log("sdfghn",firstLetter);


const submitfeedback = (e) =>{
  e.preventDefault();
  if(!fusername){
    toast.error('Enter the Name')
  }else if(!fuserbranch){
    toast.error('Select the Branch')
  }else if(!fmessage){
    toast.error('Enter the Message')
  }else{
    axios.post('http://localhost:3000/user/userFeedback',
    {
     "Username":fusername,
     "Branch":fuserbranch,
     "FeedBack":fmessage
 }).then((response)=>{
  setOpen5(false);
  // console.log(response?.data?.message);
 toast.success(response?.data?.message)
 }).catch((error)=>{
  toast.error(error.response.data.message)
 })
 setFusername("");
 setFuserbranch("");
 setFmessage("");
  }
}

// const [upname,setUpname] = useState('');
// const [unumber,setUnumber] = useState('');
// const [parentPhoneNumber,setParentPhoneNumber] = useState('');
// const [uaddress,setUaddress] = useState('');
const [useen,setUseen] = useState('');

  return (
    <>
<Box>
<Dialog
        open={open6}
        onClose={handleClose6}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" >
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Typography variant="h5">Update Details</Typography>
        </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Box pt={1} >
                  <TextField
                  size="small"
                  required
                  placeholder={'UserName'}
                  label={'UserName'}
                  fullWidth
                 name="UserName" 
               value={userdetials?.UserName}
               onChange={(e)=>setUserdetials({...userdetials,UserName:e.target.value})}
                />
                  </Box>
          <Box pt={2} >
                  <TextField
                  size="small"
                  required
                  placeholder={'PhoneNumber'}
                  label={'PhoneNumber'}
                  fullWidth
                 name="PhoneNumber" 
               value={userdetials?.phoneNumber}
               onChange={(e)=>setUserdetials({...userdetials,phoneNumber:e.target.value})}
                />
                  </Box>
          <Box pt={2} >
                  <TextField
                  size="small"
                  required
                  placeholder={'ParentPhoneNumber'}
                  label={'ParentPhoneNumber'}
                  fullWidth
                 name="ParentPhoneNumber" 
               value={userdetials?.ParentPhoneNumber}
               onChange={(e)=>setUserdetials({...userdetials,ParentPhoneNumber:e.target.value})}
                />
                  </Box>
          <Box pt={2} >
                  <TextField
                  size="small"
                  required
                  placeholder={'Address'}
                  label={'Address'}
                  fullWidth
                 name="Address" 
               value={userdetials?.address}
               onChange={(e)=>setUserdetials({...userdetials,address:e.target.value})}
                />
                  </Box>
                  <Box pt={2}>
          <FormControl fullWidth  size="small" >
      <InputLabel id="Branch">year</InputLabel>
      <Select
        labelId="Branch"
        id="Branch"
         value={userdetials?.year}
       fullWidth
        // style={{width:'19vw'}}
        label="Branch"
        placeholder="Branch"
        onChange={(e)=>setUserdetials({...userdetials,year:e.target.value})}
     
      >
       
       <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'1year'}>1'st year</MenuItem>
        <MenuItem value={'2year'}>2'nd year</MenuItem>
        <MenuItem value={'3year'}>3'rd year</MenuItem>
        <MenuItem value={'4year'}>4'th year</MenuItem>
      </Select>
    </FormControl>
                  </Box>

          
         
       
      
     
    <Box pt={3} gap={4} display={'flex'} alignItems={'center'} justifyContent={'center'}  >
    <Button variant="contained" onClick={handleClose6}>cancel</Button>
    <Button variant="contained" onClick={sumbithandle6}>submit</Button>
    </Box>
          </DialogContentText>
        </DialogContent>
       
      </Dialog> 
  {/* FeedBackform */}
<Dialog
        open={open5}
        onClose={handleClose5}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" >
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Typography variant="h5">FeedBack Form</Typography>
        </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Box pt={1} >
                  <TextField
                  size="small"
                  required
                  placeholder={'UserName'}
                  label={'UserName'}
                  fullWidth
                 name="UserName" 
               value={fusername}
               onChange={(e)=>setFusername(e.target.value)}
                />
                  </Box>
                  <Box pt={2}>
          <FormControl fullWidth  size="small" >
      <InputLabel id="Branch">Branch</InputLabel>
      <Select
        labelId="Branch"
        id="Branch"
         value={fuserbranch}
       fullWidth
        // style={{width:'19vw'}}
        label="Branch"
        placeholder="Branch"
        onChange={(e)=>setFuserbranch(e.target.value)}
     
      >
       
       <MenuItem value={'IT'}>IT</MenuItem>
        <MenuItem value={'CSE'}>CSE</MenuItem>
        <MenuItem value={'EEE'}>EEE</MenuItem>
        <MenuItem value={'ECE'}>ECE</MenuItem>
        <MenuItem value={'MECH'}>MECH</MenuItem>
        <MenuItem value={'MET'}>MET</MenuItem>
        <MenuItem value={'MET'}>MET</MenuItem>
      </Select>
    </FormControl>
                  </Box>

          <Box pt={2}>
                  <TextField
                  size="small"
                  required
                  placeholder={'Message'}
                  label={'Message'}
                  fullWidth
                 name="Message" 
                 value={fmessage}
                 onChange={(e)=>setFmessage(e.target.value)}
                />
                  </Box>
          
         
       
      
     
    <Box pt={3} gap={4} display={'flex'} alignItems={'center'} justifyContent={'center'}  >
    {/* <Button variant="contained" onClick={handleClickOpen}>cancel</Button> */}
    <Button variant="contained" onClick={submitfeedback}>submit</Button>
    </Box>
          </DialogContentText>
        </DialogContent>
       
      </Dialog> 
{/* profile dialog */}
<Dialog
        open={open4}
        onClose={handleClose4}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" >
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Typography variant="h5">Profile</Typography>
        </Box>
        </DialogTitle>
        {
          user?.adminToken?(<><DialogContent>
            <DialogContentText id="alert-dialog-description">
            <Box pl={'8rem'}>
            <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
          <Typography >UserName:</Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography>{user?.adminName}</Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography >Gmail:</Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography>{user?.adminEmail}</Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography >EmployeeId:</Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography>{user?.adminEmployeeId}</Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography >Phonenumber:</Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography>{user?.adminPhonenumber}</Typography>
          </Grid>
        
        </Grid>
      </Box>
          </Box>
      <Box pt={3} gap={4} display={'flex'} alignItems={'center'} justifyContent={'center'}  >
     
      <Button variant="contained" onClick={handleClose4}>cancel</Button>
      
      </Box>
            </DialogContentText>
          </DialogContent></>):(<><DialogContent>
            <DialogContentText id="alert-dialog-description">
            <Box pl={'8rem'}>
            <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
          <Typography >UserName:</Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography>{userdetials?.UserName}</Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography>Gmail</Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography>{userdetials?.email}</Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography>RegistrationNumber</Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography>{userdetials?.registrationNumber}</Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography>Branch</Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography>{userdetials?.branch}</Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography>Gender</Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography>{userdetials?.gender}</Typography>
          </Grid>
        
          <Grid item xs={6}>
          <Typography>BoadingPoint</Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography>{userdetials?.BoadingPoint}</Typography>
          </Grid>
         
          <Grid item xs={6}>
          <Typography>year</Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography>{userdetials?.year}</Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography>PhoneNumber</Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography>{userdetials?.phoneNumber}</Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography>Address</Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography>{userdetials?.address}</Typography>
          </Grid>
        </Grid>
      </Box>
          </Box>
      <Box pt={3} gap={4} display={'flex'} alignItems={'center'} justifyContent={'center'}  >
      {/* <Button variant="contained" onClick={handleClickOpen5}>Update</Button> */}
      <Button variant="contained" onClick={handleClose4}>cancel</Button>
      <Button variant="contained" onClick={handleClickOpen6}>Update</Button>
      </Box>
            </DialogContentText>
          </DialogContent></>)
        }
        {/* <DialogActions>
          <Button onClick={handleClose4}>cancel</Button>
          <Button onClick={handleClose4} autoFocus>
submi         
 </Button>
        </DialogActions> */}
      </Dialog>
</Box>
{/* alert dialog */}


<Dialog
        open={open9}
        onClose={handleClose9}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Admin send the Message"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">

            {
              payment?(<Box display="flex" alignItems={'center'} justifyContent={'center'} pt={2} flexDirection={"row"}>
                <Button variant='contained'  onClick={handleSubmit1}>DownLoad BusPass</Button>
              </Box>):(<>
                <Typography sx={{color:'green'}} > {notification?.message}</Typography>
         
         <Box display="flex" alignItems={'center'} justifyContent={'space-between'} p={1} flexDirection={"row"}>
           <Typography sx={{color:'red'}}>Upload a Fee Receipt Image</Typography>
         {/* <Typography>Image Uploader</Typography> */}
         <Box display="flex" alignItems={'center'} justifyContent={'space-between'} p={1} flexDirection={"row"} >
   
   <Box pt={1} > <Button sx={{mr:'10px'}} component="label" variant='contained'>
         Upload image
       <input hidden accept="image/*" multiple type="file"  onChange={handleFileChange} 
     />
     </Button>
     <Button  variant='contained' onClick={handleUpload}>Submit</Button></Box>
  
  
 </Box>
     </Box>
              </>)
            }
        
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose9}>cancel</Button>
          {/* <Button onClick={handleClose9} autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>

{/* request dialog */}
     <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" >
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Typography variant="h5">Request Form</Typography>
        </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Box pt={2}>
                  <TextField
                  size="small"
                  required
                  placeholder={'FirstName'}
                  label={'FirstName'}
                  fullWidth
                 name="FirstName" 
                 value={firstname}
                 onChange={(e)=>setFirstname(e.target.value)}
                />
                  </Box>
          <Box pt={2}>
                  <TextField
                  size="small"
              
                  required
                  placeholder={'RegistrationNumber'}
                  label={'RegistrationNumber'}
                  fullWidth
                 name="RegistrationNumber" 
                 value={registrationNumber}
                 onChange={(e)=>setRegistrationNumber(e.target.value)}
                 inputProps={{
                  inputMode: 'numeric',
                  pattern: '[0-9]*',
                  maxLength: 10, // Set your desired maximum length
                }}
                />
                  </Box>
         
         
          <Box pt={2}>
                  <TextField
                  size="small"
                  required
                  placeholder={'PhoneNumber'}
                  label={'PhoneNumber'}
                  fullWidth
                 name="PhoneNumber"
                  value={phoneNumber}
                 onChange={(e)=>setPhoneNumber(e.target.value)}
                 inputProps={{
                  inputMode: 'numeric',
                  pattern: '[0-9]*',
                  maxLength: 10, // Set your desired maximum length
                }}
                />
                  </Box>
          <Box pt={2}>
                  <TextField
                  size="small"
                  required
                  placeholder={'Gmail'}
                  label={'Gmail'}
                  fullWidth
                 name="Gmail" 
                 value={email}
                 onChange={(e)=>setEmail(e.target.value)}
                />
                  </Box>
          <Box pt={2}>
                  <TextField
                  size="small"
                  required
                  placeholder={'BoardingPoint'}
                  label={'BoardingPoint'}
                  fullWidth
                 name="BoardingPoint" 
                 value={boardingPoint}
                 onChange={(e)=>setBoardingPoint(e.target.value)}
                />
                  </Box>
          <Box pt={2}>
          <FormControl fullWidth  size="small" >
      <InputLabel id="yearx">Gender</InputLabel>
      <Select
        labelId="gender"
        id="gender"
        value={gender}
       fullWidth
        // style={{width:'19vw'}}
        label="gender"
        placeholder="gender"
        onChange={(e)=>setGender(e.target.value)}
     
      >
       
        <MenuItem value={'M'}>Male</MenuItem>
        <MenuItem value={'F'}>Female</MenuItem>
        <MenuItem value={'o'}>Others</MenuItem>
      </Select>
    </FormControl>
                  </Box>
         
       
      
     
    <Box pt={3} gap={4} display={'flex'} alignItems={'center'} justifyContent={'center'}  >
    {/* <Button variant="contained" onClick={handleClickOpen}>cancel</Button> */}
    <Button variant="contained" onClick={sumbithandle}>submit</Button>
    </Box>
          </DialogContentText>
        </DialogContent>
       
      </Dialog> 

    <Box sx={{ display: "flex" }}>
    <CssBaseline />
    <AppBar component="nav" sx={{ backgroundColor: "red" }}>
      <Toolbar width={'100%'}>
        <Box   width={'100vw'} flexDirection={'row'} justifyContent={'space-between'} sx={{display: { sm: "none",xs:"flex" } }}>
        <Box>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        </Box>
        {
            user?.token || user.adminToken ?(<>
              <Box>{
                  getone?.Accept?(<>
                   
                    <Badge   badgeContent={badgeCount}  sx={{marginRight:'1.3rem'}} color="primary">
             <NotificationsIcon  onClick={handleClickOpen9} sx={{color:"green" ,cursor:'pointer'}} />
           </Badge>
                    </>):("")
                  
                 }
              {
                user.adminToken?(<><IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ marginRight: "1rem" }}
                >
                   <Badge  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}   sx={{
        '& .MuiBadge-dot': {
          backgroundColor: 'green',
         
        },
      }} overlap="circular" badgeContent=" " variant="dot">
               
                <Avatar sx={{ color: 'red' }}><b>A</b></Avatar>
                </Badge>
                  {/* {firstLetter} */}
                </IconButton></>):(<> <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ marginRight: "1rem" }}
                >
                   <Badge  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}   sx={{
        '& .MuiBadge-dot': {
          backgroundColor: 'green',
         
        },
      }} overlap="circular" badgeContent=" " variant="dot">
               
                <Avatar>{firstLetter}</Avatar>
                </Badge>
                  {/* {firstLetter} */}
                </IconButton></>)
              }   
            
 </Box>
            
            </>):(<></>)
               
        }
 
        </Box>
        <Typography
          variant="h4"
          component="div"
          sx={{
            flexGrow: 1,
            display: {
              xs: "none",
              sm: "block",
              lg: "flex",
            },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <b>CUTMAP-Transport</b>
        </Typography>
        <Box sx={{
              display: {
                xs: "none",
                sm: "block",
                backgroundColor: "white",
                padding: "5px",
                marginTop: "4px",

                marginRight: "-25px",
              },
            }}>
<div key={user?.token}>
              {
                user?.token || user.adminToken?(<>
  {navItems.map((item) => (
              <Links key={item.title} to={item.link}>
              <Button   sx={{
                color: "black",
                padding: "0px 35px 0px 35px",
                fontSize: "1.0rem",
            
                textAlign: "center",
                justifyContent: "center",
              }}>
                {item.title}
              </Button>
             
              </Links>
              
            ))}
            
                {
                 getone?.Accept?(<>
                  
                   <Badge   badgeContent={badgeCount}  sx={{marginRight:'1.3rem'}} color="error">
            <NotificationsIcon  onClick={handleClickOpen9} sx={{color:"green" ,cursor:'pointer'}} />
          </Badge>
                   </>):("")
                 
                }

{
                user.adminToken?(<> <IconButton onClick={handleOpenUserMenu} sx={{ marginRight: "1rem" }}>
                <Badge  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}   sx={{
        '& .MuiBadge-dot': {
          backgroundColor: 'green',
         
        },
      }} overlap="circular" badgeContent=" " variant="dot">
                <Avatar sx={{ color: 'red' }}><b>A</b></Avatar>
                </Badge>
               
              </IconButton></>):(<> <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ marginRight: "1rem" }}
                >
                  <Badge  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}   sx={{
        '& .MuiBadge-dot': {
          backgroundColor: 'green',
         
        },
      }} overlap="circular" badgeContent=" " variant="dot">
                <Avatar>{firstLetter}</Avatar>
                </Badge>
               
               
                  {/* {firstLetter} */}
                </IconButton></>)
              }   
                </>):(<>
                  {navItems1.map((item,index) => (
              <Links key={index}  to={item.link}>
              <Button key={item.title}  sx={{
                color: "black",
                padding: "11px 35px 11px 35px",
                fontSize: "1.0rem",
            
                textAlign: "center",
                justifyContent: "center",
              }}>
                {item.title}
              </Button>
             
              </Links>
              
            ))}
           
            
          
            
                </>)
              }
           </div>
<Menu
  sx={{ mt: "45px", mr: "1rem" }}
  id="menu-appbar"
  anchorEl={anchorElUser}
  anchorOrigin={{
    vertical: "top",
    horizontal: "right",
  }}
  keepMounted
  transformOrigin={{
    vertical: "top",
    horizontal: "right",
  }}
  open={Boolean(anchorElUser)}
  onClose={handleCloseUserMenu}
>
  {settings.map((setting) => (
    <MenuItem key={setting} onClick={()=>{handleMenuClick(setting)}}>
      <Typography textAlign="center">{setting}</Typography>
    </MenuItem>
  ))}
</Menu>

          </Box>
      </Toolbar>
    </AppBar>
    <nav>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </nav>

    <Toolbar />
   
  </Box>
  
   </>
  )
}

export default Navbar