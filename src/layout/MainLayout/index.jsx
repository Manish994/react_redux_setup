import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';

// project imports
import { CssBaseline, styled, useTheme } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';
import Customization from '../Customization';
import Breadcrumbs from 'ui-component/extended/Breadcrumbs';

// Redux-related imports
import { selectCustomization, setMenu } from '@slice/customizationSlice';

// assets
import { IconChevronRight } from '@tabler/icons-react';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' && prop !== 'theme' })(({ theme, open, drawerwidth }) => ({
   ...theme.typography.mainContent,
   borderBottomLeftRadius: 0,
   borderBottomRightRadius: 0,
   transition: theme.transitions.create(
      'margin',
      open
         ? {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen
           }
         : {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen
           }
   ),
   [theme.breakpoints.up('md')]: {
      marginLeft: open ? 0 : -(drawerwidth - 10),
      width: `calc(100% - ${drawerwidth}px)`,
      marginTop: '85px'
   },
   [theme.breakpoints.down('md')]: {
      marginLeft: '20px',
      width: `calc(100% - ${drawerwidth}px)`,
      padding: '16px'
   },
   [theme.breakpoints.down('sm')]: {
      marginLeft: '10px',
      width: `calc(100% - ${drawerwidth}px)`,
      padding: '16px',
      marginRight: '10px'
   }
}));

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
   const theme = useTheme();
   const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
   const customization = useSelector(selectCustomization);
   // Handle left drawer
   const leftDrawerOpened = customization.opened;
   const drawerWidth = customization.drawerWidth;
   const dispatch = useDispatch();
   const handleLeftDrawerToggle = () => {
      dispatch(setMenu({ opened: !leftDrawerOpened }));
   };

   return (
      <Box sx={{ display: 'flex' }}>
         <CssBaseline />
         {/* header */}
         <AppBar
            enableColorOnDark
            position="fixed"
            color="inherit"
            elevation={0}
            sx={{
               //sidebar, header bg color
               bgcolor: theme.palette.background.default,
               transition: leftDrawerOpened ? theme.transitions.create('width') : 'none'
            }}
         >
            <Toolbar>
               <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
            </Toolbar>
         </AppBar>

         {/* drawer */}
         <Sidebar drawerOpen={!matchDownMd ? leftDrawerOpened : !leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />

         {/* main content */}
         <Main theme={theme} open={leftDrawerOpened} drawerwidth={drawerWidth}>
            {/* breadcrumb */}
            <Breadcrumbs separator={IconChevronRight} navigation={navigation} icon title rightAlign />
            <Outlet />
         </Main>
         <Customization />
      </Box>
   );
};

export default MainLayout;
