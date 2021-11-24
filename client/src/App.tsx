import React, { MouseEvent, useState } from 'react';
import './App.css';
import Home from './components/Home'

function App() {
  const [count, setCount] = useState<number>(0)

  const changeCount = (event: MouseEvent<HTMLButtonElement>) =>{
    const newCount: number = count + 1
    setCount(newCount)
  }
  
  return (
    <div className="App">
      <h1>Este es un Header</h1>
      <p>{count}</p>
      <button className="addBtn" onClick={changeCount}>Add</button>
      <Home/>
    </div>
  );
}

export default App;
