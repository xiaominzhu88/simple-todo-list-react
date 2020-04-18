import React from "react";
import "./App.css";
import ToDoList from "./toDoList";
import image from "./ausdemweg.jpg";

export default function App() {
  return (
    <div className="App">
      <img src={image} alt='Kaffee' />
      <ToDoList />
    </div>
  );
}
