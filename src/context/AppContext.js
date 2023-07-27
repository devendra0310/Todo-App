import { createContext, useState } from "react";

export const AppContext=createContext("");

function AppContextProvider({children}){
    const [all,setAll]=useState([]);
    const [complete,setComplete]=useState([]);
    const [incomplete,setIncomplete]=useState([]);
    const [addData,setAddData]=useState({
        title:"",
        state:"incomplete"
    })
    const [status,setStatus]=useState("all");

    function handleStatus(event){
        setStatus(()=>{
            return event.target.value;
        })
    }
    function handleAddPage(event){
        setAddData((prev)=>{
            return {...prev,[event.target.name]:event.target.value}
        })
    }

    function AddHandler(event){
        event.preventDefault();
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
        AddHandler
    }
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider;