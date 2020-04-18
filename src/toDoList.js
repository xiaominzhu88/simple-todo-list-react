import React from "react";

export default class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      toDoListArray: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      userInput: event.target.value,
    });
  }

  handleClick() {
    const itemsArray = this.state.userInput.split(",");
    this.setState({
      toDoListArray: itemsArray,
    });
  }

  render() {
    const items = this.state.toDoListArray.map((item, index) =>
      item ? <li key={index}>{item}</li> : null
    );
    return (
      <div className="todo">
        <textarea
          onChange={this.handleChange}
          type="text"
          value={this.state.userInput}
          placeholder="Seperate items with commas"
        />
        <br />
        <button onClick={this.handleClick}>Create List</button>
        <h1>My To Do List</h1>
        <ol>{items}</ol>
      </div>
    );
  }
}
