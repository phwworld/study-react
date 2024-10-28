import React from 'react'

const Box = (props) => {
  let result;
  if (props.title === "computer" && props.result !== "" && props.result !== "Tie") {
    result = props.result === "Win" ? "Lose" : "Win";
  } else {
    result = props.result;
  }

  return (
    <div className={`box ${result}`}>
      <p>{props.title}</p>
      <p><img src={props.item && props.item.img} alt="" /></p>
      <p>{result}</p>
    </div>
  )
}

export default Box
