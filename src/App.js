import Counter from "./Example_1/Counter";
import { Todo } from "./Example_2/Todo";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>useReducer Hook Tutorial</h1>
      <p>
        Counter application using <strong>useReducer</strong>
      </p>
      <Counter />

      <hr />

      <p>
        Todo application using <strong>useReducer</strong>
      </p>
      <Todo />
    </div>
  );
}
