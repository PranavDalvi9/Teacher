export const LOADING  = "LOADING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";

export const loading = () => ({
    type: LOADING
})

export const success = (payload) => ({
    type : SUCCESS,
    payload
})

export const error = () => ({
    type : ERROR
})