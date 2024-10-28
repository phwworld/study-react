import React from "react";

const Box = (props) => {
  console.log(props);
  let result;
  if (
    props.title === "COMPUTER" &&
    props.result !== "Tie" &&
    props.result !== ""
  ) {
    result = props.result === "Win" ? "Lose" : "Win";
  } else {
    result = props.result;
  }

  return (
    <div className={`box ${result}`}>
      <p className="title">{props.title}</p>
      <p className="img">
        <img src={props.item && props.item.img} alt="" />
      </p>
      <p className="result">{result}</p>
    </div>
  );
};

export default Box;
