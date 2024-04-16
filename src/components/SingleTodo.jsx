import React, { useState } from 'react'
import { MdEdit , MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo, updateTodo } from '../redux/todoslice';
import toast from 'react-hot-toast';


const SingleTodo = ({todo}) => {
    const dispatch = useDispatch();
    const [updateMode,setUpdateMode] = useState(false);
    const [updateValue,setUpdateValue] = useState(todo.title);

    const updatetodo = ()=>{
        if(updateValue === '' || updateValue.trim() === '' ){
            toast.error('Please Enter a Todo');             
            return;
        }
        if(updateValue === todo.title){
            toast.error('Please Enter a different Todo');
            return;
        }
        dispatch(updateTodo({
            ...todo,
            title:updateValue
        }));
        setUpdateMode(false);
        toast.success('Todo Updated Successfully');
    }
  return (
    <div className=' w-full flex justify-between items-center border-b-[0.5px] pb-2 border-slate-600'>
        
        {
            updateMode ? 
            <div className=' py-2 w-full flex  gap-3'>
                <input onChange={(e)=>setUpdateValue(e.target.value)} type="text" className='w-full p-2 rounded-lg bg-slate-800 border-none outline-none text-slate-200' value={updateValue} />
                <div className=' flex gap-3'>
                    <button onClick={updatetodo} className=' p-3 rounded-md bg-blue-800 text-white font-bold'>Update</button>
                    <button className=' p-3 rounded-md bg-red-700 text-white font-bold' onClick={()=>setUpdateMode(false)}>Cancel</button>
                </div>
            </div>
            :
            <>
        <div className=' max-w-[75%] flex  items-center gap-2'>
        <div>
            <div onClick={()=>{
                dispatch(toggleTodo(todo?.id));
            }} className=' cursor-pointer flex justify-center items-center h-[35px] w-[35px] rounded-md bg-slate-600'>
                {
                    todo?.completed ? <TiTick size={30} className=' text-green-500'/> : null
                }
            </div>
        </div>
        <div className=' whitespace-nowrap   w-full '>
            <p className={`break-words text-wrap  text-slate-200 ${todo?.completed?' text-slate-400':'font-bold'}`}>{todo?.title}</p>
            <p>
                <span className=' text-sm text-slate-400 '>
                    {todo?.createdAt}</span>
            </p>
        </div>
        </div>

        <div className=' flex gap-3'>
            <button onClick={()=>setUpdateMode(true)} className=' h-[35px] w-[35px] flex justify-center items-center p-2 rounded-md bg-blue-800  '>
                <MdEdit  className='  text-slate-200'/>
            </button>
            <button onClick={()=>{
                dispatch(removeTodo(todo?.id));
                toast.success('Todo Removed Successfully');
            }} className=' h-[35px] w-[35px] flex justify-center items-center p-2 rounded-md  bg-slate-700  '>
                <MdDelete  className='  text-pink-700 '/>
            </button>
        </div>
            </>
        }

    </div>
  )
}

export default SingleTodo