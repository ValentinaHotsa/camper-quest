import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { advertsReducer } from "./adverts/advertsSlice";

// const customReconciler = (
//   inboundState,
//   originalState,
//   reducedState,
//   { debug }
// ) => {
//   const newState = {
//     ...reducedState,
//     adverts: {
//       ...reducedState.adverts,
//       adverts: Array.isArray(inboundState?.adverts?.adverts)
//         ? inboundState.adverts.adverts
//         : [],
//     },
//   };
//   return newState;
// };

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["adverts"],
};

const rootReducer = combineReducers({
  adverts: advertsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
