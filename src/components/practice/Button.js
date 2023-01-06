import React from "react";
import nature from './nature.jpeg'
function Button(props){
    return(
        <div>
         <button style={{color:props.color}} onClick={props.add}>{props.title}</button>
      <div><img src={nature} alt="this is seema" style={{width:"8%",borderRadius:"10px"}} title={props.title}/></div>  
        </div>
    );
}
export default Button;