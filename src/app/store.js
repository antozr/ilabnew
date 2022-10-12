
// initialisation des stores de rédux 

import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../scripts/storeManage/userStore';
import appReducer from '../scripts/storeManage/userStore';


export const store = configureStore({
    reducer:{
        user : userReducer,
        app : appReducer
    },
});