//import logo from './logo.svg';
import './App.css';
import Card from'./components/cards'

function App() {
  let myObj = {
    username: "Alisha",
    age: 21
  }
  return (
    <div className="App">
      <header className="App-header">
         <h1 className ="bg-green-900 p-4 rounded-xl mb-4">Tailwind test</h1>
        <Card username = "Mia " btnText = "click me"/>
         <Card username = "Emma " />{/*btnText = "visit me"*/} 
      </header>
    </div>
  );
}

export default App;
