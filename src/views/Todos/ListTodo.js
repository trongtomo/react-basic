import React from "react";
import AddTodo from "./AddTodo";
import "./ListTodo.scss";
import { toast } from "react-toastify";
import Color from "../HOC/Color";
class listTodos extends React.Component {
  state = {
    listTodos: [
      { id: "todo 1", title: "Doing Yoga" },
      { id: "todo 2", title: "Coding" },
      { id: "todo 3", title: "Gaming" },
    ],
    editTodo: {},
  };
  addNewTodo = (todo) => {
    let currentlistTodos = this.state.listTodos;
    currentlistTodos.push(todo);
    this.setState({
      listTodos: currentlistTodos,
      //listTodos:[...this.state.listTodos, todo]
    });
    toast.success("Wow so ez!");
  };
  handleEditTodo = (todo) => {
    let { editTodo, listTodos } = this.state;

    let isEmptyObj = Object.keys(editTodo).length === 0;

    //save
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodosCopy = [...listTodos];

      let objIndex = listTodosCopy.findIndex((item) => item.id === todo.id);

      listTodosCopy[objIndex].title = editTodo.title;

      this.setState({
        listTodos: listTodosCopy,
        editTodo: {},
      });
      toast.success("Update todo succeed!");
      return;
    }

    //edit
    this.setState({
      editTodo: todo,
    });
  };
  handleDeleteTodo = (todo) => {
    let curretTodo = this.state.listTodos;
    curretTodo = curretTodo.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: curretTodo,
    });
    toast.success("Delete Success");
  };
  handleOnChangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };
  render() {
    let { listTodos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    // let listTodo = this.state.listTodo;
    return (
      <>
        <p> Simple Todo Apps</p>
        <div className="list-todo-container">
          <AddTodo addNewTodo={this.addNewTodo} />
          <div className="list-todo-content">
            {listTodos &&
              listTodos.length > 0 &&
              listTodos.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    {isEmptyObj === true ? (
                      <span>
                        {" "}
                        {index + 1} - {item.title}
                      </span>
                    ) : (
                      <>
                        {editTodo.id === item.id ? (
                          <span>
                            {index + 1}-{" "}
                            <input
                              value={editTodo.title}
                              onChange={(event) =>
                                this.handleOnChangeEditTodo(event)
                              }
                            />
                          </span>
                        ) : (
                          <span>
                            {" "}
                            {index + 1} - {item.title}
                          </span>
                        )}
                      </>
                    )}
                    <button
                      className="edit"
                      onClick={() => this.handleEditTodo(item)}
                    >
                      {isEmptyObj === false && editTodo.id === item.id
                        ? "Save"
                        : "Edit"}
                    </button>
                    <button
                      className="delete"
                      onClick={() => this.handleDeleteTodo(item)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}
export default Color(listTodos);
