
// functional component 

import React, { useState } from 'react'

function User({uname,age}) {
    const [colors,setColors] = useState({
        first: "red",
        second: "blue",
        third: "green"
    });
    // changing the color of second paramter to yellow from blue color
    // console.log("colors state",colors);
    
    const divStyle = {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '5px 10px',
        width: '100%',
        background: 'yellow'
    };
    console.log("props coming from app.js file", uname, "and" ,age);

    const display =()=>{
        alert("Click event has been triggered");
    }

    const addUser = (user) =>{
        alert(`${user} added`);
    }

    const getName = (event)=>{
        console.log("event",event.target.value);
    }

    const changeColor = (color)=>{
        setColors({...colors,second:color});
    }

    console.log("colors state after updation",colors);
    
  return (
    <div style={divStyle}>
        {    uname ==="Virat Kohli" ?
            <p>User name coming from parent component: '{uname}'</p>
            :<p>Username coming from parent component is not virat</p>
        }    
        <p>Age of user : {age}</p>
        {/* not passign any arguments */}
        <button style={{background:'black',color:'white',padding:'4px 10px'}}
        onClick={display}>Click</button>
        {/* passing argument to the function */}
        <button style={{background:'black',color:'white',padding:'4px 10px'}}
        onClick={()=>addUser('ashish')}>Add</button>
        {/* passing an event as an argument */}
        <input type='text' style={{width:'120px',border:'1px solid', padding:'3px 5px'}} placeholder='enter the username' onChange={(e)=>getName(e)}/>
        <button onClick={()=>changeColor("yelow")}>Change color</button>
    </div>
  )
}

export default User