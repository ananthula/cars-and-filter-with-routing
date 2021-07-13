import { configureStore } from '@reduxjs/toolkit';

import carSlice from './car-slice';
import uiSlice from './ui-slice';


const store = configureStore({
  reducer: { cars: carSlice.reducer,
    ui: uiSlice.reducer, },
});

export default store;