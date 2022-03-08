import logo from "./logo.svg";
import "./App.scss";
import MyComponents from "./Example/MyComponents";
import ListTodo from "./Todos/ListTodo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigaton from "./Navigation/Navigation";
import Home from "./Example/Home";
import { Routes, Route } from "react-router-dom";

/**
 * const App = () =>{}
 *
 * 2 components: class components va function components (function, arrow)
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigaton />
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<ListTodo />} />
          <Route path="/mycomponent" element={<MyComponents />} />
        </Routes>
      </header>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
