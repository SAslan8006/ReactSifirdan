import { useTodosContext } from "../lib/hooks";

export default function DeleteButton({ id }: { id: number }) {
  const { deleteTodo } = useTodosContext();

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        deleteTodo(id);
      }}
    >
      ❌
    </button>
  );
}
