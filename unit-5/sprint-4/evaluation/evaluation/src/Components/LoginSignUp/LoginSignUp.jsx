import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../Redux/store";
import {userLogin} from "../../Redux/Login/action.js"

export const LoginSignUp = () => {

  const [data , setData] = useState({});

  const dispatch = useDispatch();
  const [text , setText] = useState({})
  const logData = useSelector((store) => store.user)

const handleChange = (e) => {
  // console.log(e.target.className,e.target.value);
  const{className, value} = e.target
  setData({
    ...data,[className]:value
  })

}

const handleChangeLogin = (e) => {
  console.log(e.target.className,e.target.value);
  const{className, value} = e.target
  setText({
    ...text,[className]:value
  })
  // console.log(text)

}

const handleSignup = (e) =>{
  e.preventDefault();
  console.log(data);
  axios.post(" http://localhost:8080/users",data)
}

const handleLogin = (e) =>{
  e.preventDefault();
  console.log(text);
  axios.post(" http://localhost:8080/users",data);
  dispatch(userLogin(text))
  // console.log(logData.payload.name) 
  
}

// console.log(logData.payload.name)  
  return (
    <div className="loginSignUp">


      <form className="signUp" onSubmit={handleSignup}>
        <h1>SignUp</h1>
        <label>name</label>
        <input
          type="text"
          className="name"

          onChange={  handleChange }
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          onChange={handleChange}
          required
        />
        <br />
        <select value={""} className="location" onChange={handleChange}>
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <br />
        <label>Interests</label>
        <br />
        <label>technology</label>
        <input
          type="checkbox"
          className="technology"
          onChange={(event) => { }}
        />
        <br />
        <label>food</label>
        <input type="checkbox" className="food" onChange={(event) => { }} />
        <br />
        <label>movies</label>
        <input type="checkbox" className="movies" onChange={(event) => { }} />
        <br />
        <label>culture</label>
        <input type="checkbox" className="culture" onChange={(event) => { }} />
        <br />
        <label>art</label>
        <input type="checkbox" className="art" onChange={(event) => { }} />
        <br />
        <label>drama</label>
        <input type="checkbox" className="drama" onChange={(event) => { }} />
        <br />
        <label>image</label>
        <input
          type="text"
          className="image"
          onChange={handleChange}
          required
        />
        <br />
        <input type="submit" className="submitSignUpForm" />
      </form>


      <form className="login" onSubmit={handleLogin}>
        <h1>Login</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          onChange={handleChangeLogin}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          onChange={handleChangeLogin}
          required
        />
        <br />
        <input type="submit" className="submitLoginForm" />
      </form>

      {/* <h1>{logData.payload.name}</h1> */}
    </div>
  );
};
