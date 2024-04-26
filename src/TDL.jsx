import React, { useState } from 'react'
import Work from './Work';
const TDL = () => {

const[data,setData]=useState("");
const[task,listTask]=useState([]);
const[deleted,setDeleted]=useState("");
const [done,setDone]=useState([]);
const set=(event)=>
{
    setData(event.target.value);
}

const show=()=>
{
   listTask((preval)=>{
    return[...preval,data];
   })

}

const erase=(id,txt)=>
{
  setDeleted(txt);
  setDone((pv)=>
  [...pv,txt]
)
    listTask((pval)=>{
    return pval.filter((arrElem,index)=>{
     
      return index !== id;
    });
});
}


  return (
    <>
    <input onChange={set}></input>
    <button onClick={show}>+</button>
    {task.map((val,index)=>{
        return <Work text={val}
        key={index}
        id={index}
        onSelect={erase}
        />
    })
    }
    <h3>DONE TASK::::::::</h3>
    {
      done.map((val)=>
      {
        return<h4>{val}</h4>

      })
    }
    

    </>
  )
}

export default TDL;

