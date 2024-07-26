// React-Redux
import { useSelector } from 'react-redux';

// Material-UI
import Grid from '@mui/material/Grid';

// project imports
import KYCForm from './kycForm';
import KYCImageUpload from './kycImageUpload';

const KycDetails = () => {
   /* ╔════════════════════════════════════════════════════════╗
      ║                      FORM SETUP                        ║
      ╚════════════════════════════════════════════════════════╝ */
   const customization = useSelector((state) => state.customization);
   return (
      <Grid container spacing={customization.gridSpacing}>
         <Grid container item xs={12} md={12}>
            <Grid container spacing={2}>
               <KYCImageUpload />
               <KYCForm />
            </Grid>
         </Grid>
      </Grid>
   );
};

export default KycDetails;
