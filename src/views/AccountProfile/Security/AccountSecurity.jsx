import { Grid, Box, Typography, Button } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
const AccountSecurity = () => {
   return (
      <Grid item xs={12} md={12}>
         <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
               <SubCard title="Change Password" sx={{ marginBottom: '24px' }}>
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
               </SubCard>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
               <SubCard title="Change Password" sx={{ marginBottom: '24px' }}>
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
               </SubCard>
            </Grid>
         </Grid>
      </Grid>
   );
};

export default AccountSecurity;
