import React, { useEffect, useState } from 'react'

function ContactList() {
    const [data, setData] = useState([])
    const [search,setSearch]=useState('')
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(response => setData(response))
    }, [])
    function delItem(getid){
        // console.log(getid,"12")
      const seema=data.filter(see=>see.id!==getid)
      setData(seema)
    }
    function myfun(e){
        setSearch(e.target.value)
    }
    const set=data.filter(sam=>sam.category.includes(search))
    console.log(search,"20")
    
    return (
        <div>
           <div>
            <label>search</label>
            <input type="search" placeholder="search" value={search} onChange={myfun}/>&nbsp;
            <input type="file" />
           </div>
            {
                data && data.length>0?
                <table border="1">
                <thead>
                    <tr>
                     <th>Slno</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Delitem</th>
                  </tr>
                </thead>
                <tbody>
                    {
                        set.map((item)=><tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>{item.category}</td>
                            <td><button onClick={()=>delItem(item.id)}>delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
            :'table is empty'
            }

        </div>
    );
}
export default ContactList;