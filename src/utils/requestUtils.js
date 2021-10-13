import axios from "axios";

import Config from "../Config";

export const httpRequest = axios.create({
    baseURL: Config.apiUrl,
});

export const postConfig = {
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
};

export const getError = (error) => {
    return error.response.data.message;
};
