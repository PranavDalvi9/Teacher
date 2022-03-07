// function add(a,b){
//     return a+b
// }

// const mult = (a,b) =>{
//     return a*b
// }

import Icon from "./logo.png";
// console.log(Icon);


// console.log("i am pic")
// import "./index.css";
import{add,mult} from "./calci"

console.log(add(2,3))
console.log(mult(2,3));

const h1 = document.createElement("h1");
h1.innerText = "Welcome To Masai School";
h1.classList.add("redText");

const image = document.createElement("img");
image.height = '100';
image.width = '100'
image.src = Icon;


document.getElementById("root").appendChild( image)