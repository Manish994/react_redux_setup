// Material-UI
import { Avatar, Box, Button, Grid, Typography } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import User1 from 'assets/images/users/user-round.svg';

const ProfilePictureCard = () => {
   //RENDER PROFILE PICTURE CARD
   return (
      <Grid item xs={12} sm={4}>
         <SubCard title="Profile Picture">
            <Box
               sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  cursor: 'pointer'
               }}
            >
               <Avatar alt="Avatar 1" src={User1} sx={{ width: 80, height: 80, mb: 2 }} />
               <Typography variant="body2" gutterBottom>
                  Upload/Change Your Profile Image
               </Typography>
               <Button variant="contained" color="primary" component="label">
                  Upload Avatar
                  <input type="file" id="change-avatar" hidden />
               </Button>
            </Box>
         </SubCard>
      </Grid>
   );
};

export default ProfilePictureCard;
