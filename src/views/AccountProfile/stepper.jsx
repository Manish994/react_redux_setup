import { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Tabs, Tab, Divider, Card } from '@mui/material';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import LibraryBooksTwoToneIcon from '@mui/icons-material/LibraryBooksTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';
import SwipeableViews from 'react-swipeable-views';

//
import Profile from './profile';
import PersonalDetails from './personalDetails';
import KycDetails from './kycDetails';
import MyAccount from './myAccount';
import Security from './security';
import AdminHistory from './settings';

const StepperProfile = () => {
   const [value, setValue] = useState(0);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   const handleChangeIndex = (index) => {
      setValue(index);
   };

   const styles = { color: 'rgb(54,65,82)', fontSize: '0.875rem', fontWeight: '500', lineHeight: '1.25', textTransform: 'capitalize' };

   return (
      <MainCard sx={{ backgroundColor: 'rgb(244, 247, 249)' }}>
         <Card>
            <Tabs
               value={value}
               onChange={handleChange}
               aria-label="simple tabs example"
               variant="scrollable"
               scrollButtons="auto"
               indicatorColor="primary"
               textColor="primary"
            >
               <Tab icon={<AccountCircleTwoToneIcon />} iconPosition="start" label="Profile" sx={styles} />
               <Tab icon={<DescriptionTwoToneIcon />} iconPosition="start" label="Personal Details" sx={styles} />
               <Tab icon={<DescriptionTwoToneIcon />} iconPosition="start" label="KYC Details" sx={styles} />
               <Tab icon={<LibraryBooksTwoToneIcon />} iconPosition="start" label="My Account" sx={styles} />
               <Tab icon={<LockTwoToneIcon />} iconPosition="start" label="Security" sx={styles} />
               <Tab icon={<MailTwoToneIcon />} iconPosition="start" label="History" sx={styles} />
            </Tabs>
         </Card>
         <br></br>
         <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
            <Profile />
            <PersonalDetails />
            <KycDetails />
            <MyAccount />
            <Security />
            <AdminHistory />
         </SwipeableViews>
      </MainCard>
   );
};

export default StepperProfile;
