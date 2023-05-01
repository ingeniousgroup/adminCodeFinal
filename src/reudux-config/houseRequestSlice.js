import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHouseRequest = createAsyncThunk("view_house_request", async () => {
    let response = await axios.get("/admin/view_house_request");
    return response.data;
});

const slice = createSlice({
    name: "houseRequest",
    initialState: {
        houseRequestList: [],
        isLoading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchHouseRequest.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(fetchHouseRequest.fulfilled, (state, action) => {
            state.houseRequestList = action.payload.requestList;
            state.isLoading = false;
        }).addCase(fetchHouseRequest.rejected, (state, action) => {
            state.isLoading = false;
            state.error = "Oops! something went wrong";
        })
    }
})
export default slice.reducer;