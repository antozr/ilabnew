

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
        }

    }
});

export const {profil, dataJob} = userDataSlice.actions;
export default userDataSlice.reducer; 