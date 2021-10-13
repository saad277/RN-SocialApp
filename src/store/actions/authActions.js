import AsyncStorage from "@react-native-async-storage/async-storage";
import Snackbar from "react-native-snackbar";

export const ME_SUCCESS = "ME_SUCCESS";
export const LOG_OUT = "LOG_OUT";

export const login = (payload) => (dispatch) => {};

export const getMe = (payload) => (dispatch) => {
    dispatch({
        type: ME_SUCCESS,
        payload,
    });
};

export const logout = () => async (dispatch) => {
    await AsyncStorage.removeItem("token");
    dispatch({
        type: LOG_OUT,
    });

    return Promise.resolve(true);
};
