import React from 'react'
import TodoApp from './components/TodoApp'

const App = () => {
  return (
    <body className=' h-[100vh] w-[100vw]  overflow-hidden  bg-black  flex justify-center items-center'>
       <div className=' w-[50vw] flex flex-col gap-5 items-center  '>
           <div className=' w-full p-3 rounded-lg  bg-slate-900'>
            <h1 className=' text-center font-extrabold text-3xl text-slate-200  '>Todo App</h1>
           </div>
          <TodoApp />
       </div>
    </body>
  )
}

export default App