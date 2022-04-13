// import axios from "axios";
// import { CHANGE_EMAIL, CHANGE_DATA, CHANGE_PASSWORD } from "./Actions";



// const initState = {
//     email : "",
//     password : "",
//     data : false,
//     token11:"1111"

// } 

// export const reducer = (store = initState, {type, payload}) => {
//     console.log("store" , store)
//     // console.log("store",store)
//      switch(type){
//         case CHANGE_EMAIL:
//             return{...store, name: payload}

//         case CHANGE_PASSWORD:
//                 return{...store, name: payload}

//         case CHANGE_DATA:

//                     return{...store, name: payload}

//         default:
//             return store;
//      }

     
// }

// // dispatch(addEnmail(asdgsk))





import {Change_Loading,Change_Sucess,Change_Error } from "./Actions"
const initState = {
    // email:"",
    // password:"",
    loading:false,
    isAuth:false,
    token:"",
    error:false
}
export  const reducer = (store  = initState,{type,payload})=>{
    console.log("store",store)
    switch(type){
        // case Change_Email:

        //     return({...store,email:payload})
            
        //     case Change_Password:

        //         return({...store,password:payload})


                case Change_Loading:

                    return({...store,loading:true})

                    case Change_Sucess:
                        return({...store,
                        token:payload,
                        loading:false,
                        isAuth:true
                        })

                        case Change_Error:
                            return({...store,error:true})
                       default:
                       return store;

                  

    }
}