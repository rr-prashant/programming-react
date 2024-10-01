import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todo() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [val, setVal] = useState('')



  return (
    <>
        {todos.map((todo) => (
           
            
            
            <div key={todo.id} className='flex justify-between'>
                 <input
                 
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg text-white ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                }`}
                value={todo.text}
                onChange={(e) => setVal(e.target.value)}
                readOnly={!isTodoEditable}
            />
            <button onClick={ () => {
                if (isTodoEditable){
                    {dispatch(updateTodo({ id: todo.id, text: val} ))}
                    setIsTodoEditable(false)
                } else{
                    setIsTodoEditable((prev) => !prev)
                }
            }
            
                
            }> {isTodoEditable? "Save" : "Edit"}</button>
            <button onClick={() => dispatch(removeTodo(todo.id))} className=''>X</button>
           
            </div>
            
        ))}
    </>
  )
}

export default Todo