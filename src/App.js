import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import {
  incrementHandler,
  decrementHandler,
  resetHandler
} from "./redux/action";

export default function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);
  const plus = () => {
    dispatch(incrementHandler());
  };
  const reset = () => {
    dispatch(resetHandler());
  };

  return (
    <div className="App">
      <button onClick={plus}>+</button>
      <h3>{count}</h3>
      <button
        onClick={() => {
          dispatch(decrementHandler());
        }}
      >
        -
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}