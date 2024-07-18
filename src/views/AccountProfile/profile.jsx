import { useSelector } from 'react-redux';
// material-ui
import Grid from '@mui/material/Grid';
import MuiTypography from '@mui/material/Typography';
import Typography from '@mui/material/Typography';
import Avatar from 'ui-component/extended/Avatar';
import { List, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
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
                  <SubCard title="Sub title">
                     <Grid container direction="column" spacing={1}>
                        <Grid item>
                           <MuiTypography variant="subtitle1" gutterBottom>
                              subtitle1. Lorem ipsum dolor sit connecter adieu siccing eliot. Quos blanditiis tenetur
                           </MuiTypography>
                        </Grid>
                        <Grid item>
                           <MuiTypography variant="subtitle2" gutterBottom>
                              subtitle2. Lorem ipsum dolor sit connecter adieu siccing eliot. Quos blanditiis tenetur
                           </MuiTypography>
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
