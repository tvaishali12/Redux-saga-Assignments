import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    result: 0,
    isFetching: false,
};

const calcualatorSlice = createSlice({
    name: "calculator",
    initialState,
    reducers: {
        addNumbers: (state, action) => {
            state.isFetching = true;
            // state.isFetching = false;
            // state.result = action.payload;
        },
        addNumbersSuccess: (state, action) => {
            console.log("@LN 16: ", action);
            state.isFetching = false; // at false show result
            state.result = action.payload;
        },
        addNumbersFailed: (state, action) => {
            console.log("@LN 21: ", action);
            state.isFetching = false;
        },
    },
});

export const { addNumbers, addNumbersFailed, addNumbersSuccess } =
    calcualatorSlice.actions;

export default calcualatorSlice.reducer;