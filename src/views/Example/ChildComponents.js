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
    // let name = this.props.name
    // let age = this.props.age
    let { name, age } = this.props;
    return (
      //this. la chi vao component hien tai
      <section>
        <div>
          ChildComponents : {name}-{age}
        </div>
      </section>
    );
  }
}
export default ChildComponents;
