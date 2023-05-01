import AdminSlice from "./adminSlice";
import { configureStore } from "@reduxjs/toolkit";
import HouseRequestSlice from "./houseRequestSlice";
const store = configureStore({
    reducer:{
        admin: AdminSlice,
        houseRequest:HouseRequestSlice,
    }
});

export default store;
