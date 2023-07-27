import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Card from './Card';

function Home(){
    const {status,handleStatus,all,complete,incomplete}=useContext(AppContext);
    return (
        <div className="w-[600px] flex flex-col">
      <div className='w-full mb-4'>
      <h1 className='text-4xl font-bold mx-auto'>
        TODO LIST
      </h1>
      </div>
      <div className='flex justify-between'>
        <div className='bg-blue-500 text-white p-2 rounded-md'>
        <button>
          Add Task
        </button>
        </div>
          <select className='bg-red-500 text-white p-2 rounded-md' name='status' value={status} onChange={handleStatus}>
          <option value="all">All</option>
          <option value="complete">Completed</option>
          <option value="incomplete">Incomplete</option>
          </select>

      </div>

      <div>
      {
        status==="all" ? (
            all.map((card,index)=>{
                return <Card key={index} card={card} />
            })
        ) : (
            status==="complete" ? (
                complete.map((card,index)=>{
                return <Card key={index} card={card} />
            })
            ) : (
                incomplete.map((card,index)=>{
                return <Card key={index} card={card} />
            })
            )
        )
      }
      </div>
    </div>
    )
}

export default Home;