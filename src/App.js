import './App.css';
import AddWindow from './components/AddWindow';
import Home from './components/Home';

function App() {
  return (
    <div className="flex">
    <Home/>
      <AddWindow/>
    </div>
  );
}

export default App;
