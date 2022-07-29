import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const { todos = [], onRemoveTodo } = props;
  return (
    <>

     {todos.map((todo) => (
        <TodoItem todo={todo} onRemoveTodo={onRemoveTodo} />
      ))}
    </>
  );
};

export default TodoList;
