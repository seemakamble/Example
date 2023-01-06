import React,{ useContext } from 'react';
import  { UserContext } from './Form';
const Compo3 = () =>{
    const val = useContext(UserContext);
 
    return(
    <div>
        <h1>{val}</h1>
        </div>
    );
}
export default Compo3;