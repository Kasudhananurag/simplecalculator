import React, { useState } from "react"

export default function Options(props) {

  const [oprtn, setOprtn] = useState("")
  const num1 = props.num1;
  const num2 = props.num2;
  let results = 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (oprtn === '+')
      results = num1 + num2;
    else if (oprtn === '-')
      results = num1 - num2;
    else if (oprtn === '*')
      results = num1 * num2;
    else if (oprtn === '/')
      results = num1 / num2;
    else if (oprtn === '/')
      results = Math.pow(num1,num2);
    else
      results("You chose wrong operation, select one from the option below")

    props.getResult(results)

  }

  return (
    <>
      <form onSubmit={handleSubmit} >
        <div className="col-3 m-auto rounded bg-dark text-light p-3 my-2 text-center shadow" ><h6>Select Operations</h6>
          <input type="radio" onChange={(event) => setOprtn(event.target.value)} value='+' name="operation" id="" /> + &nbsp;
          <input type="radio" onChange={(event) => setOprtn(event.target.value)} value='-' name="operation" id="" /> - &nbsp;
          <input type="radio" onChange={(event) => setOprtn(event.target.value)} value='*' name="operation" id="" /> * &nbsp;
          <input type="radio" onChange={(event) => setOprtn(event.target.value)} value='/' name="operation" id="" /> / &nbsp; <br />
          {/* <input type="radio" onChange={(event) => setOprtn(event.target.value)} value='pow' name="operation" id="" /> first^second &nbsp; */}
          <br /><input type="submit" value="Calcualte" className="btn btn-primary" />
        </div>
      </form>
    </>
  )
}
