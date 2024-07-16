import PropTypes from 'prop-types';

// material-ui
import { Typography } from '@mui/material';

// project imports
import NavItem from '../NavItem';
import NavCollapse from '../NavCollapse';

// ==============================|| SIDEBAR MENU LIST GROUP ||============================== //

const NavGroup = ({ item }) => {
   // menu list collapse & items
   const items = item.children?.map((menu) => {
      switch (menu.type) {
         case 'collapse':
            return <NavCollapse key={menu.id} menu={menu} level={1} />;
         case 'item':
            return <NavItem key={menu.id} item={menu} level={1} />;
         default:
            return (
               <Typography key={menu.id} variant="h6" color="error" align="center">
                  Menu Items Error
               </Typography>
            );
      }
   });

   return <div>{items}</div>;
};

NavGroup.propTypes = {
   item: PropTypes.object
};

export default NavGroup;
