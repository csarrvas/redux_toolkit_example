import {
  configureStore,
  // getDefaultMiddleware,
} from '@reduxjs/toolkit';
import reducer from './reducers';

// function loggerMiddleware(store) {
//   return function(next) {
//     return function(action) {
//       console.log(action);
//       // console.log(store.getState());
//       return next(action);
//     }
//   } 
// }

const store = configureStore({
  reducer,
  // middleware: [...getDefaultMiddleware(), loggerMiddleware],
});

export default store;
