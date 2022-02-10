import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../store";
import { setTodo } from "../store/todoSlice";

const Details = () => {
  const { id } = useParams();
  const todo = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{JSON.stringify(todo)}</div>
      <div>details - {id}</div>
      <button onClick={() => dispatch(setTodo({ name: `details - ${id}` }))}>change todo</button>
    </div>
  );
};

export default Details;
