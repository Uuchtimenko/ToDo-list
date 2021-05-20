import './App.css';
import InputToDo from './components/InputToDo'
import ButtonAdd from './components/ButtonAdd'

function App() {
  return (
    <div className="App">
      <header>
      <h1>ToDo-list (Ustimenko)</h1>
      </header>
      <div className='Input'>
        <InputToDo />
        <ButtonAdd />
      </div>    
    </div>
  );
}

export default App;
