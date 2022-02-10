import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { RootState } from "../store";
import { incrementByAmount } from "../store/counterSlice";
import { setTodo } from "../store/todoSlice";

import styles from "./style/index.module.scss";

const pay = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const todo = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  function addCount() {
    dispatch(incrementByAmount(20));
  }

  function changeVal() {
    dispatch(
      setTodo({
        name: "this is todo",
        age: Math.round(Math.random() * 10),
      })
    );
  }

  return (
    <div className={styles["card"]}>
      <div className="tw-bg-slate-500">{JSON.stringify(todo)}</div>
      <div>count:{count}</div>
      <button onClick={addCount}>add count</button>
      <button onClick={changeVal}>change val</button>
      {[1, 2, 3, 4, 5, 6, 7].map((item) => {
        return (
          <li key={item}>
            <Link to={`/details/${item}`}>{item}</Link>
          </li>
        );
      })}
    </div>
  );
};
export default pay;
