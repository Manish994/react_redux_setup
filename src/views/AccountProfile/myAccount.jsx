import { useSelector } from 'react-redux';
import { Grid, Table, TableBody, TableCell, TableContainer, TableRow, Paper, tableCellClasses } from '@mui/material';
import MuiTypography from '@mui/material/Typography';

// project imports
import SubCard from 'ui-component/cards/SubCard';

const MyAccount = () => {
   const customization = useSelector((state) => state.customization);

   return (
      <Grid container spacing={customization.gridSpacing}>
         <Grid container item xs={12} md={12} sm={12}>
            <Grid item xs={12} sm={12}>
               <SubCard title="General Settings" sx={{ marginBottom: '24px' }}>
                  <Grid container direction="column" spacing={1}>
                     <TableContainer component={Paper}>
                        <Table
                           size="small"
                           sx={{
                              [`& .${tableCellClasses.root}`]: {
                                 borderBottom: 'none'
                              }
                           }}
                        >
                           <TableBody>
                              <TableRow>
                                 <TableCell component="th" scope="row">
                                    <MuiTypography variant="subtitle1">Register Date</MuiTypography>
                                 </TableCell>
                                 <TableCell>:</TableCell>
                                 <TableCell>JWT User</TableCell>
                              </TableRow>
                              <TableRow>
                                 <TableCell component="th" scope="row">
                                    <MuiTypography variant="subtitle1">Register Device</MuiTypography>
                                 </TableCell>
                                 <TableCell>:</TableCell>
                                 <TableCell>Mr. Deepen Handgun</TableCell>
                              </TableRow>
                              <TableRow>
                                 <TableCell component="th" scope="row">
                                    <MuiTypography variant="subtitle1">KYC Register Date</MuiTypography>
                                 </TableCell>
                                 <TableCell>:</TableCell>
                                 <TableCell>Male</TableCell>
                              </TableRow>
                              <TableRow>
                                 <TableCell component="th" scope="row">
                                    <MuiTypography variant="subtitle1">Approved By</MuiTypography>
                                 </TableCell>
                                 <TableCell>:</TableCell>
                                 <TableCell>2012-02-03</TableCell>
                              </TableRow>
                              <TableRow>
                                 <TableCell component="th" scope="row">
                                    <MuiTypography variant="subtitle1">Approved Date</MuiTypography>
                                 </TableCell>
                                 <TableCell>:</TableCell>
                                 <TableCell>Teacher</TableCell>
                              </TableRow>
                              <TableRow>
                                 <TableCell component="th" scope="row">
                                    <MuiTypography variant="subtitle1">First Transaction</MuiTypography>
                                 </TableCell>
                                 <TableCell>:</TableCell>
                                 <TableCell>Street 110-B Kalians Bag, Dewan, M.P. INDIA</TableCell>
                              </TableRow>
                              <TableRow>
                                 <TableCell component="th" scope="row">
                                    <MuiTypography variant="subtitle1">Last Transaction</MuiTypography>
                                 </TableCell>
                                 <TableCell>:</TableCell>
                                 <TableCell>+0 123456789 , +0 123456789</TableCell>
                              </TableRow>
                           </TableBody>
                        </Table>
                     </TableContainer>
                  </Grid>
               </SubCard>
            </Grid>
         </Grid>
      </Grid>
   );
};

export default MyAccount;
