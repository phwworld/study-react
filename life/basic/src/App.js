import './App.css';
import Box from './component/Box';

function App() {
  let itemArray = ["a", "b", "c"];
  let custumEvent = (e) => {
    alert(e);
  }
  return (
    <div>
      <Box title="타이틀1" item={itemArray} custom={custumEvent} />
    </div>
  );
}

export default App;
