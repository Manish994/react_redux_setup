import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Button, Grid, InputLabel, CardContent, Card, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const MuiImageUpload = () => {
   const [open, setOpen] = React.useState(false);
   let imageFile = '';

   const imagePreview =
      'iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEX09PTMzMzJycnPz8/d3d3V1dXi4uLo6Ojw8PDx8fH39/ft7e3Y2NjQ0NDp6enb29uHE20LAAACaklEQVR4nO3b6W6CQBhGYUTWD9T7v9uylLIN6jCk8Cbn+deEGo6DMOAYRQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIJyFiuzshLesStJAdVZdufEV38LFydkZm6w+IrBJrK86itkxgU1ifnaKmz363QvUvsbjmoNYdjuXPPMQz6R7lfLsGKeq3bd76LvfHwnFIXt0tOKYwjuF51kVtjMUbzqFVmR1/cpK30idwv7qH98yz0SVwvI+XP19JygqhY9xehMnXokihfl0/hZ77a5I4WM2zXz5DKJI4XwKvjHLNGeGRmE1L7w7N7fKeRLSKCy+KGwCnedZjcJofruXuo7SbpwdiRqFlk4D42y9rf0eyOtEjcL5BzFeb2rV5oRApNAmj6QcjyRs8g4sE0UKJ4nxemJq8yGeJ6oURpY/uic26frppy0uJvNEmcI2JM/yovlz8cxlGbhIFCrcsA6cX0/kC52Bt3hMlC90Bk5HUbzQPYL9KA6b6BXmk8/YZuCYqFdYj/f47wL/EtUKrR6/LXsfOCSKFbaBQ+KnwGa79sqpVWjp7x1Ec6B+DhQsHAK7xM+BeoVjYLPzr499eoXTwO+IFfoHihXuWbWgVVh792kV7lt3IlRoe0ZQqvCLax+FZ8c4UUghheebFu6jU1gk++gU7l3t3f2rRmGAyxcGr329cuEh60stunBh2Z3y6yxM/wX52S1u/bf3Ryzzdq9tuIDnYWv1q7NTNlhy0O8t/Nb6/SfLbnHoYbpjSep/sjLfOZ0ZXfTXJKPgH69deAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABDyA0uAKIxQw0bjAAAAAElFTkSuQmCC';

   const UploadImageShow = () => {
      return (
         <img
            src={imageFile ? `data:image/jpeg;base64,${imageFile}` : `data:image/jpeg;base64,${imagePreview}`}
            alt="User Profile"
            style={{ width: '100%', cursor: 'pointer' }}
         />
      );
   };

   const customization = useSelector((state) => state.customization);
   return (
      <Grid container spacing={customization.gridSpacing} justifyContent="center" alignItems="center">
         <Grid item>
            <Card
               sx={{
                  width: '300px',
                  height: '100%'
               }}
            >
               <CardContent>
                  <Grid
                     container
                     sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%'
                     }}
                  >
                     <Box>
                        <img
                           src={imageFile ? `data:image/jpeg;base64,${imageFile}` : `data:image/jpeg;base64,${imagePreview}`}
                           alt="User Profile"
                           style={{ width: '100%', cursor: 'pointer' }}
                        />
                     </Box>
                     <Box>
                        <InputLabel htmlFor="file-upload" style={{ display: 'block' }}>
                           <Box
                              sx={{
                                 bgcolor: 'rgb(43, 144, 208)',
                                 height: '70px',
                                 cursor: 'pointer',
                                 display: 'flex',
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 '&:hover': {
                                    bgcolor: 'rgb(127, 177, 179)'
                                 }
                              }}
                           >
                              <AddIcon sx={{ fontSize: 30, color: 'white' }} />
                              <Typography color="white">Front Image</Typography>
                           </Box>
                        </InputLabel>
                        <input id="file-upload" type="file" style={{ display: 'none' }} />
                     </Box>
                  </Grid>
               </CardContent>
            </Card>
         </Grid>
      </Grid>
   );
};

export default MuiImageUpload;
