import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {


const[counter,setCounter]=useState(0);


 
 const addValue=()=>{
  console.log(counter);
     setCounter(counter+1);


 }
 const lowerValue=()=>{
  if(counter<=0) return;
  else
  setCounter(counter-1);
 }
  return (
    <>
     <h1>React</h1>
     <h2>Counter value:{counter}</h2>
     
     <button  onClick={addValue}>
      Add value
     </button>
     <br></br>
     <button onClick={lowerValue}>
      Decrease Value
     </button>
    </>
  )
}
export default App