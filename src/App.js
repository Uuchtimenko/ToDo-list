import './App.css';
import InputToDo from './components/InputToDo';
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
      </div>
      <div className='Buttons'>
        <ButtonSortByStatus />    
        <ButtonSortByDate />
      </div>  
      <div className='ToDoList'>
      
      </div>
    </div>
  );
}

export default App;
