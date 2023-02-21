const Other = () => {
    const elementP = document.createElement("p");
    elementP.id = "value" 
    elementP.innerHTML = 0;
  return elementP;
}
const Increament = () => {
    const add = document.createElement("button");
    add.id = "increament"
    add.innerHTML = "+";
    add.addEventListener('click',()=>{
      value.innerHTML++;  
    })
  return add;
}
const Decreament = () => {
    const sub = document.createElement("button");
    sub.id = "decreament"
    sub.innerHTML = "-";
    sub.addEventListener('click',()=>{
        if(value.innerHTML>0){
            value.innerHTML--;  
        }
    })
  return sub;
}
const Reset = () => {
    const reset = document.createElement("button");
    reset.id = "reset"
    reset.innerHTML = "Reset";
    reset.addEventListener('click',()=>{
      value.innerHTML = "0";  
    })
  return reset;
}
export{ Increament , Other, Decreament, Reset}