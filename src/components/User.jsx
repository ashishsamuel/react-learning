
// functional component 

import React from 'react'

function User(props) {
    const divStyle = {
        display: 'flex',
        justifyContent: 'center',
        padding: '5px 10px',
        width: '100%',
        background: 'yellow'
    };
    console.log("props coming from app.js file", props);
  return (
    <div style={divStyle}>
        <p>User name coming from parent component: '{props.uname}'</p>
        <p>Age of user : {props.age}</p>
    </div>
  )
}

export default User