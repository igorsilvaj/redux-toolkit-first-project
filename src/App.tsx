import reactLogo from "./assets/react.svg";
import reduxLogo from "./assets/redux.svg";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reduxLogo} className="logo" alt="Redux logo" />
        </a>
      </div>
      <h1>Redux Toolkit</h1>
      <Counter />
    </div>
  );
}

export default App;
