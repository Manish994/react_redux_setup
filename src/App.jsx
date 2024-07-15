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

// ==============================|| APP ||============================== //

const App = () => {
   const customization = useSelector(selectCustomization);

   return (
      <StyledEngineProvider injectFirst>
         <ThemeProvider theme={themes(customization)}>
            <CssBaseline />
            <NavigationScroll>
               <RouterProvider router={router} />
            </NavigationScroll>
         </ThemeProvider>
      </StyledEngineProvider>
   );
};

export default App;
