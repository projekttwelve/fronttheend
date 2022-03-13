import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import homeReducer from '../features/home/homeSlice';
import userReducer from '../features/user/UserSlice';
import recruitReducer from '../features/user/usertypes/recruit/recruitSlice'
import recruiterReducer from '../features/user/usertypes/recruiter/recruiterSlice'
export const rootReducer =  {
    home : homeReducer,
    user: userReducer,
    recruit: recruitReducer,
    recruiter: recruiterReducer
  }
/**
 *creates and configures the redux store,
 * combines all our reducers
 * */
export const store = configureStore({
  reducer: rootReducer,
  /*,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  })
  */
});
