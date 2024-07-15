import { createSlice } from '@reduxjs/toolkit';
import config from 'config';

const initialState = {
   isOpen: [], // for active default menu
   defaultId: 'default',
   fontFamily: config.fontFamily,
   borderRadius: config.borderRadius,
   opened: true,
   // theme constant
   gridSpacing: 3,
   drawerWidth: 260,
   appDrawerWidth: 320
};

const customizationSlice = createSlice({
   name: 'customization',
   initialState,
   reducers: {
      menuOpen(state, action) {
         state.isOpen = [action.payload.id];
      },
      setMenu(state, action) {
         state.opened = action.payload.opened;
      },
      setFontFamily(state, action) {
         state.fontFamily = action.payload.fontFamily;
      },
      setBorderRadius(state, action) {
         state.borderRadius = action.payload.borderRadius;
      }
   }
});

export const { menuOpen, setMenu, setFontFamily, setBorderRadius } = customizationSlice.actions;

export default customizationSlice.reducer;

export const selectCustomization = (state) => state.customization;

export const selectGridSpacing = (state) => state.customization.gridSpacing;

export const selectDrawerWidth = (state) => state.customization.drawerWidth;

export const selectAppDrawerWidth = (state) => state.customization.appDrawerWidth;
