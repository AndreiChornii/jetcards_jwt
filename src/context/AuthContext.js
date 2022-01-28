import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";
import tracker from '../api/tracker';
import axios from "axios";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "signout":
      // return { token: null, errorMessage: "" };
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    const AuthStr = 'Bearer '.concat(token);
    let design_res = null;
    try {
      const res = await trackerApi.get(`/Designs`, {
        headers: {
          Authorization: AuthStr,
        }
      });
      design_res = res;
    } catch (err) {
      console.log(err);
    }
    // dispatch({ type: "signin", payload: token });
    if(design_res !== null){
      dispatch({ type: "signin", payload: token, payload: { design: design_res.data } });
    }
    navigate("TrackList");
  } else {
    navigate("Signin");
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signup", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signin", payload: response.data.token });
    navigate("TrackList");
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign up",
    });
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/Token", { user: email, password: password });
    // console.log(response);
    await AsyncStorage.setItem("token", response.data.Token);

    // const token = await AsyncStorage.getItem("token");
    let design_res = null;
    if (response.data.Token) {
      const AuthStr = 'Bearer '.concat(response.data.Token);
      try {
        const res = await trackerApi.get(`/Designs`, {
          headers: {
            Authorization: AuthStr,
          }
        });
        design_res = res;
      } catch (err) {
        console.log(err);
      }
    }

    // dispatch({ type: "signin", payload: response.data.Token });
    dispatch({ type: "signin", payload: response.data.Token, payload: { design: design_res.data } });
    navigate("TrackList");
  } catch (err) {
    console.log(err);
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign in",
    });
  }
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
  navigate("loginFlow");
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: "" }
);
