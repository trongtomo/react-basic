import React from "react";
import "./Navigation.scss";
class Navigaton extends React.Component {
  render() {
    return (
      <div className="topnav">
        <a className="active" href="/">
          Home
        </a>
        <a href="/todo">Todo</a>
        <a href="/mycomponent">My Component</a>
      </div>
    );
  }
}
export default Navigaton;
