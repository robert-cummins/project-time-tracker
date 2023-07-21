import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export default configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: composeWithDevTools(),
});