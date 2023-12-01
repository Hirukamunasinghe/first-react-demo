import { useState } from 'react'
import './App.css'
import Button from './components/Button' 
function App() {

  const [count,setCount] = useState(0);
  const [isCounterHidden] = useState(false);

  const handleIncrement = ()=>{
    setCount(count + 1)
  }

  const handleDecrement =()=>{
    setCount(count - 1)
  }

  return(
    <div className='container'>
      {/* the button is created and the children of the props are increment and decrement */}
      <Button onClick={handleIncrement} iconLeft="+">Increment</Button>
      {/* hide the counter */}
      { isCounterHidden ? null: <p>{count}</p> }
      <Button onClick={handleDecrement} iconLeft="-">Decrement</Button>
    </div>
  )
}

export default App
