import { configureStore } from '@reduxjs/toolkit';
import { dishReducer } from './dishSlice'
import { userReducer } from './userSlice'
import { loginReducer } from './loginSlice'

export const store = configureStore({
  reducer: {
    dishes : dishReducer,
    users: userReducer,
    loginUser: loginReducer
  },
});
