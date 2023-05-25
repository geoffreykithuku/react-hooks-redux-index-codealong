import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";
function TodoContainer() {

  const todolist = useSelector((state) => state.todos.entities)
  
  return <div>
    {todolist && todolist.map((todo, index) => {
     return <Todo todo={todo} key={index} />
    })}
  </div>;
}

export default TodoContainer;
