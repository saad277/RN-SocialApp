import { httpRequest, postConfig, getError } from "../../utils/requestUtils";
import Snackbar from "react-native-snackbar";

export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";

export const getPosts = () => (dispatch, getState) => {
    return httpRequest
        .get(`https://jsonplaceholder.typicode.com/posts`)
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
