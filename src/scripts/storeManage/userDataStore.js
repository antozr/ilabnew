

import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({

    name: 'dataUser',
    initialState:{
        user: null
    },
    reducers:{
        profil :(state, action) =>{
            state.dataUser = action.payload;
        },
        dataJob : (state, action) =>{
            state.dataUser = action.payload;
        },
        userDataPerso : (state, action)=>{
            state.user = action.payload;
        }

    }
});

export const {profil, dataJob} = userDataSlice.actions;
export const dataProfil = (state) => state.dataUser.user;
export default userDataSlice.reducer; 