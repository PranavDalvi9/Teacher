import { CHANGE_NAME } from "./Actions";
import { CHANGE_AGE } from "./Actions";
import { CHANGE_DATE_BIRTH } from "./Actions";
import { CHANGE_STATE } from "./Actions";
import { CHANGE_ADDRESS } from "./Actions";
import { CHANGE_PINCODE } from "./Actions";
import { MakePost } from "./Actions";
import axios from "axios";

const initState = {
    name : "",
    age : "",
    dateofBirth : "",
    state : "",
    address : "",
    pincode : "",
} 

export const reducer = (store = initState, {type, payload}) => {
    // console.log("store" , store)
    // console.log("store",store)
     switch(type){
        case CHANGE_NAME:
            return{...store, name: payload}

        case CHANGE_AGE:
            return{...store, age: payload}

        case CHANGE_DATE_BIRTH:
            return{...store, dateofBirth: payload}

        case CHANGE_STATE:
            return{...store, state: payload}

        case CHANGE_ADDRESS:
            return{...store, address: payload}

        case CHANGE_PINCODE:
                return{...store, pincode: payload}

        case MakePost:
            axios.post("http://localhost:8080/addData", store)

            return store
        


        default:
            return store;
     }

     
}

