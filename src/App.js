import './App.css';
import InputToDo from './components/InputToDo';
import ButtonAdd from './components/ButtonAdd';
import ButtonSortByStatus from './components/ButtonSortByStatus';
import ButtonSortByDate from './components/ButtonSortByDate';

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
        <ButtonSortByStatus />    
        <ButtonSortByDate />  
    </div>
  );
}

export default App;
