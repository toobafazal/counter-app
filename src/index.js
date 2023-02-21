// import { Greetings } from "./component/Greeting";
import { Increament, Other ,Decreament,Reset} from './Other'
import './style.css'
// console.warn(Other())
// import Button from "./components/Button";

// const createRoot = () => {
//   const rootElement = document.createElement("div");
// //   rootElement.classList.add("app");
//   rootElement.innerHTML = `${Other()}`;

//   return rootElement;
// };

const Counter = ()=>{
    const rootElement = document.createElement("div")
    rootElement.classList.add("hero")
    rootElement.appendChild(Other());
    rootElement.appendChild(Increament());
    rootElement.appendChild(Reset());
    rootElement.appendChild(Decreament());

    // return rootElement;
  return  rootElement ;
}

document.body.appendChild(Counter());
