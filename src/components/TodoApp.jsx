import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TodoList from './TodoList';
import toast from 'react-hot-toast';
import { addTodo } from '../redux/todoslice';
import { format } from 'date-fns';



const TodoApp = () => {
    const {todos} = useSelector(state=>state.todos);
    const [inputvalue,setInputValue] = useState('');  
    const diapatch = useDispatch();
    const [filter,setFilter] = useState('all');
    const addnewtodo =()=>{
        if(inputvalue === '' || inputvalue.trim() === ''){
            toast.error('Please Enter a Todo');
            return;
        }
        const newtodo = {
            id:crypto.randomUUID(),
            title:inputvalue,
            completed:false,
            createdAt:format(new Date(Date.now()), 'hh:mm a dd - MMM - yyyy')
        }
        diapatch(addTodo(newtodo));
        toast.success('Todo Added Successfully');
        setInputValue('');
    }  
  return (
    <div className='  w-full rounded-lg flex flex-col gap-3 pb-5  bg-slate-900'>
        <div className=' pb-3 border-b-[1px] border-slate-600'>
            <div className=' p-3'>
            <form onSubmit={(e)=>{
                e.preventDefault();
                addnewtodo();
            }}>
            <input value={inputvalue} onChange={(e)=>setInputValue(e.target.value)} type="text" className='w-full p-2 rounded-lg bg-slate-800 border-none outline-none text-slate-200' placeholder='Enter your task to do' />
            </form>
            <div className='w-full  flex justify-between'>
                <button onClick={addnewtodo} className='bg-slate-800 p-2 rounded-lg text-slate-200 mt-3'>Add Todo</button>
                <select value={filter} onChange={(e)=>setFilter(e.target.value)} className='bg-slate-800 p-2 border-none outline-none rounded-lg text-slate-200 mt-3'>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incomplete">Incomplete</option>
                </select>
            </div>
            </div>
        </div>
        <div className=' w-full p-2'>
            {
            todos.length === 0 ? <h1 className=' text-xl font-bold text-white text-center'>Start Adding Your Todos</h1> : <TodoList todos={
                filter === 'all' ? todos : filter === 'completed' ? todos.filter(todo=>todo.completed) : todos.filter(todo=>!todo.completed)
            } />
        }
        </div>
    </div>
  )
}

export default TodoApp