import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "@/features/auth/store/userSlice";
// import themeConfigSlice from './themeConfigSlice';
// import userSlice from './user.store/userSlice';
// import businessConfigSlice from './business.store/businessSlice';
// import channelConfigSlice from './channels/channelSlice';

const rootReducer = combineReducers({
  user: userSlice.reducer,
});

export default configureStore({
  reducer: rootReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
