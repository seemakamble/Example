import React from 'react';
import { Link,Outlet } from 'react-router-dom'
import tree from '../assets/tree.jpg'
const Compo1 = () => {
    return(
        <div>
         <h1>iam The component1</h1>
         <div>
                <Link to='compo2'>go to component2</Link>{ ''}

            </div>
        <div>
            <Outlet/>
            </div>
            
        </div>
    );
}
export default Compo1;