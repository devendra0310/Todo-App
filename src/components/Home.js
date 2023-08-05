import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Card from './Card';
import Empty from './Empty';

function Home(){
    const {status,handleStatus,all,complete,incomplete,addWind,setAddWind}=useContext(AppContext);
    const a=all.length;
    const b=complete.length;
    const c=incomplete.length;
    return (
        <div className={` flex justify-center ${addWind ? 'opac' : ''} `}>
          <div className='w-[700px] flex flex-col mt-6'>
      <div className='w-[700px] mb-8 flex justify-center'>
      <h className='text-5xl font-bold text-slate-500'>
        TODO LIST
      </h>
      </div>
      <div className='flex justify-between'>
        <div className='bg-blue-500 text-white p-2 rounded-md text-xl' >
        <button onClick={()=>{setAddWind(!addWind);}}>
          Add Task
        </button>
        </div>
          <select className='bg-gray-300 text-white p-2 rounded-md text-xl' name='status' value={status} onChange={handleStatus}>
          <option value="all">All</option>
          <option value="complete">Completed</option>
          <option value="incomplete">Incomplete</option>
          </select>

      </div>
      <div className='bg-gray-100 mt-6 p-4 flex flex-col items-center rounded-md'> 
      {
        status==="all" ? (
            all.map((card)=>{
                return <Card card={card} />
            })
        ) : (
            status==="complete" ? (
                complete.map((card)=>{
                return <Card card={card} />
            })
            ) : (
                  incomplete.map((card)=>{
                return <Card card={card} />
            })
            )
        )
      }
      {
        a===0 && status==="all" ? (<Empty/>) : (<div></div>)
      }
      {
        b===0 && status==="complete" ? (<Empty/>) : (<div></div>)
      }
      {
        c===0 && status==="incomplete" ? (<Empty/>) : (<div></div>)
      }
      </div>
    </div>
        </div>
    )
}

export default Home;