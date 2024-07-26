import React from 'react';

// Material-UI
import MuiTypography from '@mui/material/Typography';
import { Grid, Table, TableContainer, TableBody, TableRow, TableCell, Paper, tableCellClasses } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';

const UserProfileCard = () => {
   /* ╔════════════════════════════════════════════════════════╗
      ║                      FORM SETUP                        ║
      ╚════════════════════════════════════════════════════════╝ */
   return (
      <React.Fragment>
         <Grid item xs={12} md={6}>
            <SubCard title="Personal Information" sx={{ marginBottom: '24px' }}>
               <Grid container direction="column" spacing={1}>
                  <TableContainer component={Paper}>
                     <Table
                        size="small"
                        sx={{
                           [`& .${tableCellClasses.root}`]: {
                              borderBottom: 'none'
                           },
                           [`& .MuiTableRow-root:hover`]: {
                              backgroundColor: 'rgb(237, 231, 246)'
                           },
                           cursor: 'pointer',
                           height: '450px'
                        }}
                     >
                        <TableBody>
                           <TableRow>
                              <TableCell component="th" scope="row">
                                 <MuiTypography variant="subtitle1"> Full Name</MuiTypography>
                              </TableCell>
                              <TableCell>:</TableCell>
                              <TableCell>JWT User</TableCell>
                           </TableRow>
                           <TableRow>
                              <TableCell component="th" scope="row">
                                 <MuiTypography variant="subtitle1"> Nick Name</MuiTypography>
                              </TableCell>
                              <TableCell>:</TableCell>
                              <TableCell>Mr. Deepen Handgun</TableCell>
                           </TableRow>
                           <TableRow>
                              <TableCell component="th" scope="row">
                                 <MuiTypography variant="subtitle1"> Gender</MuiTypography>
                              </TableCell>
                              <TableCell>:</TableCell>
                              <TableCell>Male</TableCell>
                           </TableRow>
                           <TableRow>
                              <TableCell component="th" scope="row">
                                 <MuiTypography variant="subtitle1"> Date Of Birth</MuiTypography>
                              </TableCell>
                              <TableCell>:</TableCell>
                              <TableCell>2012-02-03</TableCell>
                           </TableRow>
                           <TableRow>
                              <TableCell component="th" scope="row">
                                 <MuiTypography variant="subtitle1"> Occupation</MuiTypography>
                              </TableCell>
                              <TableCell>:</TableCell>
                              <TableCell>Teacher</TableCell>
                           </TableRow>
                           <TableRow>
                              <TableCell component="th" scope="row">
                                 <MuiTypography variant="subtitle1"> Address</MuiTypography>
                              </TableCell>
                              <TableCell>:</TableCell>
                              <TableCell>Street 110-B Kalians Bag, Dewan, M.P. INDIA</TableCell>
                           </TableRow>
                           <TableRow>
                              <TableCell component="th" scope="row">
                                 <MuiTypography variant="subtitle1"> Phone</MuiTypography>
                              </TableCell>
                              <TableCell>:</TableCell>
                              <TableCell>+0 123456789 , +0 123456789</TableCell>
                           </TableRow>
                           <TableRow>
                              <TableCell component="th" scope="row">
                                 <MuiTypography variant="subtitle1"> Email</MuiTypography>
                              </TableCell>
                              <TableCell>:</TableCell>
                              <TableCell>support@example.com</TableCell>
                           </TableRow>
                           <TableRow>
                              <TableCell component="th" scope="row">
                                 <MuiTypography variant="subtitle1"> Country</MuiTypography>
                              </TableCell>
                              <TableCell>:</TableCell>
                              <TableCell>Nepal</TableCell>
                           </TableRow>
                           <TableRow>
                              <TableCell component="th" scope="row">
                                 <MuiTypography variant="subtitle1"> Nationality</MuiTypography>
                              </TableCell>
                              <TableCell>:</TableCell>
                              <TableCell>Australian</TableCell>
                           </TableRow>
                        </TableBody>
                     </Table>
                  </TableContainer>
               </Grid>
            </SubCard>
         </Grid>
         <Grid item xs={12} md={6}>
            <SubCard title="KYC Details">
               <Grid container direction="column" spacing={1}>
                  <TableContainer component={Paper}>
                     <Table
                        size="small"
                        sx={{
                           [`& .${tableCellClasses.root}`]: {
                              borderBottom: 'none'
                           },
                           [`& .MuiTableRow-root:hover`]: {
                              backgroundColor: 'rgb(237, 231, 246)'
                           },
                           cursor: 'pointer',
                           width: '100%',
                           height: '450px'
                        }}
                     >
                        <TableBody>
                           <TableRow>
                              <TableCell component="th" scope="row">
                                 <MuiTypography variant="subtitle1"> Id Type</MuiTypography>
                              </TableCell>
                              <TableCell>:</TableCell>
                              <TableCell>JWT User</TableCell>
                           </TableRow>
                           <TableRow>
                              <TableCell component="th" scope="row">
                                 <MuiTypography variant="subtitle1"> Id Number</MuiTypography>
                              </TableCell>
                              <TableCell>:</TableCell>
                              <TableCell>Mr. Deepen Handgun</TableCell>
                           </TableRow>
                           <TableRow>
                              <TableCell component="th" scope="row">
                                 <MuiTypography variant="subtitle1"> Id Issue Date</MuiTypography>
                              </TableCell>
                              <TableCell>:</TableCell>
                              <TableCell>Street 110-B Kalians Bag, Dewan, M.P. INDIA</TableCell>
                           </TableRow>
                           <TableRow>
                              <TableCell component="th" scope="row">
                                 <MuiTypography variant="subtitle1"> Id Expiry Date</MuiTypography>
                              </TableCell>
                              <TableCell>:</TableCell>
                              <TableCell>12345</TableCell>
                           </TableRow>
                           <TableRow>
                              <TableCell component="th" scope="row">
                                 <MuiTypography variant="subtitle1">Issuing Authority</MuiTypography>
                              </TableCell>
                              <TableCell>:</TableCell>
                              <TableCell>+0 123456789 , +0 123456789</TableCell>
                           </TableRow>
                           <TableRow>
                              <TableCell component="th" scope="row">
                                 <MuiTypography variant="subtitle1">Reference Number</MuiTypography>
                              </TableCell>
                              <TableCell>:</TableCell>
                              <TableCell>support@example.com</TableCell>
                           </TableRow>
                           <TableRow>
                              <TableCell component="th" scope="row">
                                 <MuiTypography variant="subtitle1"> UnitNumber</MuiTypography>
                              </TableCell>
                              <TableCell>:</TableCell>
                              <TableCell>http://example.com</TableCell>
                           </TableRow>

                           <TableRow>
                              <TableCell component="th" scope="row">
                                 <MuiTypography variant="subtitle1"> StreetNumber</MuiTypography>
                              </TableCell>
                              <TableCell>:</TableCell>
                              <TableCell>http://example.com</TableCell>
                           </TableRow>
                           <TableRow>
                              <TableCell component="th" scope="row">
                                 <MuiTypography variant="subtitle1"> StreetType</MuiTypography>
                              </TableCell>
                              <TableCell>:</TableCell>
                              <TableCell>http://example.com</TableCell>
                           </TableRow>
                           <TableRow>
                              <TableCell component="th" scope="row">
                                 <MuiTypography variant="subtitle1"> SuburbName</MuiTypography>
                              </TableCell>
                              <TableCell>:</TableCell>
                              <TableCell>http://example.com</TableCell>
                           </TableRow>
                           <TableRow>
                              <TableCell component="th" scope="row">
                                 <MuiTypography variant="subtitle1"> Postcode</MuiTypography>
                              </TableCell>
                              <TableCell>:</TableCell>
                              <TableCell>http://example.com</TableCell>
                           </TableRow>
                           <TableRow>
                              <TableCell component="th" scope="row">
                                 <MuiTypography variant="subtitle1"> StateCode</MuiTypography>
                              </TableCell>
                              <TableCell>:</TableCell>
                              <TableCell>http://example.com</TableCell>
                           </TableRow>
                        </TableBody>
                     </Table>
                  </TableContainer>
               </Grid>
            </SubCard>
         </Grid>
      </React.Fragment>
   );
};

export default UserProfileCard;
