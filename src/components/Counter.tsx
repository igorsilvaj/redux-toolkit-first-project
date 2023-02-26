import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/slices/counterSlice";

export default function Counter() {
  const count = useSelector((state: any) => state.counter.count);
  const dispatch = useDispatch();
  const [intervalId, setIntervalId] = useState(0);

  const mouseDown = ({target} : any) => {
    let id:number = 0;
    if (target.name === 'increment') {
      id = window.setInterval(() => dispatch(increment()), 100);
    }
    if (target.name === 'decrement') {
      id = window.setInterval(() => dispatch(decrement()), 100);
    }
    setIntervalId(id);
  };

  const mouseUp = () => {
    clearInterval(intervalId);
  };

  return (
    <div className="card">
      <div className="container">
        <input type="text" placeholder={count} disabled />
      </div>
      <div className="container">
        <button
          type="button"
          name="increment"
          onClick={() => dispatch(increment())}
          onMouseDown={(e) => mouseDown(e)}
          onMouseUp={() => mouseUp()}
        >
          +1
        </button>
        <button
          type="button"
          name="decrement"
          onClick={() => dispatch(decrement())}
          onMouseDown={(e) => mouseDown(e)}
          onMouseUp={() => mouseUp()}
        >
          -1
        </button>
      </div>
    </div>
  );
}
