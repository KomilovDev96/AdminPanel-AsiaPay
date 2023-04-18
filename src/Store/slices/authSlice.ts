import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage } from "../../Utils/LocalStorege";
import { StateAuthSlice } from "../Store.props";
import { API_SESSION, ISAUTH_SESSION, USERID_SESSION } from "../../Constants/others";

//get LocalStore
const getVerificate = getLocalStorage(USERID_SESSION);
const getisAuth = getLocalStorage(ISAUTH_SESSION);
const apiSession = getLocalStorage(API_SESSION);

// initial values of reducer
const initialState: StateAuthSlice = {
  isAuth: getisAuth && apiSession ? true : false,
  isNetworkErr: false,
  verification: getVerificate && apiSession ? true : false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setIsAuth: (state: StateAuthSlice, { payload }) => {
      state.isAuth = payload;
    },
    setverification: (state: StateAuthSlice, { payload }) => {
      state.verification = payload;
    },
    setIsNetworkErr: (state: StateAuthSlice, { payload }) => {
      state.isNetworkErr = payload;
    },
  },
});

export default AuthSlice;
