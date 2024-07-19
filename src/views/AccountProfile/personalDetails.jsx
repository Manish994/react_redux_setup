import React from 'react';
import { Avatar, Box, Grid, Stack, SvgIcon, Typography } from '@mui/material';
import CameraIcon from '@mui/icons-material/CameraAlt'; // or use any icon from MUI icons

const PersonalDetails = () => {
   return (
      <Grid container>
         <Grid item xs={12}>
            <Box position="relative" display="inline-block" sx={{ cursor: 'pointer' }}>
               <Avatar alt="Avatar 1" src="/assets/default-CgtsF9c7.png" sx={{ width: 120, height: 120 }} />
               <Box
                  sx={{
                     position: 'absolute',
                     top: 0,
                     left: 0,
                     width: '100%',
                     height: '100%',
                     bgcolor: 'rgba(0, 0, 0, 0.5)',
                     borderRadius: '50%',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     opacity: 0,
                     transition: 'opacity 0.3s',
                     '&:hover': {
                        opacity: 1
                     }
                  }}
               >
                  <Stack direction="column" alignItems="center" spacing={0.5}>
                     <SvgIcon component={CameraIcon} sx={{ color: 'rgb(245, 245, 245)', fontSize: '2rem' }} />
                     <Typography variant="caption" sx={{ color: 'rgb(245, 245, 245)' }}>
                        Upload
                     </Typography>
                  </Stack>
               </Box>
               <input type="file" id="change-avatar" style={{ display: 'none' }} />
            </Box>
         </Grid>
      </Grid>
   );
};

export default PersonalDetails;
