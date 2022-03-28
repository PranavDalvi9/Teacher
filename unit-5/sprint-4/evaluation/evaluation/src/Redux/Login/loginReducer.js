import { LOGIN } from "./action";
const initialState = { user: null };

export const loginReducer = (store = initialState, { type, payload }) => {
    console.log(store)
    switch (type) {
        // add your login reducer functionalities here

        case LOGIN :
            return{...store,user:{...store.user, payload}}

        default:
            return store
    }
}