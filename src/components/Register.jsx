import React, { useState } from 'react'

function Register() {
    const inputStyle = {padding:'5px',fontWeight:'bold', border: '2px solid'};
    const btnStyle = {padding:'4px',backgroundColor: 'black', color: 'white'};
    const [studentDetails, setStudentDetails] = useState({name:"",gender:"",stream:""});

    const getDetails = (e) =>{
        // console.log("e.target",e.target);
        
        const {name,value} = e.target;
        console.log("name and value",name,value);
        setStudentDetails({...studentDetails,[name]:value});
    }
        console.log("studentdetails",studentDetails);


    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("form values are",studentDetails);
    } 

  return (
    <>
      <div>
        <h3>Higher Secondary Registration</h3>
        <form onSubmit={handleSubmit}>
            {/* name field */}
            <div>
                <label htmlFor="name">Name :
                    <input type="text"  name='name' placeholder='Enter name' id='name' style={inputStyle}
                    value={studentDetails.name || ""} onChange={(e)=>{getDetails(e)}}/>
                </label>
            </div>

            {/* gender field */}
            <div>
                <label htmlFor='gender'>Gender :</label>
                <input type="radio" name='gender' id='male' value='male' onChange={(e)=>{getDetails(e)}}/>
                <label htmlFor='male'>Male</label>
                <input type="radio" name='gender' id='female' value='female' onChange={(e)=>{getDetails(e)}}/>
                <label htmlFor='female'>Female</label>
                <input type="radio" name='gender' id='others' value='others' onChange={(e)=>{getDetails(e)}}/>
                <label htmlFor='others'>Others</label>
            </div>

            {/* stream field */}
            <div>
                <label htmlFor='stream'>Stream :
                    <select onChange={(e)=>{getDetails(e)}} name='stream'>
                        <option disabled hidden selected>--Select--</option>
                        <option value='computer'>Computer</option>
                        <option value='commerce'>Commerce</option>
                        <option value='biology'>Biology</option>
                        <option value='humanities'>Humanities</option>
                    </select>
                </label>
            </div>

            {/* submit button */}
            <button type='submit' style={btnStyle}>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Register