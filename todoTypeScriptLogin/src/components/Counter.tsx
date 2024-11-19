import { useState } from "react";
import { todos1 } from "./TodoList";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <p
      onClick={() => {
        const c = todos1.forEach((todo) => {
          if (todo.completed == true) {
            setCount(count + 1);
          }
        });
      }}
    >
      <b> {count}</b> / 0 todos completed
    </p>
  );
}
