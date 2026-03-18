import './App.css';
import Example from './components/Example';
import { Random } from './components/Random';
import User from './components/User';

function App() {
  //js code
  const subjectName = "ReactJS";
  const userName = "Virat Kohli";
  return (
    //jsx code
    <>
      <h1 style={{textAlign: 'center', color: 'blue'}}>Hello World!!!</h1>
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
