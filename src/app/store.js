import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterSlice from '@f/counter/counterSlice';
import postsSlice from '@f/posts/postsSlice';
import usersSlice from '@f/users/usersSlice';
import productsSlice from '@f/products/productsSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['users']
}

const rootReducer = combineReducers({
  counter: counterSlice,
  posts: postsSlice,
  users: usersSlice,
  products: productsSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

})

export const persistor = persistStore(store)
export default store