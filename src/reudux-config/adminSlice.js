import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:'admin',
    initialState:{
        currentAdmin: null
    },
    reducers:{
        setAdmin: (state,action)=>{
            state.currentAdmin = action.payload;
        
        },
        signOut: (state,action)=>{
        state.currentAdmin = null;
        }
    }
});



export const {setAdmin,signOut} = slice.actions;
export default slice.reducer;