// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill, IconUserCheck } from '@tabler/icons-react';

// constant
const icons = {
   IconTypography,
   IconPalette,
   IconShadow,
   IconWindmill,
   IconUserCheck
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
   id: 'utilities',
   title: 'Utilities',
   type: 'group',
   children: [
      {
         id: 'util-accountprofile',
         title: 'Account Profile',
         type: 'item',
         url: '/utils/account-profile',
         icon: icons.IconUserCheck,
         breadcrumbs: true
      },
      {
         id: 'util-typography',
         title: 'Typography',
         type: 'item',
         url: '/utils/util-typography',
         icon: icons.IconTypography,
         breadcrumbs: true
      },
      {
         id: 'util-color',
         title: 'Color',
         type: 'item',
         url: '/utils/util-color',
         icon: icons.IconPalette,
         breadcrumbs: true
      },
      {
         id: 'util-shadow',
         title: 'Shadow',
         type: 'item',
         url: '/utils/util-shadow',
         icon: icons.IconShadow,
         breadcrumbs: true
      }
   ]
};

export default utilities;
