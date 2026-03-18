
// example of functional component

function Example({subjectName}) {
    // console.log("props value coming from parent component",props);
    // object destructuring
    // {subjectName} = props
    return(
        <>
        <div>
            Inside example component
            {   
            subjectName==="React" &&
                <p>Subject name coming from parent component : {subjectName}</p>
            }
            
        </div>
        </>
    )
}

export default Example;