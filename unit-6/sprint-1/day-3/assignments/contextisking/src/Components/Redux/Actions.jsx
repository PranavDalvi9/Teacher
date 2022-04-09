//action 
export const CHANGE_NAME = "CHANGE_NAME";
export const CHANGE_AGE = "CHANGE_AGE";
export const CHANGE_DATE_BIRTH = "CHANGE_DATE_BIRTH";
export const CHANGE_STATE = "CHANGE_STATE";
export const CHANGE_ADDRESS = "CHANGE_ADDRESS";
export const CHANGE_PINCODE = "CHANGE_PINCODE";
export const MakePost = "MakePost";

//action creators
export const addName = (payload) => ({type: CHANGE_NAME, payload});

export const addAge = (payload) => ({type: CHANGE_AGE, payload});

export const addDatebirth = (payload) => ({type: CHANGE_DATE_BIRTH, payload});

export const addState = (payload) => ({type: CHANGE_STATE, payload});

export const addAddress = (payload) => ({type: CHANGE_ADDRESS, payload});

export const addPincode = (payload) => ({type: CHANGE_PINCODE, payload});

export const addMakePost = (payload) => ({type: MakePost, payload});