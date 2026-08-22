
import { useState } from 'react';
import './App.css';

function App() {
  let [counter, setCounter] = useState(10)
  
  const addValue = () =>
  {
    if(counter < 20)
    setCounter(counter+1) 
  }
  const removeValue = () =>
  {
    if(counter > 0)
    setCounter(counter-1)
    
     
  }
  return (
    <div className="App">
      <header className="App-header">
       
      <h1>Chai or React</h1>
      <h2>Counter valuue: {counter}</h2>
      <button onClick={addValue}
      type="button" class="btn btn-outline-primary gap-1">add value :{counter} </button>&nbsp;&nbsp;
      <button onClick={removeValue}
      type="button" class="btn btn-outline-primary">remove value:{counter}</button>
      </header>
    </div>
  );
}

export default App;
