import PropTypes from 'prop-types';
import { forwardRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

// Redux-related imports
import { menuOpen, setMenu } from '@slice/customizationSlice';

// assets
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

// Redux-related imports
import { selectCustomization } from '@slice/customizationSlice';

// ==============================|| SIDEBAR MENU LIST ITEMS ||============================== //

const NavItem = ({ item, level }) => {
   const theme = useTheme();
   const dispatch = useDispatch();
   const { pathname } = useLocation();
   const customization = useSelector(selectCustomization);
   const matchesSM = useMediaQuery(theme.breakpoints.down('lg'));

   const Icon = item.icon;
   const itemIcon = item?.icon ? (
      <Icon stroke={1.5} size="1.3rem" />
   ) : (
      <FiberManualRecordIcon
         sx={{
            width: customization.isOpen.findIndex((id) => id === item?.id) > -1 ? 8 : 6,
            height: customization.isOpen.findIndex((id) => id === item?.id) > -1 ? 8 : 6
         }}
         fontSize={level > 0 ? 'inherit' : 'medium'}
      />
   );

   let itemTarget = '_self';
   if (item.target) {
      itemTarget = '_blank';
   }

   let listItemProps = {
      component: forwardRef((props, ref) => <Link ref={ref} {...props} to={item.url} target={itemTarget} />)
   };
   if (item?.external) {
      listItemProps = { component: 'a', href: item.url, target: itemTarget };
   }

   const itemHandler = (id) => {
      dispatch(menuOpen({ id: id }));
      if (matchesSM) dispatch(setMenu({ opened: false }));
   };

   // active menu item on page load
   useEffect(() => {
      const currentIndex = document.location.pathname
         .toString()
         .split('/')
         .findIndex((id) => id === item.id);
      if (currentIndex > -1) {
         dispatch(menuOpen({ id: item.id }));
      }
      // eslint-disable-next-line
   }, [pathname]);

   return (
      <ListItemButton
         {...listItemProps}
         disabled={item.disabled}
         sx={{
            borderRadius: `${customization.borderRadius}px`,
            mb: 0.5,
            alignItems: 'flex-start',
            backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
            py: level > 1 ? 1 : 1,
            pl: `${level * 24}px`
         }}
         selected={customization.isOpen.findIndex((id) => id === item.id) > -1}
         onClick={() => itemHandler(item.id)}
      >
         <ListItemIcon sx={{ my: 'auto', minWidth: !item?.icon ? 18 : 36 }}>{itemIcon}</ListItemIcon>
         <ListItemText
            primary={
               <Typography variant={customization.isOpen.findIndex((id) => id === item.id) > -1 ? 'h5' : 'body1'} color="inherit">
                  {item.title}
               </Typography>
            }
         />
      </ListItemButton>
   );
};

NavItem.propTypes = {
   item: PropTypes.object,
   level: PropTypes.number
};

export default NavItem;
