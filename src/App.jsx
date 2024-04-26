import React, { useState } from "react";

const App = () => {

    // const [fullname, setName] = useState({
    //     fname: "",
    //     adrs: "",
    // });

    // const [fnlname, setfnlname] = useState({
    //     nm: "",
    //     ad: "",
    // });


    // const disp = (event) => {
    //     const { value, name } = event.target;

    //     setName((preval) => {
    //         if (name === 'fname') {
    //             return {
    //                 fname: value,
    //                 adrs: preval.adrs,
    //             };
    //         }
    //         else {
    //             return {
    //                 fname: preval.fname,
    //                 adrs: value,
    //             };
    //         }
    //     })
    // }

    // const show = (e) => {
    //     e.preventDefault()
    //     setfnlname((prevl) => {
    //         return {
    //             ...prevl,
    //             nm: fullname.fname,
    //             ad: fullname.adrs,
    //         }
    //     })


    // }

const initialState={
    fname:'',
    address:"",
}
    const [formData,setFormData]= useState(initialState)
    const [showData,setShowData] = useState(initialState)
    const changeHandler = (e) => {
        const {value} = e.target;
        const {name} = e.target;

        setFormData((formData)=>({
            ...formData,
            [name]: value
        }))
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        e.stopPropagation()
        setShowData(formData)
        setFormData(initialState)
    }
    return (
        <>
            <h1>Hello {showData.fname} {showData.address}</h1>
            <h2>chill my boy !!!!</h2>
            <br />
            {/* <form action="submit">
                <input type="text" onChange={disp} placeholder="enter name" name="fname" value={fullname.fname} />
                <input type="text" onChange={disp} placeholder="enter address" name="adrs" value={fullname.adrs} />
                <button type="submit" onClick={show} >Click me:🙂</button>
            </form> */}
            
            <form action="submit" onSubmit={submitHandler}>
                <input type="text" name="fname" id="" onChange={(e)=>changeHandler(e)} value={formData.fname}/>
                <input type="text" name="address" id="" onChange={(e)=>changeHandler(e)} value={formData.address}/>
                <button type="submit" >Summit data</button>
            </form>

        </>
    );
}

export default App;

//const[adrs,setAdrs]=useState("");
//const[loctn,setLoctn]=useState("");
//const[fname,setFname]=useState("");
//let time=new Date().toLocaleTimeString();
/*const disply=(event)=>{
    setAdrs(event.target.value);
 }*/

/*const show=()=>{
   setFname(name);
   setLoctn(adrs);

}*/


/*const incNum=()=>
{
    time=new Date().toLocaleTimeString();
    updtval(time);

}*/
//setInterval(incNum,1000);
