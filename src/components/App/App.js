import './App.css';
import React, {useState} from 'react';
import Child from '../ChildHierarchies/Child/Child';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <p>count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <Child count={count} setCount={setCount} />
      </header>
    </div>
  );
}

export default App;
