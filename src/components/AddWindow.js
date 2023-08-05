import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function AddWindow(){
    const {addData,handleAddPage,AddHandler,addWind,setAddWind}=useContext(AppContext);
    return (
        <div className="w-[100vw] h-[100vh] flex justify-center absolute top-40">
            <div className="w-[500px] flex flex-col items-end">
        <button onClick={()=>{setAddWind(!addWind)}}>Close</button>
            <div className="w-[500px] bg-slate-100 p-4 rounded-md">
        <h2 className="font-bold text-slate-500 text-xl mb-4">Add TODO</h2>
        <form onSubmit={AddHandler}>
            <div className="flex flex-col mb-4">
            <label className="text-lg text-slate-500 mb-1" htmlFor="title">Title</label>
            <input className="text-lg text-slate-500 rounded-md" type="text" name="title" value={addData.title} onChange={handleAddPage}></input>
            </div>
            <div className="flex flex-col mb-4">
                <label  htmlFor="state" className="text-lg text-slate-500 mb-1">Status</label>
                <select name="state" className="rounded-md text-lg" value={addData.state} onChange={handleAddPage}>
                    <option value="incomplete">Incomplete</option>
                    <option value="complete">Completed</option>
                </select>
            </div>
            <button className="bg-blue-500 p-1 text-white rounded-md px-2">Add Task</button>
        </form>
        </div>
        </div>
        </div>
    )
}

export default AddWindow;