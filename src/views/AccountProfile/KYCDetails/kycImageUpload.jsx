// Material-UI
import { Box, Grid } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import ImageUploader from 'views/utilities/imageUploader';

const KYCImageUpload = () => {
   //renderKYCImageUpload
   return (
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
               <ImageUploader labelName="Front Image" />
               <ImageUploader labelName="Back Image" />
            </Box>
         </SubCard>
      </Grid>
   );
};

export default KYCImageUpload;
