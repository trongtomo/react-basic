import logo from "./logo.svg";
import "./App.scss";
import MyComponents from "./Example/MyComponents";
/**
 * const App = () =>{}
 *
 * 2 components: class components va function components (function, arrow)
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world !</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponents></MyComponents>
      </header>
    </div>
  );
}

export default App;
