import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';

const adminHistory = [
   {
      action: 'New customer added',
      description: 'Admin added a new customer named John Doe',
      timestamp: '2024-07-21 10:00 AM'
   },
   {
      action: 'Transaction implemented',
      description: 'Admin implemented a transaction for user Alice Smith',
      timestamp: '2024-07-21 09:30 AM'
   },
   {
      action: 'Password reset',
      description: 'Admin reset the password for user Bob Johnson',
      timestamp: '2024-07-20 03:00 PM'
   }
   // Add more actions as needed
];

const AdminHistory = () => {
   return (
      <SubCard title="Change Password" sx={{ marginBottom: '24px' }}>
         <Box p={2}>
            <Typography variant="h6" gutterBottom>
               Admin History
            </Typography>
            <List>
               {adminHistory.map((history, index) => (
                  <ListItem key={index} divider>
                     <ListItemText
                        primary={history.action}
                        secondary={
                           <>
                              <Typography component="span" variant="body2" color="textPrimary">
                                 {history.description}
                              </Typography>
                              <br />
                              <Typography component="span" variant="body2" color="textSecondary">
                                 {history.timestamp}
                              </Typography>
                           </>
                        }
                     />
                  </ListItem>
               ))}
            </List>
         </Box>
      </SubCard>
   );
};

export default AdminHistory;
