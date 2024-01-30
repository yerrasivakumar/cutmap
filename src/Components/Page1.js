import { Box, Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography, useTheme } from '@mui/material'
import React from 'react'
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../App.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { makeStyles } from "@mui/styles";
import moment from "moment";
import axios from 'axios';
import LoginIcon from '@mui/icons-material/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const Page1 = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      UserName: "",
      registrationNumber: "",
      branch: "",
      phoneNumber: "",
      BoadingPoint: "",
      ParentPhoneNumber:"",
      address: "",
      year: "",
      gender:'',
      chosse:'',
    },
    validationSchema: Yup.object({
      // email: Yup.string().email("Invalid email address").required("Required"),
      email: Yup.string()
      .email("Invalid email address")
      .matches(/^[a-zA-Z0-9._-]+@cutmap\.ac\.in$/, "Email must be from cutmap.ac.in domain")
      .required("Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
        UserName: Yup.string().required("Required"),

        registrationNumber: Yup.string().required("Required"),

      branch: Yup.string().required("Required"),
      phoneNumber: Yup.string().required("Required"),
      ParentPhoneNumber: Yup.string().required("Required"),
      chosse: Yup.string().required("Required"),

      BoadingPoint: Yup.string().required("Required"),
      address: Yup.string().required("Required"),
      year: Yup.string().required("Required"),
      gender: Yup.string().required('Required'),
    }),
    onSubmit: async(values,{resetForm}) => {
      // values.dateOfBirth = moment(values.dateOfBirth['$d']).format('DD/MM/YYYY')
      try {
        await axios.post('http://localhost:3000/auth/register', values);
        toast.success('User registered successfully');
        navigate("/Page2")
        resetForm();
        // setOpen(false);
        // navigate('/')
      } catch (error) {
        toast.error(error?.response?.data?.message)
        //console.log('siva222',error?.response?.data?.message);
      }// Handle registration logic here
      //console.log("siva",values)
    },
  });
  return (
    <>
    <Box pt={3}>
                <Box
                  justifyContent="center"
                  alignItems={"center"}
                  display={"flex"}
                >
                  <PersonAddAltOutlinedIcon
                    sx={{
                      fontSize: "3rem",
                      color:`grey`,
                      borderRadius: "3%",
                      fontSizeAdjust: 4,
                    }}
                  />
                </Box>
                <Box
                  justifyContent="center"
                  alignItems={"center"}
                  display={"flex"}
                >
                  <Typography
                    variant="h6"
                    color={(theme) => theme.palette.grey[500]}
                    component="h2"
                    guttertop={"true"}
                    textTransform={"uppercase"}
                    fontWeight={300}
                    letterSpacing={1}
                  >
                    User Registeration
                  </Typography>
                </Box>
              </Box>
              <Stack sx={{
                padding:"0rem 3rem 0rem 3rem"
              }}
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
                  <form onSubmit={formik.handleSubmit}>
                    <Grid
                      container
                      rowSpacing={1}
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                      <Grid item sm={12} lg={4} xs={12} md={6}>
                        <Box pt={2}>
                          <TextField
                            size="small"
                            placeholder="Email"
                            
                            style={{ width: "100%" }}
                            id="email"
                            label="Email"
                            {...formik.getFieldProps("email")}
                            error={
                              formik.touched.email &&
                              Boolean(formik.errors.email)
                            }
                            helperText={
                              formik.touched.email && formik.errors.email
                            }
                          />
                        </Box>
                      </Grid>
                      <Grid item sm={12} lg={4} xs={12} md={6}>
                        <Box pt={2}>
                          <TextField
                            id="password"
                            label="Password"
                            type="password"
                            size="small"
                            placeholder="Password"
                            // style={{ width: "18vw" }}
                            style={{ width: "100%" }}
                            {...formik.getFieldProps("password")}
                            error={
                              formik.touched.password &&
                              Boolean(formik.errors.password)
                            }
                            helperText={
                              formik.touched.password && formik.errors.password
                            }

                            // value={title}
                            // onChange={(e)=>SetTitle(e.target.value)}
                          />
                        </Box>
                      </Grid>
                      <Grid item sm={12} lg={4} xs={12} md={6}>
                        <Box pt={2}>
                          {" "}
                          <TextField
                            size="small"
                            style={{ width: "100%" }}
                            placeholder="UserName"
                            id="UserName"
                            label="First Name"
                            {...formik.getFieldProps("UserName")}
                            error={
                              formik.touched.UserName &&
                              Boolean(formik.errors.UserName)
                            }
                            helperText={
                              formik.touched.UserName &&
                              formik.errors.UserName
                            }
                            // value={title}
                            // onChange={(e)=>SetTitle(e.target.value)}
                          />
                        </Box>
                      </Grid>
                      {/* <Grid item sm={12} lg={4} xs={12} md={6}>
                        <Box pt={2}>
                          {" "}
                          <TextField
                            size="small"
                            style={{ width: "100%" }}
                            placeholder="Last Name"
                            id="lastName"
                            label="Last Name"
                            {...formik.getFieldProps("lastName")}
                            error={
                              formik.touched.lastName &&
                              Boolean(formik.errors.lastName)
                            }
                            helperText={
                              formik.touched.lastName && formik.errors.lastName
                            }
                            // value={title}
                            // onChange={(e)=>SetTitle(e.target.value)}
                          />
                        </Box>
                      </Grid> */}
                      <Grid item sm={12} lg={4} xs={12} md={6}>
                        <Box pt={2}>
                          {" "}
                          <TextField
                            size="small"
                            style={{ width: "100%" }}
                            placeholder="registrationNumber"
                            id="registrationNumber"
                            label="registrationNumber"
                            inputProps={{
                              inputMode: 'numeric',
                              pattern: '[0-9]*',
                              maxLength: 10,}}
                            {...formik.getFieldProps("registrationNumber")}
                            error={
                              formik.touched.registrationNumber &&
                              Boolean(formik.errors.registrationNumber)
                            }
                            helperText={
                              formik.touched.registrationNumber &&
                              formik.errors.registrationNumber
                            }
                            // value={title}
                            // onChange={(e)=>SetTitle(e.target.value)}
                          />
                        </Box>
                      </Grid>
                      {/* <Grid item sm={12} lg={4} xs={12} md={6}>
                        <Box pt={2}>
                          {" "}
                          <TextField
                            size="small"
                            style={{ width: "100%" }}
                            placeholder="Age"
                            label="Age"
                            id="age"
                            {...formik.getFieldProps("age")}
                            error={
                              formik.touched.age && Boolean(formik.errors.age)
                            }
                            helperText={formik.touched.age && formik.errors.age}
                            // value={title}
                            // onChange={(e)=>SetTitle(e.target.value)}
                          />
                        </Box>
                      </Grid> */}
                      <Grid item sm={12} lg={4} xs={12} md={6}>
                        <Box pt={2}>
                         
                          {/* <TextField
                            size="small"
                            style={{ width: "18vw" }}
                            placeholder="Group"
                            id="group"
                            label="Group"
                            {...formik.getFieldProps("group")}
                            error={
                              formik.touched.group &&
                              Boolean(formik.errors.group)
                            }
                            helperText={
                              formik.touched.group && formik.errors.group
                            }
                            // value={title}
                            // onChange={(e)=>SetTitle(e.target.value)}
                          /> */}
                                           <FormControl  size="small" style={{ width: "100%" }}>
      <InputLabel id="branch">Branch</InputLabel>
      <Select
        labelId="branch"
        id="branch"
        style={{ width: "100%" }}
        // value={age}
        // style={{width:'18vw'}}
        label="branch"
        placeholder="branch"
        {...formik.getFieldProps("branch")}
        error={
          formik.touched.branch &&
          Boolean(formik.errors.branch)
        }
        helperText={
          formik.touched.branch && formik.errors.branch
        }
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'IT'}>IT</MenuItem>
        <MenuItem value={'CSE'}>CSE</MenuItem>
        <MenuItem value={'EEE'}>EEE</MenuItem>
        <MenuItem value={'ECE'}>ECE</MenuItem>
        <MenuItem value={'MECH'}>MECH</MenuItem>
        <MenuItem value={'MET'}>MET</MenuItem>
        <MenuItem value={'MET'}>MET</MenuItem>
      </Select>
      {
        formik.touched.group &&
        Boolean(formik.errors.group) ?<FormHelperText>
        <Typography style={{color:'red',fontSize:'12px',fontWeight:'300'}}>Required</Typography>
      </FormHelperText>:""
      }
      
    </FormControl>
                        </Box>
                      </Grid>
                      <Grid item sm={12} lg={4} xs={12} md={6}>
                        <Box pt={2}>
                          {" "}
                          <TextField
                            size="small"
                            style={{ width: "100%" }}
                            placeholder="Phone Number"
                            id="phoneNumber"
                            label="Phone Number"
                            {...formik.getFieldProps("phoneNumber")}
                            error={
                              formik.touched.phoneNumber &&
                              Boolean(formik.errors.phoneNumber)
                            }
                            helperText={
                              formik.touched.phoneNumber &&
                              formik.errors.phoneNumber
                            }
                            // value={title}
                            // onChange={(e)=>SetTitle(e.target.value)}
                          />
                        </Box>
                      </Grid>
                      {/* <Grid item sm={12} lg={4} xs={12} md={6}>
                        <Box pt={2}>
                         
                          
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker 
                        label='select the date'
                       size="small"
                        Select={formik.values.dateOfBirth}
                        onChange={(date) => formik.setFieldValue('dateOfBirth', date
                        )}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="dd/mm/yyyy"
                       sx={{
                        width:'100%',
                        "& .MuiInputBase-input": {
                          height: "8px" 
                        },
                       }}
                       error={ formik.touched.dateOfBirth &&
                        Boolean(formik.errors.dateOfBirth)}
                        helperText={
                          formik.touched.collegeName &&
                          formik.errors.collegeName
                        }
                        
                      style={{ width: "100%" }}
                        renderInput={(props)=><TextField  style={{ width: "100%" }}   
                        sx={{ backgroundColor: 'white',"& .MuiInputBase-input": {
                          height: "15px" ,
                          padding:'none'
                        },"& .MuiOutlinedInput-input": {
                          
                          fontSize: '13px',
                        },
                        }}
                         {...props}/> }
                        
                        />
      {
        formik.touched.dateOfBirth &&
        Boolean(formik.errors.dateOfBirth) ?<FormHelperText>
        <Typography style={{color:'red',fontSize:'12px',fontWeight:'300'}}>Required</Typography>
      </FormHelperText>:""
      }
                        </LocalizationProvider>
                        </Box>
                      </Grid> */}
                      <Grid item sm={12} lg={4} xs={12} md={6}>
                        <Box pt={2}>
                          {" "}
                          <TextField
                            size="small"
                            style={{ width: "100%" }}
                            placeholder="Bus Number"
                            id="BoadingPoint"
                            label="Bus Number"
                            {...formik.getFieldProps("BoadingPoint")}
                            error={
                              formik.touched.BoadingPoint &&
                              Boolean(formik.errors.BoadingPoint)
                            }
                            helperText={
                              !formik.touched.BoadingPoint
                                ? " Before you see the services link then Enter the BusNumber "
                                : formik.touched.BoadingPoint &&
                                  !formik.values.BoadingPoint
                                ? "required."
                                : null
                            }
                            // value={title}
                            // onChange={(e)=>SetTitle(e.target.value)}
                          />
                         
                        </Box>
                      </Grid>
                      <Grid item sm={12} lg={4} xs={12} md={6}>
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
      <InputLabel id="yearx">Gender</InputLabel>
      <Select
        labelId="gender"
        id="gender"
        // value={age}
        // style={{width:'18vw'}}
        style={{ width: "100%" }}
        label="gender"
        placeholder="gender"
        {...formik.getFieldProps('gender')}
        error={formik.touched.gender && Boolean(formik.errors.gender)}
        helperText={formik.touched.gender && formik.errors.gender}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'M'}>Male</MenuItem>
        <MenuItem value={'F'}>Female</MenuItem>
        <MenuItem value={'o'}>Others</MenuItem>
        
      </Select>
      {
        formik.touched.gender &&
        Boolean(formik.errors.gender) ?<FormHelperText>
        <Typography style={{color:'red',fontSize:'12px',fontWeight:'300'}}>Required</Typography>
      </FormHelperText>:""
      }
    </FormControl>
                        </Box>
                      </Grid>
                      <Grid item sm={12} lg={4} xs={12} md={6}>
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
      <InputLabel id="yearx">year</InputLabel>
      <Select
        labelId="year"
        id="year"
        // value={age}
        // style={{width:'18vw'}}
        style={{ width: "100%" }}
        label="year"
        placeholder="year"
        {...formik.getFieldProps('year')}
                  error={formik.touched.year && Boolean(formik.errors.year)}
                  helperText={formik.touched.year && formik.errors.year}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'1year'}>1'st year</MenuItem>
        <MenuItem value={'2year'}>2'nd year</MenuItem>
        <MenuItem value={'3year'}>3'rd year</MenuItem>
        <MenuItem value={'4year'}>4'th year</MenuItem>
      </Select>
      {
        formik.touched.year &&
        Boolean(formik.errors.year) ?<FormHelperText>
        <Typography style={{color:'red',fontSize:'12px',fontWeight:'300'}}>Required</Typography>
      </FormHelperText>:""
      }
    </FormControl>
                        </Box>
                      </Grid>
                      <Grid item sm={12} lg={4} xs={12} md={4}>
                        <Box pt={1}>
                          {" "}
                          <TextField
                            size="small"
                            style={{ width: "100%" }}
                            placeholder="Parent MobileNumber"
                            id="ParentPhoneNumber"
                            label="Parent MobileNumber"
                            {...formik.getFieldProps("ParentPhoneNumber")}
                            error={
                              formik.touched.ParentPhoneNumber &&
                              Boolean(formik.errors.ParentPhoneNumber)
                            }
                            helperText={
                              formik.touched.ParentPhoneNumber && formik.errors.ParentPhoneNumber
                            }
                            // value={title}
                            // onChange={(e)=>SetTitle(e.target.value)}
                          />
                        </Box>
                      </Grid>
                      <Grid item sm={12} lg={4} xs={12} md={4}>
                        <Box pt={1}>
                          {" "}
                          <TextField
                            size="small"
                            style={{ width: "100%" }}
                            placeholder="Address"
                            id="address"
                            label="Address"
                            {...formik.getFieldProps("address")}
                            error={
                              formik.touched.address &&
                              Boolean(formik.errors.address)
                            }
                            helperText={
                              formik.touched.address && formik.errors.address
                            }
                            // value={title}
                            // onChange={(e)=>SetTitle(e.target.value)}
                          />
                        </Box>
                      </Grid>
                      <Grid item sm={12} lg={4} xs={12} md={4}>
                        <Box pt={1}>
                          {" "}
                          <TextField
                            size="small"
                            style={{ width: "100%" }}
                            placeholder="Your Favorite Friend name"
                            id="chosse"
                            label="Your Favorite Friend name"
                            {...formik.getFieldProps("chosse")}
                            error={
                              formik.touched.chosse &&
                              Boolean(formik.errors.chosse)
                            }
                            helperText={
                              formik.touched.chosse && formik.errors.chosse
                            }
                            // value={title}
                            // onChange={(e)=>SetTitle(e.target.value)}
                          />
                        </Box>
                      </Grid>
                    </Grid>
                    <Box pt={2} display={'flex'} alignContent={'center'} justifyContent={'center'}>
                    <Button fullWidth type="submit" variant="contained" color="primary">
                     submit
                    </Button>
                    </Box>
                    <Box pt={2} display={'flex'} alignContent={'center'} justifyContent={'center'} >
                      <Typography sx={{cursor:'pointer'}} 
                       onClick={()=> navigate("/Page2")}
                      >Already have an account?</Typography>
                    </Box>
                  </form>
                </Stack>
    
    </>
  )
}

export default Page1