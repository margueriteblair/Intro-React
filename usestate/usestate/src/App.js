import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('blue')

 // const count = state.count
  // const theme = state.theme

  function decrementCount() {
    setCount((prevCount) => prevCount - 1)
  }

  function  incrementCount() {
    setCount(prevCount => prevCount + 1)
    setTheme('purple')
  }
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  )}

export default App;
