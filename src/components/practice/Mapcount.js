import React from 'react'
function Mapcount (){
    const months=["jan","feb","mar","apr","may","jun","july","aug","sep"]
   const numbers=[1,2,34,4,5,5,5,4,4,3,3,3,2,2,]
   const days=["mon","tue","wed","thus","fri","saturday","sun"]
   let filterdata=months.filter((day)=>day!=="mon")
    return(
   <div>
  
 {
    months.map((item,index)=><h2>{item}{index}</h2>)
}


{
    numbers.map(num=><h3>{num}</h3>)
}


    </div>
    );
}
export default Mapcount;