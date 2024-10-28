import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/counter/counterSlice";
import UserList from './UserList';

function App() {
  const { value } = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div style={{ border: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h1>{value}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        <UserList />
      </div>
    </>
  );
}

export default App;
