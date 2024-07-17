import { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Tabs, Tab, Divider } from '@mui/material';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import LibraryBooksTwoToneIcon from '@mui/icons-material/LibraryBooksTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';

const StepperProfile = () => {
   const [value, setValue] = useState(0);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   return (
      <MainCard>
         <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            variant="scrollable"
            scrollButtons="auto"
            indicatorColor="primary"
            textColor="primary"
         >
            <Tab
               icon={<AccountCircleTwoToneIcon />}
               iconPosition="start"
               label="Profile"
               sx={{ color: 'rgb(54,65,82)', fontSize: '0.875rem', fontWeight: '500', lineHeight: '1.25', textTransform: 'capitalize' }}
            />
            <Tab
               icon={<DescriptionTwoToneIcon />}
               iconPosition="start"
               label="Personal Details"
               sx={{ color: 'rgb(54,65,82)', fontSize: '0.875rem', fontWeight: '500', lineHeight: '1.25', textTransform: 'capitalize' }}
            />
            <Tab
               icon={<LibraryBooksTwoToneIcon />}
               iconPosition="start"
               label="My Account"
               sx={{ color: 'rgb(54,65,82)', fontSize: '0.875rem', fontWeight: '500', lineHeight: '1.25', textTransform: 'capitalize' }}
            />
            <Tab
               icon={<LockTwoToneIcon />}
               iconPosition="start"
               label="Change Password"
               sx={{ color: 'rgb(54,65,82)', fontSize: '0.875rem', fontWeight: '500', lineHeight: '1.25', textTransform: 'capitalize' }}
            />
            <Tab
               icon={<MailTwoToneIcon />}
               iconPosition="start"
               label="Settings"
               sx={{ color: 'rgb(54,65,82)', fontSize: '0.875rem', fontWeight: '500', lineHeight: '1.25', textTransform: 'capitalize' }}
            />
         </Tabs>
         <Divider />
      </MainCard>
   );
};

export default StepperProfile;
