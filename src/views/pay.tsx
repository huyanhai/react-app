import { store } from "../store";
const pay = () => {
  function addCount() {
    store.dispatch({
      type: "count/IN",
    });
  }

  return (
    <div>
      <div>count:{store.getState().count}</div>
      <div>todo count:</div>
      <button onClick={addCount}>add count</button>
      pay
    </div>
  );
};
export default pay;
