import React from 'react'
import { Box, Grid, Paper, TableCell, Typography, tableCellClasses } from '@mui/material'
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
 
    Stack,
    TableBody,
    TableRow,
  
    TableContainer,

    Table,
    TableHead,
   
  } from "@mui/material";
import styled from '@emotion/styled';


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
          <Box sx={{ p: 3 }}>
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
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  


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
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: "1px", // Adjust the thickness of the horizontal lines as needed
      backgroundColor: "#ababab", // Customize the color of the horizontal lines
    },
  }));
  


const Timetable = () => {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
   

    <Grid container  component={Paper} p={2}>
        <Grid  xs={12} lg={12} md={12} sm={12}>
          <Typography variant='h5'  sx={{display:'flex',alignItems:'center',justifyContent:'center', color:'red'}}><b> BUS ROUTES-TIMETABLE</b></Typography>
         
          <Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}  display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          <Tab label="ROUTE1" {...a11yProps(0)} />
          <Tab label="ROUTE2" {...a11yProps(1)} />
          <Tab label="ROUTE3" {...a11yProps(2)} />
          <Tab label="ROUTE4" {...a11yProps(3)} />
          <Tab label="ROUTE5" {...a11yProps(4)} />
          <Tab label="ROUTE6" {...a11yProps(5)} />
          <Tab label="ROUTE7" {...a11yProps(6)} />
        </Tabs>
      </Box>
    
      <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
      <CustomTabPanel value={value} index={0}>
     <Box >
     <Typography variant='h6' sx={{display:'flex' ,alignItems:'center',justifyContent:'center',paddingBottom:"10px"}}>AP 39UH 4267(ROUTENO.1)</Typography>
     <Box pt={0} maxWidth={'100vw'} >
        <Stack
         
        >
          <TableContainer
            component={Paper}
            style={{ borderRadius: "0" }}
            elevation={0}
          >
            <Table
              size="small"
              sx={{
              
                borderLeft: "1.5px solid #ababab",
                borderTop: "1.5px solid #ababab",
                minWidth: {
                  xs:'50vh',
                  lg:'110vh',
                  md:'80vh'
                }
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
                  <StyledTableCell align="left" width={1}>
                    <b>S.No</b>
                  </StyledTableCell>
                  <StyledTableCell align="center" >
                    <b>Bus Stop</b>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <b>Timming</b>
                  </StyledTableCell>
                
                </TableRow>
              </TableHead>
              <TableBody>
              
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      1
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    MADDELAPALEM
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:05
                    </StyledTableCell>
                   </StyledTableRow>

                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      2
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    KRISHNA COLLEGE
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:07
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      3
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   SIVAJI PARK
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:08
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      4
                    </StyledTableCell>
                    <StyledTableCell align="center">
                  ISUKA THOTA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:09
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      5
                    </StyledTableCell>
                    <StyledTableCell align="center">
                 VENKOJAIPALEM
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:10
                    </StyledTableCell>
                  </StyledTableRow>
               
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      6
                    </StyledTableCell>
                    <StyledTableCell align="center">
                 HANUMANTHUWAKA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:12
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      7
                    </StyledTableCell>
                    <StyledTableCell align="center">
                 OLD DAIRY FIRM
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:15
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      8
                    </StyledTableCell>
                    <StyledTableCell align="center">
                ENDADA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:17
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      9
                    </StyledTableCell>
                    <StyledTableCell align="center">
                CAR SHED
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:17
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      10
                    </StyledTableCell>
                    <StyledTableCell align="center">
               MADHURAWADA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:19
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      11
                    </StyledTableCell>
                    <StyledTableCell align="center">
              KOMMADI
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:21
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      12
                    </StyledTableCell>
                    <StyledTableCell align="center">
             MARIKIVALASA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:23
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      13
                    </StyledTableCell>
                    <StyledTableCell align="center">
             ANANDAPURAM
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:25
                    </StyledTableCell>
                  </StyledTableRow>
               
      
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      14
                    </StyledTableCell>
                    <StyledTableCell align="center">
             THAGARAPUVALASA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:29
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      15
                    </StyledTableCell>
                    <StyledTableCell align="center">
          AYINADA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:31
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      16
                    </StyledTableCell>
                    <StyledTableCell align="center">
        COMPUS
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:35
                    </StyledTableCell>
                  </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Paper />
        </Stack>
      </Box>
     </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Box>
      <Typography variant='h6' sx={{display:'flex' ,alignItems:'center',justifyContent:'center',paddingBottom:"10px"}}>AP 39UH 4267(ROUTENO.2)</Typography>
     <Box pt={0} maxWidth={'100vw'} >
        <Stack
         
        >
          <TableContainer
            component={Paper}
            style={{ borderRadius: "0" }}
            elevation={0}
          >
            <Table
              size="small"
              sx={{
              
                borderLeft: "1.5px solid #ababab",
                borderTop: "1.5px solid #ababab",
                minWidth: {
                  xs:'50vh',
                  lg:'110vh',
                  md:'80vh'
                }
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
                  <StyledTableCell align="left" width={1}>
                    <b>S.No</b>
                  </StyledTableCell>
                  <StyledTableCell align="center" >
                    <b>Bus Stop</b>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <b>Timming</b>
                  </StyledTableCell>
                
                </TableRow>
              </TableHead>
              <TableBody>
              
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      1
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    MADDELAPALEM
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:05
                    </StyledTableCell>
                   </StyledTableRow>

                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      2
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    KRISHNA COLLEGE
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:07
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      3
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   SIVAJI PARK
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:08
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      4
                    </StyledTableCell>
                    <StyledTableCell align="center">
                  ISUKA THOTA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:09
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      5
                    </StyledTableCell>
                    <StyledTableCell align="center">
                 VENKOJAIPALEM
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:10
                    </StyledTableCell>
                  </StyledTableRow>
               
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      6
                    </StyledTableCell>
                    <StyledTableCell align="center">
                 HANUMANTHUWAKA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:12
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      7
                    </StyledTableCell>
                    <StyledTableCell align="center">
                 OLD DAIRY FIRM
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:15
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      8
                    </StyledTableCell>
                    <StyledTableCell align="center">
                ENDADA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:17
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      9
                    </StyledTableCell>
                    <StyledTableCell align="center">
                CAR SHED
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:17
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      10
                    </StyledTableCell>
                    <StyledTableCell align="center">
               MADHURAWADA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:19
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      11
                    </StyledTableCell>
                    <StyledTableCell align="center">
              KOMMADI
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:21
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      12
                    </StyledTableCell>
                    <StyledTableCell align="center">
             MARIKIVALASA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:23
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      13
                    </StyledTableCell>
                    <StyledTableCell align="center">
             ANANDAPURAM
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:25
                    </StyledTableCell>
                  </StyledTableRow>
               
      
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      14
                    </StyledTableCell>
                    <StyledTableCell align="center">
             THAGARAPUVALASA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:29
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      15
                    </StyledTableCell>
                    <StyledTableCell align="center">
          AYINADA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:31
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      16
                    </StyledTableCell>
                    <StyledTableCell align="center">
        COMPUS
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:35
                    </StyledTableCell>
                  </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Paper />
        </Stack>
      </Box>
     </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <Box>
      <Typography variant='h6' sx={{display:'flex' ,alignItems:'center',justifyContent:'center',paddingBottom:"10px"}}>AP 39UH 4267(ROUTENO.3)</Typography>
     <Box pt={0} maxWidth={'100vw'} >
        <Stack
         
        >
          <TableContainer
            component={Paper}
            style={{ borderRadius: "0" }}
            elevation={0}
          >
            <Table
              size="small"
              sx={{
              
                borderLeft: "1.5px solid #ababab",
                borderTop: "1.5px solid #ababab",
                minWidth: {
                  xs:'50vh',
                  lg:'110vh',
                  md:'80vh'
                }
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
                  <StyledTableCell align="left" width={1}>
                    <b>S.No</b>
                  </StyledTableCell>
                  <StyledTableCell align="center" >
                    <b>Bus Stop</b>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <b>Timming</b>
                  </StyledTableCell>
                
                </TableRow>
              </TableHead>
              <TableBody>
              
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      1
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    MADDELAPALEM
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:05
                    </StyledTableCell>
                   </StyledTableRow>

                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      2
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    KRISHNA COLLEGE
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:07
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      3
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   SIVAJI PARK
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:08
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      4
                    </StyledTableCell>
                    <StyledTableCell align="center">
                  ISUKA THOTA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:09
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      5
                    </StyledTableCell>
                    <StyledTableCell align="center">
                 VENKOJAIPALEM
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:10
                    </StyledTableCell>
                  </StyledTableRow>
               
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      6
                    </StyledTableCell>
                    <StyledTableCell align="center">
                 HANUMANTHUWAKA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:12
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      7
                    </StyledTableCell>
                    <StyledTableCell align="center">
                 OLD DAIRY FIRM
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:15
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      8
                    </StyledTableCell>
                    <StyledTableCell align="center">
                ENDADA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:17
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      9
                    </StyledTableCell>
                    <StyledTableCell align="center">
                CAR SHED
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:17
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      10
                    </StyledTableCell>
                    <StyledTableCell align="center">
               MADHURAWADA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:19
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      11
                    </StyledTableCell>
                    <StyledTableCell align="center">
              KOMMADI
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:21
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      12
                    </StyledTableCell>
                    <StyledTableCell align="center">
             MARIKIVALASA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:23
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      13
                    </StyledTableCell>
                    <StyledTableCell align="center">
             ANANDAPURAM
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:25
                    </StyledTableCell>
                  </StyledTableRow>
               
      
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      14
                    </StyledTableCell>
                    <StyledTableCell align="center">
             THAGARAPUVALASA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:29
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      15
                    </StyledTableCell>
                    <StyledTableCell align="center">
          AYINADA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:31
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      16
                    </StyledTableCell>
                    <StyledTableCell align="center">
        COMPUS
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:35
                    </StyledTableCell>
                  </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Paper />
        </Stack>
      </Box>
     </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      <Box>
      <Typography variant='h6' sx={{display:'flex' ,alignItems:'center',justifyContent:'center',paddingBottom:"10px"}}>AP 39UH 4267(ROUTENO.4)</Typography>
     <Box pt={0} maxWidth={'100vw'} >
        <Stack
         
        >
          <TableContainer
            component={Paper}
            style={{ borderRadius: "0" }}
            elevation={0}
          >
            <Table
              size="small"
              sx={{
              
                borderLeft: "1.5px solid #ababab",
                borderTop: "1.5px solid #ababab",
                minWidth: {
                  xs:'50vh',
                  lg:'110vh',
                  md:'80vh'
                }
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
                  <StyledTableCell align="left" width={1}>
                    <b>S.No</b>
                  </StyledTableCell>
                  <StyledTableCell align="center" >
                    <b>Bus Stop</b>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <b>Timming</b>
                  </StyledTableCell>
                
                </TableRow>
              </TableHead>
              <TableBody>
              
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      1
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    MADDELAPALEM
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:05
                    </StyledTableCell>
                   </StyledTableRow>

                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      2
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    KRISHNA COLLEGE
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:07
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      3
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   SIVAJI PARK
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:08
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      4
                    </StyledTableCell>
                    <StyledTableCell align="center">
                  ISUKA THOTA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:09
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      5
                    </StyledTableCell>
                    <StyledTableCell align="center">
                 VENKOJAIPALEM
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:10
                    </StyledTableCell>
                  </StyledTableRow>
               
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      6
                    </StyledTableCell>
                    <StyledTableCell align="center">
                 HANUMANTHUWAKA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:12
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      7
                    </StyledTableCell>
                    <StyledTableCell align="center">
                 OLD DAIRY FIRM
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:15
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      8
                    </StyledTableCell>
                    <StyledTableCell align="center">
                ENDADA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:17
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      9
                    </StyledTableCell>
                    <StyledTableCell align="center">
                CAR SHED
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:17
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      10
                    </StyledTableCell>
                    <StyledTableCell align="center">
               MADHURAWADA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:19
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      11
                    </StyledTableCell>
                    <StyledTableCell align="center">
              KOMMADI
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:21
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      12
                    </StyledTableCell>
                    <StyledTableCell align="center">
             MARIKIVALASA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:23
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      13
                    </StyledTableCell>
                    <StyledTableCell align="center">
             ANANDAPURAM
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:25
                    </StyledTableCell>
                  </StyledTableRow>
               
      
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      14
                    </StyledTableCell>
                    <StyledTableCell align="center">
             THAGARAPUVALASA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:29
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      15
                    </StyledTableCell>
                    <StyledTableCell align="center">
          AYINADA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:31
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      16
                    </StyledTableCell>
                    <StyledTableCell align="center">
        COMPUS
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:35
                    </StyledTableCell>
                  </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Paper />
        </Stack>
      </Box>
     </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
      <Box>
      <Typography variant='h6' sx={{display:'flex' ,alignItems:'center',justifyContent:'center',paddingBottom:"10px"}}>AP 39UH 4267(ROUTENO.5)</Typography>
     <Box pt={0} maxWidth={'100vw'} >
        <Stack
         
        >
          <TableContainer
            component={Paper}
            style={{ borderRadius: "0" }}
            elevation={0}
          >
            <Table
              size="small"
              sx={{
              
                borderLeft: "1.5px solid #ababab",
                borderTop: "1.5px solid #ababab",
                minWidth: {
                  xs:'50vh',
                  lg:'110vh',
                  md:'80vh'
                }
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
                  <StyledTableCell align="left" width={1}>
                    <b>S.No</b>
                  </StyledTableCell>
                  <StyledTableCell align="center" >
                    <b>Bus Stop</b>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <b>Timming</b>
                  </StyledTableCell>
                
                </TableRow>
              </TableHead>
              <TableBody>
              
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      1
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    MADDELAPALEM
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:05
                    </StyledTableCell>
                   </StyledTableRow>

                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      2
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    KRISHNA COLLEGE
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:07
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      3
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   SIVAJI PARK
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:08
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      4
                    </StyledTableCell>
                    <StyledTableCell align="center">
                  ISUKA THOTA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:09
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      5
                    </StyledTableCell>
                    <StyledTableCell align="center">
                 VENKOJAIPALEM
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:10
                    </StyledTableCell>
                  </StyledTableRow>
               
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      6
                    </StyledTableCell>
                    <StyledTableCell align="center">
                 HANUMANTHUWAKA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:12
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      7
                    </StyledTableCell>
                    <StyledTableCell align="center">
                 OLD DAIRY FIRM
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:15
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      8
                    </StyledTableCell>
                    <StyledTableCell align="center">
                ENDADA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:17
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      9
                    </StyledTableCell>
                    <StyledTableCell align="center">
                CAR SHED
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:17
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      10
                    </StyledTableCell>
                    <StyledTableCell align="center">
               MADHURAWADA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:19
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      11
                    </StyledTableCell>
                    <StyledTableCell align="center">
              KOMMADI
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:21
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      12
                    </StyledTableCell>
                    <StyledTableCell align="center">
             MARIKIVALASA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:23
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      13
                    </StyledTableCell>
                    <StyledTableCell align="center">
             ANANDAPURAM
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:25
                    </StyledTableCell>
                  </StyledTableRow>
               
      
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      14
                    </StyledTableCell>
                    <StyledTableCell align="center">
             THAGARAPUVALASA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:29
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      15
                    </StyledTableCell>
                    <StyledTableCell align="center">
          AYINADA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:31
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      16
                    </StyledTableCell>
                    <StyledTableCell align="center">
        COMPUS
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:35
                    </StyledTableCell>
                  </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Paper />
        </Stack>
      </Box>
     </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
      <Box>
      <Typography variant='h6' sx={{display:'flex' ,alignItems:'center',justifyContent:'center',paddingBottom:"10px"}}>AP 39UH 4267(ROUTENO.6)</Typography>
     <Box pt={0} maxWidth={'100vw'} >
        <Stack
         
        >
          <TableContainer
            component={Paper}
            style={{ borderRadius: "0" }}
            elevation={0}
          >
            <Table
              size="small"
              sx={{
              
                borderLeft: "1.5px solid #ababab",
                borderTop: "1.5px solid #ababab",
                minWidth: {
                  xs:'50vh',
                  lg:'110vh',
                  md:'80vh'
                }
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
                  <StyledTableCell align="left" width={1}>
                    <b>S.No</b>
                  </StyledTableCell>
                  <StyledTableCell align="center" >
                    <b>Bus Stop</b>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <b>Timming</b>
                  </StyledTableCell>
                
                </TableRow>
              </TableHead>
              <TableBody>
              
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      1
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    MADDELAPALEM
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:05
                    </StyledTableCell>
                   </StyledTableRow>

                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      2
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    KRISHNA COLLEGE
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:07
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      3
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   SIVAJI PARK
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:08
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      4
                    </StyledTableCell>
                    <StyledTableCell align="center">
                  ISUKA THOTA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:09
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      5
                    </StyledTableCell>
                    <StyledTableCell align="center">
                 VENKOJAIPALEM
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:10
                    </StyledTableCell>
                  </StyledTableRow>
               
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      6
                    </StyledTableCell>
                    <StyledTableCell align="center">
                 HANUMANTHUWAKA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:12
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      7
                    </StyledTableCell>
                    <StyledTableCell align="center">
                 OLD DAIRY FIRM
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:15
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      8
                    </StyledTableCell>
                    <StyledTableCell align="center">
                ENDADA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:17
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      9
                    </StyledTableCell>
                    <StyledTableCell align="center">
                CAR SHED
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:17
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      10
                    </StyledTableCell>
                    <StyledTableCell align="center">
               MADHURAWADA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:19
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      11
                    </StyledTableCell>
                    <StyledTableCell align="center">
              KOMMADI
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:21
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      12
                    </StyledTableCell>
                    <StyledTableCell align="center">
             MARIKIVALASA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:23
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      13
                    </StyledTableCell>
                    <StyledTableCell align="center">
             ANANDAPURAM
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:25
                    </StyledTableCell>
                  </StyledTableRow>
               
      
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      14
                    </StyledTableCell>
                    <StyledTableCell align="center">
             THAGARAPUVALASA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:29
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      15
                    </StyledTableCell>
                    <StyledTableCell align="center">
          AYINADA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:31
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      16
                    </StyledTableCell>
                    <StyledTableCell align="center">
        COMPUS
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:35
                    </StyledTableCell>
                  </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Paper />
        </Stack>
      </Box>
     </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
      <Box>
      <Typography variant='h6' sx={{display:'flex' ,alignItems:'center',justifyContent:'center',paddingBottom:"10px"}}>AP 39UH 4267(ROUTENO.7)</Typography>
     <Box pt={0} maxWidth={'100vw'} >
        <Stack
         
        >
          <TableContainer
            component={Paper}
            style={{ borderRadius: "0" }}
            elevation={0}
          >
            <Table
              size="small"
              sx={{
              
                borderLeft: "1.5px solid #ababab",
                borderTop: "1.5px solid #ababab",
                minWidth: {
                  xs:'50vh',
                  lg:'110vh',
                  md:'80vh'
                }
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
                  <StyledTableCell align="left" width={1}>
                    <b>S.No</b>
                  </StyledTableCell>
                  <StyledTableCell align="center" >
                    <b>Bus Stop</b>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <b>Timming</b>
                  </StyledTableCell>
                
                </TableRow>
              </TableHead>
              <TableBody>
              
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      1
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    MADDELAPALEM
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:05
                    </StyledTableCell>
                   </StyledTableRow>

                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      2
                    </StyledTableCell>
                    <StyledTableCell align="center">
                    KRISHNA COLLEGE
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:07
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      3
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   SIVAJI PARK
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:08
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      4
                    </StyledTableCell>
                    <StyledTableCell align="center">
                  ISUKA THOTA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:09
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      5
                    </StyledTableCell>
                    <StyledTableCell align="center">
                 VENKOJAIPALEM
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:10
                    </StyledTableCell>
                  </StyledTableRow>
               
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      6
                    </StyledTableCell>
                    <StyledTableCell align="center">
                 HANUMANTHUWAKA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:12
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      7
                    </StyledTableCell>
                    <StyledTableCell align="center">
                 OLD DAIRY FIRM
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:15
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      8
                    </StyledTableCell>
                    <StyledTableCell align="center">
                ENDADA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:17
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      9
                    </StyledTableCell>
                    <StyledTableCell align="center">
                CAR SHED
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:17
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      10
                    </StyledTableCell>
                    <StyledTableCell align="center">
               MADHURAWADA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:19
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      11
                    </StyledTableCell>
                    <StyledTableCell align="center">
              KOMMADI
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:21
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      12
                    </StyledTableCell>
                    <StyledTableCell align="center">
             MARIKIVALASA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:23
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      13
                    </StyledTableCell>
                    <StyledTableCell align="center">
             ANANDAPURAM
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:25
                    </StyledTableCell>
                  </StyledTableRow>
               
      
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      14
                    </StyledTableCell>
                    <StyledTableCell align="center">
             THAGARAPUVALASA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:29
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      15
                    </StyledTableCell>
                    <StyledTableCell align="center">
          AYINADA
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:31
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow >
                    <StyledTableCell component="th" scope="row">
                      16
                    </StyledTableCell>
                    <StyledTableCell align="center">
        COMPUS
                    </StyledTableCell>
                    <StyledTableCell align="center">
                   7:35
                    </StyledTableCell>
                  </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Paper />
        </Stack>
      </Box>
     </Box>
      </CustomTabPanel>
      </Box>
    </Box>

    
       </Grid>
       </Grid>


    

    </>
  )
}

export default Timetable