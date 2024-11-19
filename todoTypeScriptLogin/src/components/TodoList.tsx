import React from "react";
import DeleteButton from "./DeleteButton";

const todos1 = [
  {
    id: 1,
    content: "Todo 1",
    completed: true,
  },
  {
    id: 2,
    content: "Todo 2",
    completed: false,
  },
  {
    id: 3,
    content: "Todo 3",
    completed: true,
  },
];
function TodoList() {
  const [todos, setTodos] = React.useState(todos1);
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <div key={todo.id}>
            <li
              className={`flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-b-[rgba(0,0,0,0.08)]`}
            >
              <span
                className={`${
                  todo.completed ? "line-through text-[#ccc]" : ""
                }`}
              >
                {todo.content}
              </span>
              <DeleteButton />
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
