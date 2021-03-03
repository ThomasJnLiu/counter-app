import "./App.css";
import Display from "./Components/Display";

// main components of the app:
// button.js - increase, decrease, and reset button, function changes based on prop input
// message.js - displays max capacity message based on prop input
// display.js - parent of button and message, gives props to both, handles logic for increasing, decreasing, and resetting through state and useEffect

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div
        style={{ marginBottom: "1em", marginTop: "0.5em", fontSize: "0.75em" }}
      >
        Capacity:10
      </div>
      <Display />
    </div>
  );
}

export default App;
