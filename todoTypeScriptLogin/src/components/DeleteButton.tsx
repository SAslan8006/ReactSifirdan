import React from "react";

function DeleteButton({ id, setTodos }: any) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        setTodos((prev) => prev.filter((t) => t.id !== id));
      }}
    >
      ❌
    </button>
  );
}

export default DeleteButton;
