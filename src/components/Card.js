import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Card({card}){
    const {taskRemover}=useContext(AppContext);
    const b=card.state==='complete';
    console.log(b);
    return (
    <div className="flex justify-between border mx-2 my-4 bg-white p-2 rounded-md">
    <div className="">
    <p className={`text-base ${b ? 'line' : ''} text-slate-500`}>{card.title}</p>
    {/* <p className="text-xs"><span>{card.time}</span> <span>{card.date}</span></p> */}
    <p>{card.index}</p>
    </div>
    <button onClick={()=>{taskRemover(card.index);}}>Delete</button>
    </div>
    )
}

export default Card;