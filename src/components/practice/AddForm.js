import { useState } from 'react'
function AddForm (){
    const [data,setData]=useState({
    name:'',
    mail:'',
    password:'',
    });
    function myfun(e){
        setData({...data,[e.target.name]:  e.target.value})
    }
    const [user,setUser]=useState([])
    function handleclick (e){
        e.preventDefault();
     setUser(data)
     setData({name:'',mail:'',password:''});

    }
    return(
        <div>
           <form>
            <div><input type="text" name="name" placeholder="enter your name" value={data.name} onChange={myfun} /></div>
            <div> <input type="mail" name="mail" placeholder="enter your mail" value={data.mail} onChange={myfun} /></div>
            <div>  <input type="password" name="password" placeholder="enter your password" value={data.password} onChange={myfun}/></div>
             <div><button onClick={handleclick}>submit</button></div> 
            {/* <h2>Name:{user.name}</h2>
            <h2>Mail:{user.mail}</h2>
            <h2>Password:{user.password}</h2> */}
           </form>
          <>
         
          {Object.keys(user).length?
          <>
          <table border="1">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Mail</th>
                    <th>Password</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.mail}</td>
                        <td>{user.password}</td>
                    </tr>
                </tbody>
          
          </table>
            </>
                :'data is empty'
          }
          </>
         
        </div>
    );

}
export default AddForm;