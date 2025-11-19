import { useState } from 'react'
import './App.css'
import Main from './components/Main';

function App() {

  const [displayMain, setDisplayMain] = useState(false);

  return (
    <div className='min-h-screen bg-gray-100'>
      <div className='flex flex-col items-center justify-center gap-6 pt-20'>
        <div>
          <img src="#" alt="logo" />
        </div>
        <h1 className='text-8xl text-blue-500'>
          Todo List
        </h1>
        <div>
          <button className='bg-blue-500 px-5 py-2 rounded-md text-white font-bold cursor-pointer hover:bg-blue-600' onClick={() => setDisplayMain(!displayMain)}>Start Now</button>
        </div>
      </div>

        <div>
          <h1 className="text-2xl font-bold mb-4">Welcome to the Todo List App</h1>
          <p className="mb-4">Here you can manage your tasks efficiently and stay organized.</p>
          <ul className="list-disc list-inside">
              <li className="mb-2">Add new tasks to your todo list.</li>
              <li className="mb-2">Mark tasks as completed.</li>
              <li className="mb-2">Delete tasks you no longer need.</li>
          </ul>
        </div>

      {displayMain && (<Main />)}
    </div>
  )
}

export default App
