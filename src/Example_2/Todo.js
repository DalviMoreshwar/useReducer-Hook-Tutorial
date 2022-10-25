import { useReducer, useState } from "react";
import { Type } from "../Types";
import Task from "./Task";

function reducer(tasks, action) {
  const { type, payload } = action;
  switch (type) {
    case Type.ADD_TODO:
      return [...tasks, newTodo(payload.task)];

    case Type.TOGGLE_TODO:
      return tasks.map((task) => {
        if (task.id === payload.id) {
          return { ...task, complete: !task.complete };
        }
        return task;
      });

    case Type.DELETE_TODO:
      return tasks.filter((task) => task.id !== payload.id);

    default:
      return tasks;
  }
}

function newTodo(todo) {
  return { id: Date.now(), task: todo, complete: false };
}

export function Todo() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: Type.ADD_TODO, payload: { task } });
    setTask("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          placeholder="Upcoming task.."
          onChange={(e) => setTask(e.target.value)}
        />
      </form>
      <ul className="list-group mt-4">
        {todos.map((todo) => (
          <Task key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </ul>
    </>
  );
}
