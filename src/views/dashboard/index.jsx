import { useEffect } from 'react';
import { useSelector } from 'react-redux';

// material-ui
import Grid from '@mui/material/Grid';

// Redux-related imports
import { selectCustomization } from '@slice/customizationSlice';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
   useEffect(() => {
      debugger;
      const a = process.env;
   });
   const customization = useSelector(selectCustomization);
   return (
      <Grid container spacing={customization.gridSpacing}>
         <Grid item xs={12}>
            <Grid container spacing={customization.gridSpacing}>
               <Grid item lg={4} md={6} sm={6} xs={12}>
                  <p>Hello</p>
               </Grid>
               <Grid item lg={4} md={6} sm={6} xs={12}>
                  <p>Hello</p>
               </Grid>
               <Grid item lg={4} md={12} sm={12} xs={12}>
                  <Grid container spacing={customization.gridSpacing}>
                     <Grid item sm={6} xs={12} md={6} lg={12}>
                        <p>Hello</p>
                     </Grid>
                     <Grid item sm={6} xs={12} md={6} lg={12}>
                        <p>Hello</p>
                     </Grid>
                  </Grid>
               </Grid>
            </Grid>
         </Grid>
         <Grid item xs={12}>
            <Grid container spacing={customization.gridSpacing}>
               <Grid item xs={12} md={8}>
                  <p>Hello</p>
               </Grid>
               <Grid item xs={12} md={4}>
                  <p>Hello</p>
               </Grid>
            </Grid>
         </Grid>
      </Grid>
   );
};

export default Dashboard;
