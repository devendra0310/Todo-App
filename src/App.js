import './App.css';
import AddWindow from './components/AddWindow';
import Home from './components/Home';

function App() {
  return (
    <div className="flex bg-slate-50 gap-2">
    <Home/>
      <AddWindow/>
    </div>
  );
}

export default App;
