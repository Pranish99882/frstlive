import React from 'react';
import Props from './Props';

const name=[
    {a:"Pranish",b:"Prapti"},
    {a:"Bhagattttt",b:"Karki"}];

const Demo=()=>
{
    return(
    <>
    {
    name.map((val) =>
    {
        return(<Props 
        a={val.a}
        b={val.b}
        />
        );
    })
    }

    </>
    );
}

export default Demo;