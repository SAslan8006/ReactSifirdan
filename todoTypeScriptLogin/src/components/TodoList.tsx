import React from "react";
import DeleteButton from "./DeleteButton";

export const todos1 = [
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
  const [todos, setTodos] = React.useState([
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
  ]);
  return (
    <ul>
      {todos.map((todo) => (
        <div className="flex justify-between items-center pr-2 h-[50px] text-[14px] ">
          <li
            key={todo.id}
            className={`flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-b-[rgba(0,0,0,0.08)]`}
            onClick={() => {
              setTodos(
                todos.map((t) => {
                  if (t.id === todo.id) {
                    return { ...t, completed: !t.completed };
                  }
                  return t;
                })
              );
            }}
          >
            <span
              className={`${todo.completed ? "line-through text-[#ccc]" : ""}`}
            >
              {todo.content}
            </span>
          </li>
          <DeleteButton setTodos={setTodos} id={todo.id} />
        </div>
      ))}
    </ul>
  );
}

export default TodoList;
