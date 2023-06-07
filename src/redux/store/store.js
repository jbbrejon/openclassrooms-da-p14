import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

import employeeListReducer from '../slices/employeeListSlice'

const reducers = combineReducers({
    employeeList: employeeListReducer
});

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [REGISTER]
        }
    })
})

export default store;