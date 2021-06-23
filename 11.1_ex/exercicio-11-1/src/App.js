import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const listItems = ['farra', 'ping', 'foguete'];

  return (
    <div className="App">
      <ul>
        { listItems.map((item) => Task(item)) }
      </ul>
    </div>
  );
}

export default App;
