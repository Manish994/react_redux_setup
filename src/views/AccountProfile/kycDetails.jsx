import { useSelector } from 'react-redux';
import { Box, Button, Grid, FormControl, TextField, Autocomplete } from '@mui/material';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import ImgUpload from './imgUpload';

const KycDetails = () => {
   const customization = useSelector((state) => state.customization);

   return (
      <Grid container spacing={customization.gridSpacing}>
         <Grid container item xs={12} md={12}>
            <Grid container spacing={2}>
               <Grid item xs={12} sm={4}>
                  <SubCard title="KYC Picture">
                     <Box
                        sx={{
                           display: 'flex',
                           flexDirection: 'column',
                           alignItems: 'center',
                           textAlign: 'center',
                           cursor: 'pointer'
                        }}
                     >
                        <ImgUpload />
                        <ImgUpload />
                     </Box>
                  </SubCard>
               </Grid>
               <Grid item xs={12} sm={8}>
                  <SubCard title="KYC Information" style={{ marginBottom: '24px' }}>
                     <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                           <FormControl fullWidth>
                              <Autocomplete
                                 options={[]}
                                 getOptionLabel={(option) => option.text}
                                 renderInput={(params) => <TextField {...params} size="small" label="Id Type" color="secondary" />}
                              />
                           </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                           <FormControl fullWidth>
                              <TextField
                                 fullWidth
                                 label="Id Number"
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
                        <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                           <FormControl fullWidth>
                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                 <MuiDatePicker
                                    name="dateOfBirth"
                                    label="Id Issue Date"
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
                        <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                           <FormControl fullWidth>
                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                 <MuiDatePicker
                                    name="dateOfBirth"
                                    label="Id Expire Date"
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
                                 renderInput={(params) => (
                                    <TextField {...params} size="small" label="Issuing Authority" color="secondary" />
                                 )}
                              />
                           </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                           <FormControl fullWidth>
                              <TextField
                                 fullWidth
                                 label="Reference Number"
                                 size="small"
                                 margin="normal"
                                 name="middleName"
                                 type="text"
                                 autoComplete="off"
                              />
                           </FormControl>
                        </Grid>
                     </Grid>
                  </SubCard>
                  <SubCard title="Address Information" style={{ marginBottom: '24px' }}>
                     <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
                           <FormControl fullWidth>
                              <Autocomplete
                                 options={[]}
                                 getOptionLabel={(option) => option.text}
                                 renderInput={(params) => <TextField {...params} size="small" label="Address" color="secondary" />}
                              />
                           </FormControl>
                        </Grid>
                     </Grid>

                     <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={6}>
                           <FormControl fullWidth>
                              <TextField
                                 fullWidth
                                 label="Street Number"
                                 size="small"
                                 margin="normal"
                                 name="middleName"
                                 type="text"
                                 autoComplete="off"
                              />
                           </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                           <FormControl fullWidth>
                              <TextField
                                 fullWidth
                                 label="Unit Number"
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
                        <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                           <FormControl fullWidth>
                              <Autocomplete
                                 options={[]}
                                 getOptionLabel={(option) => option.text}
                                 renderInput={(params) => <TextField {...params} size="small" label="Street Type" color="secondary" />}
                              />
                           </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                           <FormControl fullWidth>
                              <TextField
                                 fullWidth
                                 label="Suburb Name"
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
                              <TextField
                                 fullWidth
                                 label="Post Code"
                                 size="small"
                                 margin="normal"
                                 name="middleName"
                                 type="text"
                                 autoComplete="off"
                              />
                           </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
                           <FormControl fullWidth>
                              <Autocomplete
                                 options={[]}
                                 getOptionLabel={(option) => option.text}
                                 renderInput={(params) => <TextField {...params} size="small" label="State" color="secondary" />}
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
                        Update KYC
                     </Button>
                  </Grid>
               </Grid>
            </Grid>
         </Grid>
      </Grid>
   );
};

export default KycDetails;
