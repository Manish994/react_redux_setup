import React from 'react';

// Material-UI
import { Box, useMediaQuery, Grid, Typography, Card, CardContent } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmailIcon from '@mui/icons-material/Email';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const UserProfileCard = () => {
   /* ╔════════════════════════════════════════════════════════╗
      ║                      FORM SETUP                        ║
      ╚════════════════════════════════════════════════════════╝ */
   const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

   /* ╔════════════════════════════════════════════════════════╗
      ║                 RENDER PROFILE CARD                    ║
      ╚════════════════════════════════════════════════════════╝ */
   const RenderProfileCard = () => (
      <Grid item xs={12} md={12}>
         <Card sx={{ p: 2, border: '1px solid #e0e0e0', borderRadius: 4 }}>
            <Grid container spacing={2} alignItems="center" justifyContent={isMobile ? 'center' : 'flex-start'}>
               <Grid item xs={12} sm={2} md={1.2} sx={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-start' }}>
                  <Box
                     component="img"
                     sx={{
                        width: isMobile ? '50%' : 100,
                        height: 100,
                        borderRadius: '50%',
                        objectFit: 'cover'
                     }}
                     alt="Max Smith"
                     src="https://via.placeholder.com/150"
                  />
               </Grid>
               <Grid item xs={12} sm={8}>
                  <Box sx={{ textAlign: isMobile ? 'center' : 'left' }}>
                     <Typography variant="h3" component="div" sx={{ mb: 1, color: 'rgb(36, 143, 206)' }}>
                        Abinash Dhakal <CheckCircleIcon sx={{ color: '#4caf50', fontSize: 20 }} />
                     </Typography>
                     <Box
                        sx={{
                           display: 'flex',
                           flexDirection: isMobile ? 'column' : 'row',
                           gap: 1,
                           alignItems: isMobile ? 'center' : 'center',
                           justifyContent: isMobile ? 'center' : 'flex-start'
                        }}
                     >
                        <Box
                           sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1,
                              justifyContent: isMobile ? 'center' : 'flex-start',
                              whiteSpace: 'nowrap'
                           }}
                        >
                           <EmailIcon fontSize="small" />
                           <Typography variant="subtitle1" color="textSecondary">
                              bikashjhendi@sample.com
                           </Typography>
                        </Box>
                        <Box
                           sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1,
                              justifyContent: isMobile ? 'center' : 'flex-start'
                           }}
                        >
                           <SmartphoneIcon fontSize="small" />
                           <Typography variant="subtitle1" color="textSecondary">
                              123456789012
                           </Typography>
                        </Box>
                        <Box
                           sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1,
                              justifyContent: isMobile ? 'center' : 'flex-start'
                           }}
                        >
                           <LocationOnIcon fontSize="small" />
                           <Typography variant="subtitle1" color="textSecondary">
                              Melbourne
                           </Typography>
                        </Box>
                     </Box>
                  </Box>
               </Grid>
            </Grid>
         </Card>
      </Grid>
   );

   /* ╔════════════════════════════════════════════════════════╗
      ║                 RENDER TRANSACTION CARDS               ║
      ╚════════════════════════════════════════════════════════╝ */
   const RenderTransactionCards = () => {
      return (
         <Grid item xs={12} md={12}>
            <Box
               sx={{
                  display: 'flex',
                  flexDirection: isMobile ? 'row' : 'row', // Change flex direction based on view
                  alignItems: 'center',
                  width: '100%',
                  overflow: 'auto',
                  whiteSpace: 'nowrap',
                  '&::-webkit-scrollbar': {
                     width: '7px', // Change width for vertical scrollbar
                     height: '7px' // Change height for horizontal scrollbar
                  },
                  '&::-webkit-scrollbar-thumb': {
                     backgroundColor: '#888', // Change color of scrollbar thumb
                     borderRadius: '10px' // Round the corners of scrollbar thumb
                  },
                  '&::-webkit-scrollbar-thumb:hover': {
                     backgroundColor: '#555' // Change color of scrollbar thumb on hover
                  }
               }}
            >
               <Grid item xs={10} sm={5} md={3}>
                  <Box
                     sx={{
                        overflow: 'auto',
                        padding: '10px',
                        display: 'flex'
                     }}
                  >
                     <Card
                        sx={{
                           width: '250px',
                           boxShadow: '1',
                           borderLeft: '3px solid rgb(1, 100, 25)',
                           height: '100%',
                           transition: 'transform 0.3s cubic-bezier(.4,0,.2,1), box-shadow 0.3s cubic-bezier(.4,0,.2,1)',
                           cursor: 'pointer',
                           '&:hover': {
                              transform: 'scale(1.05)'
                           }
                        }}
                     >
                        <CardContent>
                           <Grid
                              container
                              sx={{
                                 display: 'flex',
                                 flexDirection: 'row',
                                 justifyContent: 'space-between',
                                 height: '100%',
                                 mb: 1
                              }}
                           >
                              <Typography variant="body2" color="textSecondary">
                                 Receiver
                              </Typography>
                              <Typography variant="h6">4500</Typography>
                           </Grid>
                           <Grid>
                              <br></br>
                              {/* <img alt="Endowment Saving" src={propertyAndHomeImage} width={50} height={50} className="" /> */}
                           </Grid>
                        </CardContent>
                     </Card>
                  </Box>
               </Grid>
               <Grid item xs={10} sm={5} md={3}>
                  <Box
                     sx={{
                        overflow: 'auto',
                        padding: '10px',
                        display: 'flex'
                     }}
                  >
                     <Card
                        sx={{
                           width: '250px',
                           boxShadow: '1',
                           borderLeft: '3px solid rgb(1, 100, 25)',
                           height: '100%',
                           transition: 'transform 0.3s cubic-bezier(.4,0,.2,1), box-shadow 0.3s cubic-bezier(.4,0,.2,1)',
                           cursor: 'pointer',
                           '&:hover': {
                              transform: 'scale(1.05)'
                           }
                        }}
                     >
                        <CardContent>
                           <Grid
                              container
                              sx={{
                                 display: 'flex',
                                 flexDirection: 'row',
                                 justifyContent: 'space-between',
                                 height: '100%',
                                 mb: 1
                              }}
                           >
                              <Typography variant="body2" color="textSecondary">
                                 Txn Initiated
                              </Typography>
                              <Typography variant="h6">4500</Typography>
                           </Grid>
                           <Grid>
                              <Typography sx={{ fontSize: '1rem', color: 'rgb(2, 202, 52)' }}>AUD. 1258</Typography>
                              {/* <img alt="Endowment Saving" src={propertyAndHomeImage} width={50} height={50} className="" /> */}
                           </Grid>
                        </CardContent>
                     </Card>
                  </Box>
               </Grid>
               <Grid item xs={10} sm={5} md={3}>
                  <Box
                     sx={{
                        overflow: 'auto',
                        padding: '10px',
                        display: 'flex'
                     }}
                  >
                     <Card
                        sx={{
                           width: '250px',
                           boxShadow: '1',
                           borderLeft: '3px solid rgb(1, 100, 25)',
                           height: '100%',
                           transition: 'transform 0.3s cubic-bezier(.4,0,.2,1), box-shadow 0.3s cubic-bezier(.4,0,.2,1)',
                           cursor: 'pointer',
                           '&:hover': {
                              transform: 'scale(1.05)'
                           }
                        }}
                     >
                        <CardContent>
                           <Grid
                              container
                              sx={{
                                 display: 'flex',
                                 flexDirection: 'row',
                                 justifyContent: 'space-between',
                                 height: '100%',
                                 mb: 1
                              }}
                           >
                              <Typography variant="body2" color="textSecondary">
                                 Txn Paid
                              </Typography>
                              <Typography variant="h6">4500</Typography>
                           </Grid>
                           <Grid>
                              <Typography sx={{ fontSize: '1rem', color: 'rgb(2, 202, 52)' }}>AUD. 1258</Typography>
                              {/* <img alt="Endowment Saving" src={propertyAndHomeImage} width={50} height={50} className="" /> */}
                           </Grid>
                        </CardContent>
                     </Card>
                  </Box>
               </Grid>
               <Grid item xs={10} sm={5} md={3}>
                  <Box
                     sx={{
                        overflow: 'auto',
                        padding: '10px',
                        display: 'flex'
                     }}
                  >
                     <Card
                        sx={{
                           width: '250px',
                           boxShadow: '1',
                           borderLeft: '3px solid rgb(1, 100, 25)',
                           height: '100%',
                           transition: 'transform 0.3s cubic-bezier(.4,0,.2,1), box-shadow 0.3s cubic-bezier(.4,0,.2,1)',
                           cursor: 'pointer',
                           '&:hover': {
                              transform: 'scale(1.05)'
                           }
                        }}
                     >
                        <CardContent>
                           <Grid
                              container
                              sx={{
                                 display: 'flex',
                                 flexDirection: 'row',
                                 justifyContent: 'space-between',
                                 height: '100%',
                                 mb: 1
                              }}
                           >
                              <Typography variant="body2" color="textSecondary">
                                 Txn Failed
                              </Typography>
                              <Typography variant="h6">4500</Typography>
                           </Grid>
                           <Grid>
                              <Typography sx={{ fontSize: '1rem', color: 'rgb(2, 202, 52)' }}>AUD. 1258</Typography>
                           </Grid>
                        </CardContent>
                     </Card>
                  </Box>
               </Grid>
               <Grid item xs={10} sm={5} md={3}>
                  <Box
                     sx={{
                        overflow: 'auto',
                        padding: '10px',
                        display: 'flex',
                        mb: 1
                     }}
                  >
                     <Card
                        sx={{
                           width: '250px',
                           boxShadow: '1',
                           borderLeft: '3px solid rgb(1, 100, 25)',
                           height: '100%',
                           transition: 'transform 0.3s cubic-bezier(.4,0,.2,1), box-shadow 0.3s cubic-bezier(.4,0,.2,1)',
                           cursor: 'pointer',
                           '&:hover': {
                              transform: 'scale(1.05)'
                           }
                        }}
                     >
                        <CardContent>
                           <Grid
                              container
                              sx={{
                                 display: 'flex',
                                 flexDirection: 'row',
                                 justifyContent: 'space-between',
                                 height: '100%',
                                 mb: 1
                              }}
                           >
                              <Typography variant="body2" color="textSecondary">
                                 Txn Cancelled
                              </Typography>
                              <Typography variant="h6">4500</Typography>
                           </Grid>
                           <Grid>
                              <Typography sx={{ fontSize: '1rem', color: 'rgb(2, 202, 52)' }}>AUD. 1258</Typography>
                           </Grid>
                        </CardContent>
                     </Card>
                  </Box>
               </Grid>
               <Grid item xs={10} sm={5} md={3}>
                  <Box
                     sx={{
                        overflow: 'auto',
                        padding: '10px',
                        display: 'flex'
                     }}
                  >
                     <Card
                        sx={{
                           width: '250px',
                           boxShadow: '1',
                           borderLeft: '3px solid rgb(1, 100, 25)',
                           height: '100%',
                           transition: 'transform 0.3s cubic-bezier(.4,0,.2,1), box-shadow 0.3s cubic-bezier(.4,0,.2,1)',
                           cursor: 'pointer',
                           '&:hover': {
                              transform: 'scale(1.05)'
                           }
                        }}
                     >
                        <CardContent>
                           <Grid
                              container
                              sx={{
                                 display: 'flex',
                                 flexDirection: 'row',
                                 justifyContent: 'space-between',
                                 height: '100%',
                                 mb: 1
                              }}
                           >
                              <Typography variant="body2" color="textSecondary">
                                 Compliance
                              </Typography>
                              <Typography variant="h6">4500</Typography>
                           </Grid>
                           <Grid>
                              <Typography sx={{ fontSize: '1rem', color: 'rgb(2, 202, 52)' }}>AUD. 1258</Typography>
                           </Grid>
                        </CardContent>
                     </Card>
                  </Box>
               </Grid>
            </Box>
         </Grid>
      );
   };

   return (
      <React.Fragment>
         <RenderProfileCard />
         <RenderTransactionCards />
      </React.Fragment>
   );
};

export default UserProfileCard;
