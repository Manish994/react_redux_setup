// Material-UI
import { Button, Grid, FormControl, TextField, Autocomplete } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers';

// project imports
import SubCard from 'ui-component/cards/SubCard';

const UserProfileForm = () => {
   return (
      <Grid item xs={12} sm={8}>
         <SubCard title="Personal Information" style={{ marginBottom: '24px' }}>
            <Grid container spacing={2}>
               <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                     <TextField fullWidth label="First Name" size="small" margin="normal" name="firstName" type="text" autoComplete="off" />
                  </FormControl>
               </Grid>
               <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                     <TextField
                        fullWidth
                        label="Middle Name"
                        size="small"
                        margin="normal"
                        name="middleName"
                        type="text"
                        autoComplete="off"
                     />
                  </FormControl>
               </Grid>
            </Grid>
            <Grid container spacing={2}>
               <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                     <TextField fullWidth label="Last Name" size="small" margin="normal" name="firstName" type="text" autoComplete="off" />
                  </FormControl>
               </Grid>
               <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                     <TextField fullWidth label="Nick Name" size="small" margin="normal" name="middleName" type="text" autoComplete="off" />
                  </FormControl>
               </Grid>
            </Grid>
            <Grid container spacing={2}>
               <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                  <FormControl fullWidth>
                     <Autocomplete
                        options={[]}
                        getOptionLabel={(option) => option.text}
                        renderInput={(params) => <TextField {...params} size="small" label="Gender" color="secondary" />}
                     />
                  </FormControl>
               </Grid>
               <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                  <FormControl fullWidth>
                     <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <MuiDatePicker
                           name="dateOfBirth"
                           label="Date Of Birth"
                           slotProps={{
                              textField: {
                                 InputProps: {
                                    size: 'small'
                                    //sx: { fontSize: 10 },
                                 }
                              }
                           }}
                        />
                     </LocalizationProvider>
                  </FormControl>
               </Grid>
            </Grid>
            <Grid container spacing={2}>
               <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                  <FormControl fullWidth>
                     <Autocomplete
                        options={[]}
                        getOptionLabel={(option) => option.text}
                        renderInput={(params) => <TextField {...params} size="small" label="Occupation" color="secondary" />}
                     />
                  </FormControl>
               </Grid>
            </Grid>
         </SubCard>
         <SubCard title="Contact Information" style={{ marginBottom: '24px' }}>
            <Grid container spacing={2}>
               <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                     <TextField
                        fullWidth
                        label="Phone Number"
                        size="small"
                        margin="normal"
                        name="firstName"
                        type="text"
                        autoComplete="off"
                     />
                  </FormControl>
               </Grid>
               <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                     <TextField fullWidth label="Email" size="small" margin="normal" name="middleName" type="text" autoComplete="off" />
                  </FormControl>
               </Grid>
            </Grid>
         </SubCard>
         <SubCard title="Nationality Information" style={{ marginBottom: '24px' }}>
            <Grid container spacing={2}>
               <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                  <FormControl fullWidth>
                     <Autocomplete
                        options={[]}
                        getOptionLabel={(option) => option.text}
                        renderInput={(params) => <TextField {...params} size="small" label="Country" color="secondary" />}
                     />
                  </FormControl>
               </Grid>
               <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                  <FormControl fullWidth>
                     <Autocomplete
                        options={[]}
                        getOptionLabel={(option) => option.text}
                        renderInput={(params) => <TextField {...params} size="small" label="Nationality" color="secondary" />}
                     />
                  </FormControl>
               </Grid>
            </Grid>
         </SubCard>
         <Grid sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button component="label" sx={{ marginRight: 2 }}>
               Cancel
            </Button>
            <Button variant="contained" color="primary" component="label">
               Update Profile
            </Button>
         </Grid>
      </Grid>
   );
};

export default UserProfileForm;
