import React, { useState } from "react";

export default function ClickCounter() {
  const [counter, setCounter] = useState(0); //Create state

  function handleClick() {
    setCounter(counter + 1); //Set state
  }
  
  /*  ES6
  const handleClick = () => setCounter(counter + 1)
  */

  return (
    <div>
      <p>You have clicked {counter} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
