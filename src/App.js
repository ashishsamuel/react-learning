import './App.css';
import Example from './components/Example';
import { Random } from './components/Random';

function App() {
  //js code
  const subjectName = "ReactJS";
  return (
    //jsx code
    <>
      <h1>Hello World!!!</h1>
      <p>course : {subjectName}</p>
      <h3>Child Function based Component</h3>
      <Example/>
      <h3>Child Class based component</h3>
      <Random/>
    </>
  );
}

export default App;
