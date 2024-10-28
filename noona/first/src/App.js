import "./App.css";
import Box from "./component/Box";
import Increase from "./component/Increase";

function App() {
  return (
    <div className="wrap">
      {/* <Box name="가" num="1" />
      <Box name="나" num="2" />
      <Box name="다" num="3" /> */}
      <Increase />
    </div>
  );
}

export default App;
