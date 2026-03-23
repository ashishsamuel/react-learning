
// functional component 

import React, { useState } from 'react'

function User({uname,age}) {
    const [colors,setColors] = useState({
        first: "red",
        second: "blue",
        third: "green"
    });

    // array of objects
    const userArray = [
        {userName: "Ashish", age:28},
        {userName: "Amal", age:30},
        {userName: "Ashwin", age:18},
        {userName: "Ajmal", age:17},
        {userName: "Sanju", age:40}
    ]
    
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

    // changing the color of second paramter to yellow from blue color using spread operator
    // console.log("colors state",colors);
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
        {/* state updation */}
        <button onClick={()=>changeColor("yelow")}>Change color</button>

        {/* rendering user array (list of user elements)*/}
        <h2>All Users</h2>
        <table>
            <thead>
                <tr>
                <th>Sl No</th>
                <th>Username</th>
                <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    userArray.length>0 && userArray.map((user,index)=>(
                        <tr>
                          <td>{index+1}</td>
                          <td>{user.userName}</td>
                          <td>{user.age}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default User