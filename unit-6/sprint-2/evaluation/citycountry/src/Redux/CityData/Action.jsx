export const LOADING  = "LOADING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";
export const ADD_COUNTRY = "ADD_COUNTRY"

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

export const add_country = (payload) => ({
    type : ADD_COUNTRY,
    payload
})