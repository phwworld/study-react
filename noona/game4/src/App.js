import { useState } from 'react';
import './App.css';
import Box from './component/Box';

/**
 * 1. 박스 2개(사용자, 컴퓨터) 생성(타이틀, 사진, 결과)
 * 2. 선택 버튼 생성(가위, 바위, 보)
 * 3. 버튼 클릭시 선택한 내용 사용자 박스에 노출
 * 4. 컴퓨터 박스에는 랜덤값 노출
 * 5. 승패확인 후 결과 노출 및 박스 컬러 변경
 */

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
  const [comSelect, setComSelect] = useState(null);
  const [result, setResult] = useState("");

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let finalItem = itemArray[randomItem];
    return choice[finalItem];
  }

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
  }

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let comChoice = randomChoice();
    setComSelect(comChoice);
    let result = resultCheck(choice[userChoice], comChoice);
    setResult(result);
  }

  return (
    <div>
      <div className="main">
        <Box title="user" item={userSelect} result={result} />
        <Box title="computer" item={comSelect} result={result} />
      </div>

      <div className="main">
        <button type="button" onClick={() => play("scissors")}>가위</button>
        <button type="button" onClick={() => play("rock")}>바위</button>
        <button type="button" onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
