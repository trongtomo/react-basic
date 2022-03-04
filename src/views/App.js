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
        <MyComponents></MyComponents>
      </header>
    </div>
  );
}

export default App;
