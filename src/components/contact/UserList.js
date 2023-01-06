import React, { useEffect, useState } from "react";
function UserList(){
    const storage=JSON.parse(localStorage.getItem('var1'))||[];
    const [store,setstore]=useState(true)
    const [search,setSearch]=useState('')
    const [table,settable]=useState([])
    const [data,setdata]=useState({
        name:'',
        email:'',
        mobileno:'',
        password:'',
    });
    const [user,setuser]=useState(storage)
   
function myfun(e){
setdata({...data,[e.target.name] : e.target.value});
}
function handleclick(e){
    e.preventDefault();
   setuser([...user,data])
setdata({name:'',email:'',mobileno:'',password:''})


}
console.log(user)
localStorage.setItem('var1',JSON.stringify(user));

    function delItem(index){
      user.splice(index,1)
      setstore(!store)
      localStorage.setItem('var1',JSON.stringify(user));
    }
    function seaching(e){
     setSearch(e.target.value)
    //  console.log(search,"34")
     const sss=user.filter(see=>see.name.includes(e.target.value))
     settable(sss)
    console.log(sss,"36")
  
  
    }
    useEffect(()=>{
      settable(user)
    },[user])
    // const sss=user.filter(see=>see.name.includes(search))
    // search(sss)
    function updatefun(updateitem){
        setdata(updateitem)

    }
 
    return(
        <div>
            <div>
                <label>search:</label>
                <input type="search" value={search} placeholder="search" onChange={seaching}/>
            </div>
           
            <form >
                <input type="text" name="name" placeholder="enter your name" onChange={myfun} value={data.name}/><br></br>
                <input type="email" name="email" placeholder="enter your email" onChange={myfun} value={data.email}/><br></br>
                <input type="number" name="mobileno" placeholder="enter your mobileno" onChange={myfun} value={data.mobileno}/><br></br>
                <input type="password" name="password" placeholder="enter your password" onChange={myfun} value={data.password}/><br></br>
                <button onClick={handleclick} >submit</button>
              
            </form>
            {/* <h2>{user[0]}</h2>
              <h2>Name:{user.name}</h2>
            <h2>Email:{user.email}</h2> 
            <h2> MobileNo:{user.mobileno} </h2> 
            <h2> Password:{user.password}</h2>  

        */}
           
        <table border="1" >
            <thead>
               <tr>
                <th>Name</th>
                <th>Email</th>
                <th>MobileNo</th>
                <th>Password</th>
                <th>delItem</th>
                <th>Edit</th>
                
               </tr>
            </thead>
            <tbody>
                <div>
                {
                  table.map((item,index)=>{
                    return(
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.mobileno}</td>
                            <td>{item.password}</td>
                            <td><button onClick={()=>delItem(index)}>delete</button></td>
                            <td><button onClick={()=>updatefun(item)}>Edit</button></td>
                        </tr>
                    )
                  })  
                }
                 </div>
            </tbody>
        </table>
        </div>
     
    );
}
export default UserList;