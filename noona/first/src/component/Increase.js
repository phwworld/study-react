import React from "react";
import { useState } from "react";

const Increase = () => {
  let counter = 0;
  const [counter2, setCounter2] = useState(0);
  const increase = () => {
    counter = counter + 1;
    setCounter2(counter2 + 1);
    console.log(counter, counter2);
  };

  return (
    <div>
      <div>{counter}</div>
      <div>{counter2}</div>
      <button onClick={increase}>increase</button>
    </div>
  );
};

export default Increase;
