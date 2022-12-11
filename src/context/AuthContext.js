/**
 * @authReducer este activata doar de react oricand ii da dispatch
 *
 */
import AsyncStorage from "@react-native-async-storage/async-storage";
import CreateDataContext from "./CreateDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload }; // returneazza o copie a obiectului cu update-ul ca errorMesage ia valoarea lui payload
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "signout":
      return { token: null, errorMessage: "" };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    navigate("TrackList");
  } else {
    navigate("loginFlow");
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password }); // make api request to sign up with that email and pass

      await AsyncStorage.setItem("token", response.data.token); // aici punem tokenul in memorie
      // if we sign up , modify out state , and say that we are authtificated
      dispatch({ type: "signin", payload: response.data.token }); // update the state with the respectiv token

      //navigate to main flow
      navigate("TrackList");
      //if signup failed we need to reflet error message
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: ` Something went wrong with sign up`,
      });
    }
  };

const signin =
  (dispatch) =>
  async ({ email, password }) => {
    // try to signin
    try {
      const response = await trackerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
      navigate("TrackList");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign in",
      });
    }
    // handle succes by updating state
    //gandle failure by showing error message
  };

const signout = (dispatch) => async () => {
  // somehow sign out
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
  navigate("loginFlow");
};

export const { Provider, Context } = CreateDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: "" }
);
