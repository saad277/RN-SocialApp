import axios from "axios";

import Config from "../Config";

export const httpRequest = axios.create({
    baseURL: Config.apiUrl,
});

export const postConfig = {
    headers: {
        "Content-Type": "application/json",
    },
};

export const getError = (error) => {
    return error.response.data.message;
};
