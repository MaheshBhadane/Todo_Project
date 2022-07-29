import React from "react";
import { PRIORITIES_KEY_MAP } from "../constants";

const TodoItem = (props) => {
  const { todo = {}, onRemoveTodo } = props;
  const { title, description, priority, done } = todo;
  return (
    <div className={"flex"} style={{ justifyContent: "space-between" }}>
      <div>{title}</div>
      <div>{description}</div>
      <div>{PRIORITIES_KEY_MAP[priority]}</div>
      <div>
        
      <button><span
      onclick
          className={"edit"}
        >
          @
        </span>
        </button>

        <button><span
          onClick={() => {
            onRemoveTodo(todo);
          }}
          className={"remove"}
        >
          X
        </span>
        </button>
        
      </div>
    </div>
  );
};

export default TodoItem;
