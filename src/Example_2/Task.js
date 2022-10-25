import { Type } from "../Types";

export default function Task({ todo, dispatch }) {
  return (
    <>
      <li
        className="list-group-item d-flex justify-content-between"
        key={todo.id}
        style={{ background: todo.complete ? "#AAA" : "" }}
      >
        <span className="mt-2">{todo.task}</span>
        <div className="d-flex">
          <button
            className="btn btn-light"
            onClick={() =>
              dispatch({ type: Type.TOGGLE_TODO, payload: { id: todo.id } })
            }
          >
            <span role="img" aria-labelledby="">
              ✅
            </span>
          </button>
          <button
            className="btn btn-light"
            onClick={() =>
              dispatch({
                type: Type.DELETE_TODO,
                payload: { id: todo.id }
              })
            }
          >
            <span role="img" aria-labelledby="">
              ❌
            </span>
          </button>
        </div>
      </li>
    </>
  );
}
