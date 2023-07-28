import { createContext, useState } from "react";
import {v4 as uuid} from 'uuid';
export const AppContext=createContext("");

function AppContextProvider({children}){
    const [all,setAll]=useState([]);
    const [complete,setComplete]=useState([]);
    const [incomplete,setIncomplete]=useState([]);
    const [addData,setAddData]=useState({
        title:"",
        state:"incomplete",
        index:0
    })
    const [status,setStatus]=useState("all");
    const [ind,setInd]=useState(0);

    function handleStatus(event){
        setStatus(()=>{
            return event.target.value;
        })
    }
    function handleAddPage(event){
        setAddData((prev) =>{
          return {...prev,[event.target.name]:event.target.value}
        })
      }

      function taskRemover(id){
        let newAll=all.filter((card)=>{
            return card.index!==id;
        })
        setAll(newAll);
      }

    function AddHandler(event){
        event.preventDefault();
        const uniq=uuid();
        setAddData((prev)=>{
            return {...prev,[addData.state]:uniq}
        })
        setAll([...all,addData]);
        if(addData.state==="complete")
        setComplete([...complete,addData]);
        else if(addData.state==="incomplete")
        setIncomplete([...incomplete,addData]);
        
    }
    const value={
        all,
        setAll,
        complete,
        setComplete,
        incomplete,
        setIncomplete,
        addData,
        setAddData,
        status,
        setStatus,
        handleStatus,
        handleAddPage,
        AddHandler,
        taskRemover,
        ind,
        setInd
    }
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider;