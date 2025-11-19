import { useState } from "react";
import Dialog from "./Dialog"
import SideBar from "./SideBar"

function Main() {
    const [displayDIalog, setDisplayDialog] = useState(false);
    const [closeDialog, setCloseDialog] = useState(true);
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState({ title: "", description: "", date: "" });

  return (
    <main className="p-4 grid grid-cols-3">
        <SideBar /> 
        <div className="col-span-2">
            <h1 className="text-3xl font-bold mb-4">Main Content Area</h1>
            <button className="bg-gray-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-600" onClick={() => setDisplayDialog(!displayDIalog)}>
                add a task
            </button>
            {displayDIalog && <Dialog closeDialog={closeDialog} setCloseDialog={setCloseDialog} taskInput={taskInput} setTaskInput={setTaskInput}/>}
        </div>
    </main>
  )
}
export default Main