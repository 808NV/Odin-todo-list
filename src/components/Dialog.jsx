function Dialog({ closeDialog, setCloseDialog, taskInput, setTaskInput }) {
  return (
    <>
    {closeDialog && ( <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50">
      <div className="bg-white p-10 h-100 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Task</h2>
        
        <div className="pb-4">
            <input type="text" placeholder="Enter your task here" className="border border-gray-300 p-2 w-full mb-4" 
                value={taskInput.title} onChange={(e) => setTaskInput({...taskInput, title: e.target.value})}
            />
            <input type="text" placeholder="Enter you task discreption" className="border border-gray-300 p-2 w-full mb-4" 
                value={taskInput.description} onChange={(e) => setTaskInput({...taskInput, description: e.target.value})}
            />
            <input type="date" className="border border-gray-300 p-2 w-full mb-4" 
                value={taskInput.date} onChange={(e) => setTaskInput({...taskInput, date: e.target.value})}
            />
            <p>{taskInput.title}</p>
            <p>{taskInput.description}</p>
            <p>{taskInput.date}</p>
            <button className="px-4 py-2 bg-gray-500 text-white rounded">Submit task</button>
        </div>

        <button className="px-6 py-2 bg-blue-500 text-white rounded" onClick={() => setCloseDialog(!closeDialog)}>Close</button>
      </div>
    </div>) }
   
    </>   
  );
}

export default Dialog;
