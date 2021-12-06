// import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer, {contactsApiSlice} from './auth/slices';
import {contactFilter} from './contacts/reducers'

const authPersistConfig = {
        key: 'auth',
        storage,
        whitelist: ['token'],
    }
const authPersistReducer = persistReducer(authPersistConfig, authReducer);

const middleware = [...getDefaultMiddleware ({
       serializableCheck: {
         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
       },
   }).concat(contactsApiSlice.middleware)
  //  logger
   ];

const store = configureStore({
       reducer: {
         auth: authPersistReducer,
         [contactsApiSlice.reducerPath]: contactsApiSlice.reducer,
         filter: contactFilter,
        // filter: filterSlice.reducer,
       },
       middleware,
    devTools: process.env.NODE_ENV === 'development',
})

const persistor = persistStore (store);

export const storeContacts = {store, persistor};
