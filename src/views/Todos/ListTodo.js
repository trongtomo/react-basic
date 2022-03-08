import React from "react";
import AddTodo from "./AddTodo";
import "./ListTodo.scss";
import { toast } from "react-toastify";
class ListTodo extends React.Component {
  state = {
    ListTodo: [
      { id: "todo 1", title: "Doing Yoga" },
      { id: "todo 2", title: "Coding" },
      { id: "todo 3", title: "Gaming" },
    ],
  };
  addNewTodo = (todo) => {
    let currentListTodo = this.state.ListTodo;
    currentListTodo.push(todo);
    this.setState({
      ListTodo: currentListTodo,
      //ListTodo:[...this.state.ListTodo, todo]
    });
    toast.success("Wow so ez!");
  };
  render() {
    let { ListTodo } = this.state;
    // let listTodo = this.state.listTodo;
    return (
      <div className="list-todo-container">
        <AddTodo addNewTodo={this.addNewTodo} />
        <div className="list-todo-content">
          {ListTodo &&
            ListTodo.length > 0 &&
            ListTodo.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  <span>
                    {" "}
                    {index + 1} - {item.title}
                  </span>
                  <button className="edit">Edit</button>
                  <button className="delete">Delete</button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default ListTodo;
