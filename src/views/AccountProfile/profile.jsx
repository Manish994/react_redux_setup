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

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

// project imports
import SubCard from 'ui-component/cards/SubCard';

const itemData = [
   {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      author: '@bkristastucchio',
      rows: 2,
      cols: 2,
      featured: true
   },
   {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      author: '@rollelflex_graphy726'
   }
];
const Profile = () => {
   const customization = useSelector((state) => state.customization);
   return (
      <Grid container spacing={customization.gridSpacing}>
         <Grid container item xs={12} md={12}>
            <Grid container spacing={2}>
               <Grid item xs={12} sm={5}>
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
                     sx={{ marginBottom: '24px' }}
                  >
                     <Grid container direction="column" item sx={{ marginBottom: '24px' }}>
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
                  </SubCard>
                  <SubCard title="Transaction Details" sx={{ marginBottom: '24px' }}>
                     <Grid container direction="row" item>
                        <Grid item xs={3}>
                           <Typography variant="h3" align="center">
                              37
                           </Typography>
                           <Typography variant="subtitle2" align="center">
                              INITIATED
                           </Typography>
                        </Grid>
                        <Grid item xs={3}>
                           <Typography variant="h3" align="center">
                              10
                           </Typography>
                           <Typography variant="subtitle2" align="center">
                              PAID
                           </Typography>
                        </Grid>
                        <Grid item xs={3}>
                           <Typography variant="h3" align="center">
                              20
                           </Typography>
                           <Typography variant="subtitle2" align="center">
                              FAILED
                           </Typography>
                        </Grid>
                        <Grid item xs={3}>
                           <Typography variant="h3" align="center">
                              678
                           </Typography>
                           <Typography variant="subtitle2" align="center">
                              CANCELLED
                           </Typography>
                        </Grid>
                     </Grid>
                  </SubCard>
                  <SubCard title="KYC Image">
                     <ImageList cols={1}>
                        <ImageListItem key={itemData[0].img}>
                           <img
                              srcSet={`${itemData[0].img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                              src={`${itemData[0].img}?w=248&fit=crop&auto=format`}
                              alt={itemData[0].title}
                              loading="lazy"
                           />
                           <ImageListItemBar
                              title={itemData[0].title}
                              subtitle={itemData[0].author}
                              actionIcon={
                                 <IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }} aria-label={`info about ${itemData[0].title}`}>
                                    <InfoIcon />
                                 </IconButton>
                              }
                           />
                        </ImageListItem>
                     </ImageList>
                     <ImageList cols={1}>
                        <ImageListItem key={itemData[1].img}>
                           <img
                              srcSet={`${itemData[1].img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                              src={`${itemData[1].img}?w=248&fit=crop&auto=format`}
                              alt={itemData[1].title}
                              loading="lazy"
                           />
                           <ImageListItemBar
                              title={itemData[1].title}
                              subtitle={itemData[1].author}
                              actionIcon={
                                 <IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }} aria-label={`info about ${itemData[1].title}`}>
                                    <InfoIcon />
                                 </IconButton>
                              }
                           />
                        </ImageListItem>
                     </ImageList>
                  </SubCard>
               </Grid>
               <Grid item xs={12} sm={7}>
                  <SubCard title="Personal Information" sx={{ marginBottom: '24px' }}>
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
                  <SubCard title="KYC Details">
                     <Grid container direction="column" spacing={1}>
                        <TableContainer component={Paper}>
                           <Table
                              size="small"
                              sx={{
                                 [`& .${tableCellClasses.root}`]: {
                                    borderBottom: 'none'
                                 },
                                 width: '100%'
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
            </Grid>
         </Grid>
      </Grid>
   );
};

export default Profile;
