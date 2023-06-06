import { createSlice } from "@reduxjs/toolkit";

const greetingSlice = createSlice({
  name: "greetings",
  initialState: {
    greetings: [],
  },
  reducers: {
    addGreeting(state, action) {
      const greeting = action.payload;
      state.greetings.push(greeting);
    },
  },
});

export const greetingActions = greetingSlice.actions;

export default greetingSlice.reducer;