import { useState } from 'react';
import './App.css';
import Example from './components/Example';
import { Random } from './components/Random';
import User from './components/User';

function App() {
  // usestate hook
  const [exampleDemo, setexampleDemo] = useState("React Hook");

  //js code
  const subjectName = "ReactJS";
  const userName = "Virat Kohli";

  const updateExampleDemoFunction = (value)=>{
    setexampleDemo(value);
    alert(`state value exmplaeDemo has been updated to ${value}`);
  }

  console.log("state value after updation",exampleDemo);

  return (
    //jsx code
    <>
      <h1 style={{textAlign: 'center', color: 'blue'}}>Hello World!!!</h1>
      <h3>Exampledemo State reated using useState hook - {exampleDemo}</h3>
      <button onClick={()=>updateExampleDemoFunction("React useState Hook")}>Update state value using usestate hook</button>
      <p>course : {subjectName}</p>
      <h3>Child Function based Component</h3>
      <Example subjectName={subjectName}/>
      <User uname={userName} age="27"/>
      <h3>Child Class based component</h3>
      <Random/>
    </>
  );
}

export default App;
