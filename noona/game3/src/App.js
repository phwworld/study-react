import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

const choice = {
  rock: {
    name: "Rock",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAxL1231cJvvm3a7E3HN8Mmyej3YoreJbcMg&s",
  },
  scissors: {
    name: "Scissors",
    img: "https://i.namu.wiki/i/PGp3JnsDa9eaMKBC1OwnSU4M0vLE0d_40ehrl0aUYum98U6tg0Nnl8W6_c0bQk2Bp9mQCMTe7eQt32pszxoQGw.webp",
  },
  paper: {
    name: "Paper",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-R8FJ0N1EkK1kFLNTGVT3YfZyEJrI5tY_2Q&s",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(choice.rock);
  const [comSelect, setComSelect] = useState(choice.rock);
  const [result, setResult] = useState("Result");

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let finalItem = itemArray[randomItem];
    return choice[finalItem];
  };

  const resultCheck = (user, com) => {
    if (user.name === com.name) {
      return "Tie";
    } else if (user.name === "Rock") {
      return com.name === "Scissors" ? "Win" : "Lose";
    } else if (user.name === "Scissors") {
      return com.name === "Paper" ? "Win" : "Lose";
    } else if (user.name === "Paper") {
      return com.name === "Rock" ? "Win" : "Lose";
    }
  };

  const play = (userCoice) => {
    setUserSelect(choice[userCoice]);
    let comChoice = randomChoice();
    setComSelect(comChoice);
    let resultValue = resultCheck(choice[userCoice], comChoice);
    setResult(resultValue);
  };

  return (
    <div>
      <div className="box-area">
        <Box title="YOU" item={userSelect} result={result} />
        <Box title="COMPUTER" item={comSelect} result={result} />
      </div>

      <div className="box-area">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
