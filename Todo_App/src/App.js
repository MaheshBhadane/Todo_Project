import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);

  const onAddTodo = (todo) => setTodos([...todos, todo]);

  const onRemoveTodo = (todo) =>
    setTodos(todos.filter((i) => i.title !== todo.title));
 
    return (
    <div className="todo-app">
      <TodoForm onAddTodo={onAddTodo} />
      <TodoList todos={todos} onRemoveTodo={onRemoveTodo} />
    </div>
  );
}
