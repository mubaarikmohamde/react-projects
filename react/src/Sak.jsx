import React from "react";
function Qof(props){

return (


  <>
  <h1> Welcome {props.name}</h1>
  <h2> your phone is {props.phone}</h2>
  <h3> your age is {props.age} </h3>
  
  </>
)


}
function Wadar(){
return(
<Qof name="mubaarik" phone="4636363630"  age={20}/>



)


}
export default Wadar;