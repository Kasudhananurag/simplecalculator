import React, { useState } from 'react';
import Options from "./Options"

export default function Calc() {

  const[firstNum, setFirstNum] = useState(0)
  const[secNum, setSecNum] = useState(0)
  const[rslt,setRslt] = useState("result goes here")

  const result = result =>
  {
    setRslt(result.toString());
  }

  const getResult = (result) =>{
    setRslt(result.toString());
  }

    return (
        <>
            <div className="col-3 m-auto rounded bg-dark text-light p-3 my-2 text-center shadow" ><h3>Calculator</h3></div>
            <div className="col-3 p-3 m-auto rounded bg-light rounded text-light my-2 text-center shadow" >
                <input type="number" onChange = { (event) => {setFirstNum(Number(event.target.value))}  } placeholder = "Enter first number" name="" id="" className='w-100 h-100 rounded border border-dark text-center ' /> <br/><br/>
                <input type="number" onChange = { (event) => {setSecNum(Number(event.target.value))}  } placeholder = "Enter second number" name="" id="" className='w-100 h-100 rounded border border-dark text-center ' />
                <div className="container bg-dark rounded">
                    <p className='w-100 p-2  rounded shadow my-1'>{rslt}</p>
                </div>
            </div>
            <Options num1 = {firstNum} num2 = {secNum} getResult = {result} />
        </>
    )
}
