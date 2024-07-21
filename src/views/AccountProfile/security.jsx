import { useSelector } from 'react-redux';
import { Grid, FormControl, TextField, Box, Typography, FormControlLabel, Switch, Button } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';

const Security = () => {
   const customization = useSelector((state) => state.customization);

   return (
      <Grid container spacing={customization.gridSpacing}>
         <Grid container item xs={12} md={12}>
            <Grid item xs={12} sm={12}>
               <SubCard title="Change Password" sx={{ marginBottom: '24px' }}>
                  <Grid container spacing={2}>
                     <Grid item xs={12} sm={4} md={6}>
                        <FormControl fullWidth>
                           <TextField
                              fullWidth
                              label="New Password"
                              size="small"
                              margin="normal"
                              name="firstName"
                              type="text"
                              autoComplete="off"
                           />
                        </FormControl>
                     </Grid>
                     <Grid item xs={12} sm={4} md={6}>
                        <FormControl fullWidth>
                           <TextField
                              fullWidth
                              label="Re-enter New Password"
                              size="small"
                              margin="normal"
                              name="middleName"
                              type="text"
                              autoComplete="off"
                           />
                        </FormControl>
                     </Grid>
                  </Grid>
                  <Grid sx={{ display: 'flex', justifyContent: 'flex-end', mt: '24px' }}>
                     <Button component="label" sx={{ marginRight: 2 }}>
                        Cancel
                     </Button>
                     <Button variant="contained" color="primary" component="label">
                        Change Password
                     </Button>
                  </Grid>
               </SubCard>
            </Grid>
            <Grid item xs={12} sm={12}>
               <SubCard title="Advance Settings">
                  <Box p={2}>
                     <Typography variant="h6" gutterBottom>
                        SECURE BROWSING
                     </Typography>
                     <FormControlLabel control={<Switch />} label="Browsing Securely (https) when it's necessary" />
                     <br></br>
                     <br></br>
                     <Typography variant="h6" gutterBottom>
                        LOGIN NOTIFICATIONS
                     </Typography>
                     <FormControlLabel control={<Switch />} label="Notify when login attempted from other place" />
                     <br></br>
                     <br></br>

                     <Typography variant="h6" gutterBottom>
                        LOGIN APPROVALS
                     </Typography>
                     <FormControlLabel
                        control={<Switch defaultChecked />}
                        label="Approvals is not required when login from unrecognized devices."
                     />
                  </Box>
               </SubCard>
            </Grid>
         </Grid>
      </Grid>
   );
};

export default Security;
