
import React,{useState} from "react";
import './../styles/App.css';

let count=0;
const App = () => {
  const [counter, setCounter] = useState(count)
  return (
    <div>
       <p>Button clicked {counter} times</p>
       <button onClick={()=>setCounter(count++)}>Click me</button>
    </div>
  )
}

export default App
 