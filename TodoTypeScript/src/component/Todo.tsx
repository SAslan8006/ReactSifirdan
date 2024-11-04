import React, { useState } from 'react'
import { FaCheck, FaRegEdit } from 'react-icons/fa'
import { IoMdRemoveCircleOutline } from 'react-icons/io'
import { useDispatch } from 'react-redux';
import { TodoType } from '../types/Types';
interface TodoProps {
  todoProps: TodoType
}


function Todo({ todoProps }: TodoProps) {
  // const { id, content } = todoProps;
  // const dispatch = useDispatch();

    const [editable, setEditable] = useState<boolean>(false);
    // const [newTodo, setNewTodo] = useState<string>(content);
  const handleRemoveTodo = () => {
}

const handleUpdateTodo = () => {
 
}
  return (
    <div style={{ display: 'flex',flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', border: '1px solid lightgrey', padding: '16px',borderRadius: '5px', marginTop: '25px' }}>
      <div>Todo</div>
       <div>
                <IoMdRemoveCircleOutline onClick={handleRemoveTodo} className='icons' style={{ marginRight: '8px' }} />
                {editable ? <FaCheck className='icons' onClick={handleUpdateTodo} /> : <FaRegEdit onClick={() => setEditable(true)} className='icons' />}

            </div>
    </div>
  )
}

export default Todo
