import React,{ useState } from 'react'
import { AiFillPlusCircle,AiFillMinusCircle} from "react-icons/ai";

export default function Counter() {
    const[counter,setCounter] = useState(0);

const nextCounter = () => {
        setCounter(counter+1)
        } 

const prevCounter = () => {
    
    if(counter === 0){
alert("counter can't go below zero")
return;
    }
    setCounter(counter-1)
}

const reset=() => {
    setCounter(0)
}
  return (
    <div><h1>Counter App</h1>
    <h2> {counter}</h2>
    <div className='btns'>
    <AiFillPlusCircle size={100} onClick={nextCounter} className="next-counter"/>
    <AiFillMinusCircle size={100} onClick={() => prevCounter()} className="prev-counter"/>
    </div>
    <button onClick={reset} className="reset">Reset</button>
    </div>
  )
}
