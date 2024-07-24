import { useSelector } from 'react-redux';
import { Grid, FormControl, TextField, Box, Typography, Button } from '@mui/material';

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
            <Grid item xs={12} md={12}>
               <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={6}>
                     <Box p={2}>
                        <Box>
                           <Typography variant="body" gutterBottom>
                              To deactivate your account, first delete its resources. If you are the only owner of any teams, either assign
                              another owner or deactivate the team.
                           </Typography>
                        </Box>
                        <Box sx={{ mt: 2 }}>
                           <Button variant="outlined" color="error" component="label">
                              Deactivate Account
                           </Button>
                        </Box>
                     </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                     <Box p={2}>
                        <Box>
                           <Typography variant="body" gutterBottom>
                              To deactivate your account, first delete its resources. If you are the only owner of any teams, either assign
                              another owner or deactivate the team.
                           </Typography>
                        </Box>
                        <Box sx={{ mt: 2 }}>
                           <Button variant="outlined" color="error" component="label">
                              Deactivate Account
                           </Button>
                        </Box>
                     </Box>
                  </Grid>
               </Grid>
            </Grid>
         </Grid>
      </Grid>
   );
};

export default Security;
