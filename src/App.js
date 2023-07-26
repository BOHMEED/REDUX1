import logo from './logo.svg';
import './App.css';
import Addtask from './components/Addtask';
import Listtask from './components/Listtask';

function App() {
  return (
    <div className="App">
      <Addtask />
      <Listtask />
    </div>
  );
}

export default App;
