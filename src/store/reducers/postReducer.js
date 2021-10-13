import { GET_POSTS_SUCCESS, GET_POSTS_FAILURE } from "../actions";

const initialState = {
    posts: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
            };

        case GET_POSTS_FAILURE:
            return {
                ...state,
                posts: [],
            };

        default:
            return state;
    }
};
