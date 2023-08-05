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
    const [addWind,setAddWind]=useState(false);

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
        let newComplete=complete.filter((card)=>{
            return card.index!==id;
        })
        setComplete(newComplete);
        let newIncomplete=incomplete.filter((card)=>{
            return card.index!==id;
        })
        setIncomplete(newIncomplete);
      }

    function AddHandler(event){
        event.preventDefault();
        const uniq=uuid();
        const newData={...addData,index:uniq};
        setAddData(newData);
        setAll([...all,newData]);
        if(addData.state==="complete")
        setComplete([...complete,newData]);
        else if(addData.state==="incomplete")
        setIncomplete([...incomplete,newData]);   
        setAddWind(!addWind);
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
        addWind,
        setAddWind
    }
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider;