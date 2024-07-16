import { createRoot } from 'react-dom/client';

// third party
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// project imports
import App from './App';
import { store, persistor } from '@store/reducer';

// google-fonts
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/700.css';

import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

// Get the root container element
const container = document.getElementById('root');
const root = createRoot(container);
// ==============================|| REACT DOM RENDER  ||============================== //

// Render the application wrapped with Redux Provider
root.render(
   <Provider store={store}>
      <div> Hello</div>
      <PersistGate loading={null} persistor={persistor}>
         <App />
      </PersistGate>
   </Provider>
);
