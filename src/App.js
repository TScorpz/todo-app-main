import './App.css';
import NewTodo from './newTodo';

function App() {
  return (
    <div className="App">
      <header>
        <h1>TODO</h1>
        <div className="theme-toggle">
          <img src="" alt="" />
        </div>
      </header>
      <NewTodo></NewTodo>
    </div>
  );
}

export default App;