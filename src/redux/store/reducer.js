import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import storageSession from 'redux-persist/lib/storage/session';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

// project imports
import customizationSlice from '@slice/customizationSlice';

// Combine reducers
const rootReducer = combineReducers({
   customization: customizationSlice //Reducer that manages state not to be persisted
});

// Configure persistence
const persistConfig = {
   key: 'root', // Key for the persistor in storage
   version: 1, // Version of your persisted state
   storage: storageSession // Storage engine to use (e.g., localStorage)
   // blacklist: ['customization'] // Array of state keys to blacklist from persistence
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
export const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            // ignoredPaths: ['customization']
         }
      })
});

export const persistor = persistStore(store);
