// import { useDispatch } from "react-redux";



export const CLASSESSS_LOADING = "CLASSESSS_LOADING";
export const CLASSESSS_SUCCESS = "CLASSESSS_SUCCESS";
export const CLASSESSS_FAILURE = "CLASSESSS_FAILURE";
// export const LOGOUT = "LOGOUT"
 
export const cLoad1 = () => ({
    type : CLASSESSS_LOADING
});

export const cSucc1 = (payload) => ({
    type : CLASSESSS_SUCCESS,
    payload
});

export const cFal1 =() => ({
    type: CLASSESSS_FAILURE 
})

// export const logout = () => ({
//   type : LOGOUT
// })

// export const login = ({username, password}) => (dispatch)=> {
//     // const dispatch = useDispatch();

//     dispatch(loginLoading())
//     fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
//       method: "POST",
//       body: JSON.stringify({username,password}),
//       headers:{
//         "Content-Type": "application/json"
//       }
//     })
//     .then((res) => res.json())
//     .then((res) => dispatch(loginSuccess({username,token:res.token})))
//     .catch((err) => dispatch(loginFailure()))
// }
