import "./App.css";
import Box from "./component/Box";
import { useState } from "react";

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
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let finalItem = itemArray[randomItem];
    return choice[finalItem];
  };

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "Tie";
    } else if (user.name === "Rock") {
      return computer.name === "Scissors" ? "Win" : "Lose";
    } else if (user.name === "Scissors") {
      return computer.name === "Paper" ? "Win" : "Lose";
    } else if (user.name === "Paper") {
      return computer.name === "Rock" ? "Win" : "Lose";
    }
  };

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  return (
    <div>
      <div className="wrap">
        <Box title="YOU" item={userSelect} result={result} />
        <Box title="COMPUTER" item={computerSelect} result={result} />
      </div>

      <div className="wrap">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
