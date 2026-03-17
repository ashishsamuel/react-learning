import './App.css';
import Example from './components/Example';

function App() {
  //js code
  const subjectName = "ReactJS";
  return (
    //jsx code
    <>
      <h1>Hello World!!!</h1>
      <p>course : {subjectName}</p>
      <Example/>
    </>
  );
}

export default App;
