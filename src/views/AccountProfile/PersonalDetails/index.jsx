// Material-UI
import Grid from '@mui/material/Grid';

// React-Redux
import { useSelector } from 'react-redux';

// project imports
import ProfilePictureCard from 'views/AccountProfile/PersonalDetails/profilePictureCard';
import UserProfileForm from 'views/AccountProfile/PersonalDetails/userProfileForm';

const PersonalDetails = () => {
   /* ╔════════════════════════════════════════════════════════╗
      ║                      FORM SETUP                        ║
      ╚════════════════════════════════════════════════════════╝ */
   const customization = useSelector((state) => state.customization);
   return (
      <Grid container item spacing={customization.gridSpacing}>
         <ProfilePictureCard />
         <UserProfileForm />
      </Grid>
   );
};

export default PersonalDetails;
