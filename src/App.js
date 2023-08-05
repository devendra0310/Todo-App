import { useContext } from 'react';
import './App.css';
import AddWindow from './components/AddWindow';
import Home from './components/Home';
import { AppContext } from './context/AppContext';

function App() {
  const {addWind}=useContext(AppContext);
  return (
    <div className="bg-slate-50 h-[100vh]">
    <Home/>
      {
        addWind ? (<AddWindow/>) : (<div></div>)
      }
    </div>
  );
}

export default App;
