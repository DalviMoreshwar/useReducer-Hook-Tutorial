import { useReducer } from "react";
import { Type } from "../Types";

function reducer(state, action) {
  switch (action.type) {
    case Type.INCREMENT:
      return { count: state.count + 1 };
    case Type.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    dispatch({ type: Type.INCREMENT });
  };

  const decrement = () => {
    dispatch({ type: Type.DECREMENT });
  };

  return (
    <>
      <button className="btn btn-primary m-3" onClick={increment}>
        +
      </button>
      {state.count}
      <button className="btn btn-primary m-3" onClick={decrement}>
        -
      </button>
    </>
  );
}
