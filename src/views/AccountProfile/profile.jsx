import { useSelector } from 'react-redux';
// material-ui
import Grid from '@mui/material/Grid';
import MuiTypography from '@mui/material/Typography';
import Typography from '@mui/material/Typography';
import Avatar from 'ui-component/extended/Avatar';
import {
   List,
   ListItemButton,
   ListItemIcon,
   ListItemText,
   Divider,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableRow,
   Paper,
   tableCellClasses
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// project imports
import SubCard from 'ui-component/cards/SubCard';

// ==============================|| TYPOGRAPHY ||============================== //

const Profile = () => {
   const customization = useSelector((state) => state.customization);
   return (
      <Grid container spacing={customization.gridSpacing}>
         <Grid container item xs={12} md={12}>
            <Grid container spacing={2}>
               <Grid item xs={12} sm={4}>
                  <SubCard
                     title={
                        <Grid container spacing={2} alignItems="center">
                           <Grid item>
                              <Avatar alt="User 1" src="/assets/avatar-3-DAakmaVf.png" />
                           </Grid>
                           <Grid item xs>
                              <Typography variant="subtitle1">Abinash Dhakal</Typography>
                              <Typography variant="subtitle2">Red Hacker</Typography>
                           </Grid>
                        </Grid>
                     }
                  >
                     <Grid container direction="column" item sx={{ marginBottom: '30px' }}>
                        <List>
                           <ListItemButton>
                              <ListItemIcon>
                                 <EmailIcon />
                              </ListItemIcon>
                              <Typography variant="subtitle1">Email</Typography>
                              <ListItemText>
                                 <MuiTypography variant="subtitle2" align="right">
                                    demo@sample.com
                                 </MuiTypography>
                              </ListItemText>
                           </ListItemButton>
                           <Divider />
                           <ListItemButton>
                              <ListItemIcon>
                                 <SmartphoneIcon />
                              </ListItemIcon>
                              <Typography variant="subtitle1">Phone</Typography>
                              <ListItemText>
                                 <MuiTypography variant="subtitle2" align="right">
                                    (+99) 9999 999 999
                                 </MuiTypography>
                              </ListItemText>
                           </ListItemButton>
                           <Divider />
                           <ListItemButton>
                              <ListItemIcon>
                                 <LocationOnIcon />
                              </ListItemIcon>
                              <Typography variant="subtitle1">Location</Typography>
                              <ListItemText>
                                 <MuiTypography variant="subtitle2" align="right">
                                    Melbourne
                                 </MuiTypography>
                              </ListItemText>
                           </ListItemButton>
                        </List>
                     </Grid>
                     <Grid container direction="row" item>
                        <Grid item xs={4}>
                           <Typography variant="h3" align="center">
                              37
                           </Typography>
                           <Typography variant="subtitle2" align="center">
                              Mails
                           </Typography>
                        </Grid>
                        <Grid item xs={4}>
                           <Typography variant="h3" align="center">
                              2749
                           </Typography>
                           <Typography variant="subtitle2" align="center">
                              Followers
                           </Typography>
                        </Grid>
                        <Grid item xs={4}>
                           <Typography variant="h3" align="center">
                              678
                           </Typography>
                           <Typography variant="subtitle2" align="center">
                              Following
                           </Typography>
                        </Grid>
                     </Grid>
                  </SubCard>
               </Grid>
               <Grid item xs={12} sm={8}>
                  <SubCard title="Personal Details">
                     <Grid container direction="column" spacing={1}>
                        <Grid item>
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
                                          <MuiTypography variant="subtitle1"> Full Name</MuiTypography>
                                       </TableCell>
                                       <TableCell>:</TableCell>
                                       <TableCell>JWT User</TableCell>
                                    </TableRow>
                                    <TableRow>
                                       <TableCell component="th" scope="row">
                                          <MuiTypography variant="subtitle1"> Father Name</MuiTypography>
                                       </TableCell>
                                       <TableCell>:</TableCell>
                                       <TableCell>Mr. Deepen Handgun</TableCell>
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
                                          <MuiTypography variant="subtitle1"> Zip Code</MuiTypography>
                                       </TableCell>
                                       <TableCell>:</TableCell>
                                       <TableCell>12345</TableCell>
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
                                          <MuiTypography variant="subtitle1"> Website</MuiTypography>
                                       </TableCell>
                                       <TableCell>:</TableCell>
                                       <TableCell>http://example.com</TableCell>
                                    </TableRow>
                                 </TableBody>
                              </Table>
                           </TableContainer>
                        </Grid>
                     </Grid>
                  </SubCard>
               </Grid>
            </Grid>
         </Grid>
      </Grid>
   );
};

export default Profile;
