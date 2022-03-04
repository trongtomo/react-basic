import React, { Component } from "react";
import ChildComponents from "./ChildComponents";
class MyComponents extends Component {
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
        <form>
          <label htmlFor="fname">First name: </label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleChangeFirstName(event)}
          />
          <br />
          <label htmlFor="lname">Last name: </label>
          <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleChangeLastName(event)}
          />
          <br />
          <input type="submit" onClick={(event) => this.handleSubmit(event)} />
          <br />
        </form>
        <ChildComponents name={"Trong"} age={"25"} />
      </section>
    );
  }
}
export default MyComponents;
