import { combineReducers, configureStore } from "@reduxjs/toolkit";
import groupReducer from "../features/group/groupSlice";
import themeReducer from "../features/theme/themeSlice";
import fileExplorerReducer from "../features/FileExplorer/FileExplorer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import fontSizeReducer from "../features/font/fontSizeSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  group: groupReducer,
  theme: themeReducer,
  file: fileExplorerReducer,
  fontSize: fontSizeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        // Optionally, ignore paths in the state
        ignoredPaths: ["_persist"],
      },
    }),
});

export const persistor = persistStore(store);
