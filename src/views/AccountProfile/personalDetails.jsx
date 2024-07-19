import React from 'react';
import { Avatar, Box, FormControl, Grid, Stack, SvgIcon, TextField, Typography } from '@mui/material';
import CameraIcon from '@mui/icons-material/CameraAlt'; // or use any icon from MUI icons

const PersonalDetails = () => {
   return (
      <Grid container>
         <Grid item xs={12}>
            <Stack>
               <label htmlFor="change-avatar">
                  <Stack direction="row" alignItems="center">
                     <Avatar alt="Avatar 1" src="/assets/default-CgtsF9c7.png" sx={{ width: 56, height: 56 }} />
                     <Box ml={2}>
                        <Stack direction="row" alignItems="center">
                           <SvgIcon component={CameraIcon} sx={{ color: 'rgb(245, 245, 245)', fontSize: '1.5rem' }} />
                           <Typography variant="caption" ml={1}>
                              Upload
                           </Typography>
                        </Stack>
                     </Box>
                  </Stack>
               </label>
               <FormControl>
                  <TextField id="change-avatar" type="file" variant="outlined" placeholder="Outlined" sx={{ display: 'none' }} />
               </FormControl>
            </Stack>
         </Grid>
      </Grid>
   );
};

export default PersonalDetails;
