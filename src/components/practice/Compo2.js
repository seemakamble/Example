import React from 'react'
import { Link, Outlet } from 'react-router-dom';
const Compo2 = () =>{
    return(
        <div>
            <h2>iam component2</h2>
          


            <div>
          <Link to='compo3'>go to component3</Link>{''}
        </div>

            <div>
                <Outlet />
                </div>
               

            </div>
    );
}
export default Compo2;