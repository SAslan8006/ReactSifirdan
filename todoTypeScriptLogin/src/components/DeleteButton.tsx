import React from "react";

function DeleteButton({ id, setTodos }: any) {
  return (
    <button
      onClick={() => {
        setTodos((prev) => prev.filter((t) => t.id !== id));
      }}
    >
      ❌
    </button>
  );
}

export default DeleteButton;
