import React, { useState } from "react";
import nature from './nature.jpeg'
import Button from "./Button";
function Count(){
    const [data,setdata]=useState(2)   
       function increment(){
        setdata(data +1)
       }
       function decrement(){
        setdata(data -1)
       }
       function divide(){
        setdata(data *2)
       }
    return(
        <div>
            <h2>{data}</h2>
            <Button add={increment} title={"increment"} color="red" /> 
            <Button add={decrement}  title={"decrement"} color="blue" />
            <Button add={divide} title={"divide"} color="purple" />
            <Button add={()=>{alert('hi this is props')}} title={"alert"} color="green"/>
            <Button img={nature} title={"myimage"}/>
            <Button add={()=>{alert('hi this is seema')}} title={"its me"}/>
        </div>
    );
}
export default Count;