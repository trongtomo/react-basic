import React, { Component } from "react";

class ChildComponents extends Component {
  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("check data:", this.state);
  };
  state = {
    firstName: "",
    lastName: "",
  };
  render() {
    return (
      //this. la chi vao component hien tai
      <section>
        <div>ChildComponents : {this.props.name}</div>
      </section>
    );
  }
}
export default ChildComponents;
