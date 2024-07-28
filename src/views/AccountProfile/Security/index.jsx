import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';

// project imports
import AccountSecurity from './AccountSecurity';
import ChangePassword from './changePassword';

const Security = () => {
   const customization = useSelector((state) => state.customization);

   return (
      <Grid container spacing={customization.gridSpacing}>
         <Grid container item xs={12} md={12}>
            <AccountSecurity />
            <ChangePassword />
         </Grid>
      </Grid>
   );
};

export default Security;
