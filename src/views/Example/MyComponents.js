import React, { Component } from "react";

class MyComponents extends Component {
  //state la object Key:value
  state = {
    name: "",
    age: "24",
  };
  handleOnChangeName = (event) => {
    //tu dong merge,chi can set thay doi
    this.setState({
      name: event.target.value,
    });
  };
  handleClickButton = () => {
    alert("click me");
  };
  //re render
  render() {
    return (
      //this. la chi vao component hien tai
      <section>
        <div>
          hello my name is {this.state.name} and my age is {this.state.age}
        </div>
        <div>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeName(event)}
          />
        </div>
        <div>
          <button
            onClick={() => {
              this.handleClickButton();
            }}
          >
            Click me
          </button>
        </div>
      </section>
    );
  }
}
export default MyComponents;
