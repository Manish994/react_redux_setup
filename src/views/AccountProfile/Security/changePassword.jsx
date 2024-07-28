import { Grid, FormControl, TextField, Button } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';

function ChangePassword() {
   return (
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
   );
}

export default ChangePassword;
