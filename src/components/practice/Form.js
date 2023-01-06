import React,{ useState,createContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
export const UserContext = createContext();
export const Form = () =>{
    const [data,setdata]=useState('');
    const [val,setval]=useState('value from form');

  
   
    return(
      <UserContext.Provider value={val}>
        <div>
          <input type="text" onChange={(e)=>setdata(e.target.value)} value={data}/>
          <button onClick={()=> setval(data)}>click me</button>
          <h1>{val}</h1>
          
          <div>
            <Link to='compo1'>go to component1</Link>{ ''}
         
            </div>
            <div>
              <Outlet/>
              </div>
           
            </div>
            </UserContext.Provider>
    );
}
