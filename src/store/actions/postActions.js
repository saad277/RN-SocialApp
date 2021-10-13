import { httpRequest, postConfig, getError } from "../../utils/requestUtils";
import Snackbar from "react-native-snackbar";

export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";

export const getPosts = () => (dispatch, getState) => {
    return httpRequest
        .get(`/posts`)
        .then((res) => {
            dispatch({
                type: GET_POSTS_SUCCESS,
                payload: res.data,
            });

            return Promise.resolve(res.data);
        })
        .catch((err) => {
            Snackbar.show({
                text: getError(err),
                duration: Snackbar.LENGTH_SHORT,
            });
            return Promise.reject(err);
        });
};

export const createPost = (payload) => (dispatch, getState) => {
    return httpRequest
        .post(`/posts`, payload, postConfig)
        .then((res) => {
            dispatch({
                type: CREATE_POST_SUCCESS,
                payload: res.data,
            });

            Snackbar.show({
                text: "Post Created",
                duration: Snackbar.LENGTH_SHORT,
            });

            return Promise.resolve(res.data);
        })
        .catch((err) => {
            Snackbar.show({
                text: getError(err),
                duration: Snackbar.LENGTH_SHORT,
            });
            return Promise.reject(err);
        });
};
