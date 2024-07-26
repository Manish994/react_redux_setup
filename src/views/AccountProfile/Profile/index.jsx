// React-Redux
import { useSelector } from 'react-redux';

// Material-UI
import Grid from '@mui/material/Grid';

// project imports
import UserProfileCard from 'views/AccountProfile/Profile/userProfileCard';
import UserProfileTable from 'views/AccountProfile/Profile/userProfileTable';
import KYCImageCard from 'views/AccountProfile/Profile/kycImageCard';

const Profile = () => {
   /* ╔════════════════════════════════════════════════════════╗
      ║                      FORM SETUP                        ║
      ╚════════════════════════════════════════════════════════╝ */
   const customization = useSelector((state) => state.customization);
   return (
      <Grid container spacing={customization.gridSpacing}>
         <Grid container item xs={12} md={12}>
            <Grid container spacing={2}>
               <UserProfileCard />
               <UserProfileTable />
               <KYCImageCard />
            </Grid>
         </Grid>
      </Grid>
   );
};

export default Profile;
