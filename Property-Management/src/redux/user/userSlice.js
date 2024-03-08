import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  load: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.load = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.load = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.load = false;
    },
    updateUserStart: (state) => {
      state.load = true;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.load = false;
      state.error = null;
    },
    updateUserFailure: (state, action) => {
      state.error = action.payload;
      state.load = false;
    },
    deleteUserStart: (state) => {
      state.load = true;
    },
    deleteUserSuccess: (state, action) => {
      state.currentUser = null;
      state.load = false;
      state.error = null;
    },
    deleteUserFailure: (state, action) => {
      state.error = action.payload;
      state.load = false;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
} = userSlice.actions;

export default userSlice.reducer;
