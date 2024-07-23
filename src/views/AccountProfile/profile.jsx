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
   tableCellClasses,
   Box,
   LinearProgress,
   Card,
   CardContent
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import Saving from 'views/AccountProfile/Endowment_Plan.webp';
import propertyAndHomeImage from 'views/AccountProfile/Property_Home.webp';

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
               <Grid item xs={12} md={12}>
                  <Box sx={{ p: 2, border: '1px solid #e0e0e0', borderRadius: 4 }}>
                     <Box sx={{ display: 'flex' }}>
                        <Box
                           component="img"
                           sx={{
                              width: 100,
                              height: 100,
                              borderRadius: '50%',
                              objectFit: 'cover'
                           }}
                           alt="Max Smith"
                           src="https://via.placeholder.com/150"
                        />
                        <Box sx={{ ml: 3, mt: 2 }}>
                           <Typography variant="h3" component="div" sx={{ mb: 1 }}>
                              Abinash Dhakal <CheckCircleIcon sx={{ color: '#4caf50', fontSize: 20 }} />
                           </Typography>
                           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                 <EmailIcon fontSize="small" />
                                 <Typography variant="subtitle1" color="textSecondary">
                                    demo@sample.com
                                 </Typography>
                              </Box>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                 <SmartphoneIcon fontSize="small" />
                                 <Typography variant="subtitle1" color="textSecondary">
                                    (+99) 9999 999 999
                                 </Typography>
                              </Box>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                 <LocationOnIcon fontSize="small" />
                                 <Typography variant="subtitle1" color="textSecondary">
                                    Melbourne
                                 </Typography>
                              </Box>
                           </Box>
                        </Box>
                     </Box>
                  </Box>
               </Grid>
               <Grid item xs={12} md={12} style={{}}>
                  <Box
                     sx={{
                        pl: 2,
                        border: '1px solid #e0e0e0',
                        borderRadius: 4,
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%'
                     }}
                  >
                     <Box
                        sx={{
                           overflow: 'auto',
                           padding: '10px',
                           display: 'flex'
                        }}
                     >
                        <Card
                           sx={{
                              width: '250px',
                              backgroundColor: 'rgb(244, 247, 249)',
                              borderLeft: '3px solid rgb(1, 100, 25)',
                              marginRight: '16px',
                              height: '100%',
                              transition: 'transform 0.3s cubic-bezier(.4,0,.2,1), box-shadow 0.3s cubic-bezier(.4,0,.2,1)',
                              cursor: 'pointer',
                              '&:hover': {
                                 transform: 'scale(1.05)'
                              }
                           }}
                        >
                           <CardContent>
                              <Grid
                                 container
                                 sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '100%'
                                 }}
                              >
                                 <Typography variant="body2" color="textSecondary">
                                    Receiver
                                 </Typography>
                                 <Typography variant="h6">4500</Typography>
                                 <Typography sx={{ fontSize: '1rem', color: 'primary' }}>AUD. 1258</Typography>
                                 {/* <img alt="Endowment Saving" src={propertyAndHomeImage} width={50} height={50} className="" /> */}
                              </Grid>
                           </CardContent>
                        </Card>
                     </Box>

                     <Box
                        sx={{
                           overflow: 'auto',
                           padding: '12px',
                           display: 'flex'
                        }}
                     >
                        <Card
                           sx={{
                              width: '250px',
                              backgroundColor: 'rgb(244, 247, 249)',
                              borderLeft: '3px solid rgb(1, 100, 25)',
                              marginRight: '16px',
                              height: '100%',
                              transition: 'transform 0.3s cubic-bezier(.4,0,.2,1), box-shadow 0.3s cubic-bezier(.4,0,.2,1)',
                              cursor: 'pointer',
                              '&:hover': {
                                 transform: 'scale(1.05)'
                              }
                           }}
                        >
                           <CardContent>
                              <Grid
                                 container
                                 sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '100%'
                                 }}
                              >
                                 <Typography variant="body2" color="textSecondary">
                                    Txn Initiated
                                 </Typography>
                                 <Typography variant="h6">4500</Typography>
                                 <Typography sx={{ fontSize: '1rem', color: 'primary' }}>AUD. 1258</Typography>
                                 {/* <img alt="Endowment Saving" src={propertyAndHomeImage} width={50} height={50} className="" /> */}
                              </Grid>
                           </CardContent>
                        </Card>
                     </Box>
                     <Box
                        sx={{
                           overflow: 'auto',
                           padding: '12px',
                           display: 'flex'
                        }}
                     >
                        <Card
                           sx={{
                              width: '250px',
                              borderLeft: '3px solid rgb(1, 100, 25)',
                              backgroundColor: 'rgb(244, 247, 249)',
                              height: '100%',
                              transition: 'transform 0.3s cubic-bezier(.4,0,.2,1), box-shadow 0.3s cubic-bezier(.4,0,.2,1)',
                              cursor: 'pointer',
                              '&:hover': {
                                 transform: 'scale(1.05)'
                              }
                           }}
                        >
                           <CardContent>
                              <Grid
                                 container
                                 sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '100%'
                                 }}
                              >
                                 <Typography variant="body2" color="textSecondary">
                                    Txn Paid
                                 </Typography>
                                 <Typography variant="h6">4500</Typography>
                                 <Typography sx={{ fontSize: '1rem', color: 'primary' }}>AUD. 1258</Typography>
                                 {/* <img alt="Endowment Saving" src={propertyAndHomeImage} width={50} height={50} className="" /> */}
                              </Grid>
                           </CardContent>
                        </Card>
                     </Box>
                     <Box
                        sx={{
                           overflow: 'auto',
                           padding: '12px',
                           display: 'flex'
                        }}
                     >
                        <Card
                           sx={{
                              width: '250px',
                              borderLeft: '3px solid rgb(1, 100, 25)',
                              backgroundColor: 'rgb(244, 247, 249)',
                              marginRight: '16px',
                              height: '100%',
                              transition: 'transform 0.3s cubic-bezier(.4,0,.2,1), box-shadow 0.3s cubic-bezier(.4,0,.2,1)',
                              cursor: 'pointer',
                              '&:hover': {
                                 transform: 'scale(1.05)'
                              }
                           }}
                        >
                           <CardContent>
                              <Grid
                                 container
                                 sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '100%'
                                 }}
                              >
                                 <Typography variant="body2" color="textSecondary">
                                    Txn Failed
                                 </Typography>
                                 <Typography variant="h6">4500</Typography>
                                 <Typography sx={{ fontSize: '1rem', color: 'primary' }}>AUD. 1258</Typography>
                              </Grid>
                           </CardContent>
                        </Card>
                     </Box>
                     <Box
                        sx={{
                           overflow: 'auto',
                           padding: '10px',
                           display: 'flex'
                        }}
                     >
                        <Card
                           sx={{
                              width: '250px',
                              backgroundColor: 'rgb(244, 247, 249)',
                              borderLeft: '3px solid rgb(1, 100, 25)',
                              marginRight: '16px',
                              height: '100%',
                              transition: 'transform 0.3s cubic-bezier(.4,0,.2,1), box-shadow 0.3s cubic-bezier(.4,0,.2,1)',
                              cursor: 'pointer',
                              '&:hover': {
                                 transform: 'scale(1.05)'
                              }
                           }}
                        >
                           <CardContent>
                              <Grid
                                 container
                                 sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '100%'
                                 }}
                              >
                                 <Typography variant="body2" color="textSecondary">
                                    Txn Cancelled
                                 </Typography>
                                 <Typography variant="h6">4500</Typography>
                                 <Typography sx={{ fontSize: '1rem', color: 'primary' }}>AUD. 1258</Typography>
                              </Grid>
                           </CardContent>
                        </Card>
                     </Box>
                  </Box>
               </Grid>

               <Grid item xs={12} sm={4}>
                  <SubCard
                     title={
                        <Grid container spacing={2} alignItems="center">
                           <Grid item>
                              <Avatar alt="User 1" src="/assets/avatar-3-DAakmaVf.png" />
                           </Grid>
                           <Grid item xs>
                              <Typography variant="subtitle1">Abinash Dhakal</Typography>
                              <Typography variant="subtitle2" color="red">
                                 DeActivated
                              </Typography>
                           </Grid>
                           <Grid item>
                              <IconButton size="small">
                                 <CloseIcon sx={{ color: 'red' }} />
                              </IconButton>
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
                              height="100px"
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
               <Grid item xs={12} sm={7.5}>
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
                                 cursor: 'pointer'
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
                                 [`& .MuiTableRow-root:hover`]: {
                                    backgroundColor: 'rgb(237, 231, 246)'
                                 },
                                 cursor: 'pointer',
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
