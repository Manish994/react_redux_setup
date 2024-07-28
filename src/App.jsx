import { useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import router from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';

// Redux-related imports
import { selectCustomization } from '@slice/customizationSlice';

//toast container
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ==============================|| APP ||============================== //

const App = () => {
   const customization = useSelector(selectCustomization);

   return (
      <StyledEngineProvider injectFirst>
         <ThemeProvider theme={themes(customization)}>
            <CssBaseline />
            <NavigationScroll>
               <RouterProvider router={router} />
               <ToastContainer
                  position="bottom-right"
                  autoClose={1000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="colored"
               />
            </NavigationScroll>
         </ThemeProvider>
      </StyledEngineProvider>
   );
};

export default App;
