import { useSelector } from 'react-redux';
import {
   Grid,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableRow,
   Paper,
   tableCellClasses,
   Box,
   Typography,
   List,
   ListItem,
   ListItemIcon,
   ListItemText
} from '@mui/material';
import MuiTypography from '@mui/material/Typography';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import TabletIcon from '@mui/icons-material/Tablet';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

// project imports
import SubCard from 'ui-component/cards/SubCard';

const devices = [
   {
      type: 'Cent Desktop',
      address: '4351 Deans Lane, Chelmsford',
      status: 'Current Active',
      lastActive: null,
      icon: <DesktopMacIcon />
   },
   {
      type: 'Imho Tablet',
      address: '4185 Michigan Avenue',
      status: 'Inactive',
      lastActive: '5 days ago',
      icon: <TabletIcon />
   },
   {
      type: 'Albs Mobile',
      address: '3462 Fairfax Drive, Montcalm',
      status: 'Inactive',
      lastActive: '1 month ago',
      icon: <SmartphoneIcon />
   }
];

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
                                    <MuiTypography variant="subtitle1">KYC Status</MuiTypography>
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
            <Grid item xs={12} sm={12}>
               <SubCard title="Advance Settings" sx={{ marginBottom: '24px' }}>
                  <Box>
                     <Typography variant="h6">RECOGNIZED DEVICES</Typography>
                     <List>
                        {devices.map((device, index) => (
                           <ListItem key={index}>
                              <ListItemIcon>{device.icon}</ListItemIcon>
                              <ListItemText primary={device.type} secondary={device.address} />
                              <Box display="flex" alignItems="center">
                                 {device.status === 'Current Active' ? (
                                    <>
                                       <FiberManualRecordIcon color="success" />
                                       <Typography variant="body2" color="textPrimary" sx={{ marginLeft: '8px' }}>
                                          {device.status}
                                       </Typography>
                                    </>
                                 ) : (
                                    <Typography variant="body2" color="textSecondary">
                                       Active {device.lastActive}
                                    </Typography>
                                 )}
                              </Box>
                           </ListItem>
                        ))}
                     </List>
                  </Box>
               </SubCard>
            </Grid>
         </Grid>
      </Grid>
   );
};

export default MyAccount;
