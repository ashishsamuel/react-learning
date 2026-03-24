import React, { useState } from 'react'

function Forms() {

    const [username,setUsername] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("username state value on form submit",username);
    }

    return (
  <>
    <div>
        <h3>React Forms</h3>    
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='uname'>
                    <input type="text" id='uname' placeholder='enter username' style={{padding:'5px',border:'2px solid'}} value={username || ""} onChange={(e)=>setUsername(e.target.value)}/>
                    <button type='submit' style={{color:'white',backgroundColor:'black'}}>Submit</button>
                </label>
            </div>
        </form>
    </div>
  </>
  )
}

export default Forms