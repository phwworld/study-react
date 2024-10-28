import React from "react";

const Box = (props) => {
  let result;
  if (
    props.title === "COMPUTER" &&
    props.result !== "Tie" &&
    props.result !== "Result"
  ) {
    result = props.result === "Win" ? "Lose" : "Win";
  } else {
    result = props.result;
  }

  return (
    <div>
      <div className={`box ${result}`}>
        <p>{props.title}</p>
        <p>
          <img src={props.item && props.item.img} />
        </p>
        <p>{result}</p>
      </div>
    </div>
  );
};

export default Box;
