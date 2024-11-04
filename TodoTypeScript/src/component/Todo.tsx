import React, { useState } from 'react'
import { FaCheck, FaRegEdit } from 'react-icons/fa'
import { IoMdRemoveCircleOutline } from 'react-icons/io'
import { useDispatch } from 'react-redux';
import { TodoType } from '../types/Types';
import { removeTodoById } from '../redux/todoSlice';
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
 
}
  return (
    <div style={{ display: 'flex',flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', border: '1px solid lightgrey', padding: '16px',borderRadius: '5px', marginTop: '25px' }}>
      <div>{content}</div>
       <div>
                <IoMdRemoveCircleOutline onClick={handleRemoveTodo} className='icons' style={{ marginRight: '8px' }} />
                {editable ? <FaCheck className='icons' onClick={handleUpdateTodo} /> : <FaRegEdit onClick={() => setEditable(true)} className='icons' />}

            </div>
    </div>
  )
}

export default Todo
