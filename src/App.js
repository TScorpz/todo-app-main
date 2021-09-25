import './App.css';
import TodoList from './todoList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>TODO</h1>
        <div className="theme-toggle">
          <img src="" alt="" />
        </div>
      </header>
      <TodoList></TodoList>
    </div>
  );
}

export default App;