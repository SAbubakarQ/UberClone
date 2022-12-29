import { createSlice } from "@reduxjs/toolkit";

// When a user is being picked up
const initialState = {
    origin: null,
    destination: null,
    travelTimeInfo: null
};

export const navSlice = createSlice({
    name: "nav", 
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInfo: (state, action) => {
            state.destination = action.payload;
        },
    },
});

export const { setOrigin, setDestination, setTravelTimeInfo } = 
    navSlice.actions;

// When information is pushed into the data layer, now we
// need to grab it from the data layer
// aka Selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInfo = (state) => state.nav.travelTimeInfo;

// Takes information from here and extracts it to store.js
export default navSlice.reducer;