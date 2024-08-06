import { configureStore } from '@reduxjs/toolkit';
import { profileReducer, userReducer } from './reducers/userReducer';
// const server = ""
const store = configureStore({
  reducer: { user: userReducer, profile: profileReducer },
});

export default store;
export const server = 'http://localhost:4000/api/v1';
// export const server = 'https://onlinetuitionbackend.onrender.com/api/v1';
