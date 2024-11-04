import React, { useState } from 'react'
import { FaCheck, FaRegEdit } from 'react-icons/fa'
import { IoMdRemoveCircleOutline } from 'react-icons/io'
import { useDispatch } from 'react-redux';
import { TodoType } from '../types/Types';
import { removeTodoById, toggleTodoById, updateTodoById } from '../redux/todoSlice';
interface TodoProps {
  todoProps: TodoType
}


function Todo({ todo }: TodoProps) {
  const { id, content, completed } = todo;
  const dispatch = useDispatch();

    const [editable, setEditable] = useState<boolean>(false);
    const [newTodo, setNewTodo] = useState<string>(content);
  const handleRemoveTodo = () => {
    dispatch(removeTodoById(id));
}

const handleUpdateTodo = () => {
  const request: TodoType = {
    id: id,
    content: newTodo,
    completed: completed
  }
  dispatch(updateTodoById(request));
  setEditable(false);
}
  return (
    <div onClick={() => dispatch(updateTodoById({id, content: newTodo, completed: !completed}))} style={{ display: 'flex',flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', border: '1px solid lightgrey', padding: '16px',borderRadius: '5px', marginTop: '25px', backgroundColor:completed?"green":"red" }}>
      {editable ? (
        <input
          value={newTodo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
          style={{ width: '380px' }}
          className='todo-input'
          type="text"
        />
      ) : (
        <p style={{ width: '380px' }}>{content}</p>
      )}
       <div>
                <IoMdRemoveCircleOutline onClick={handleRemoveTodo} className='icons' style={{ marginRight: '8px' }} />
                {editable ? <FaCheck className='icons' onClick={handleUpdateTodo} /> : <FaRegEdit onClick={() => setEditable(true)} className='icons' />}

            </div>
    </div>
  )
}

export default Todo
