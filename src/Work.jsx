
import React from 'react'

const Work = (props) => {
  return (
    <>
    <h1>{props.text}</h1>
    <button onClick={()=>{
        props.onSelect(props.id,props.text);
    }}>delete</button>
    </>

  )
}

export default Work;
