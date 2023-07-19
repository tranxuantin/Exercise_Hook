import "./App.css";
import CounterNumber from "./components/Assignment/CounterNumber";
import SelectCar from "./components/Assignment/SelectCar";
import TimerCounter from "./components/Assignment/TimerCounter";
import SelectUseEffect from "./components/Exercise/useEffect";
import CounterUseState from "./components/Exercise/useState";

function App() {
  return (
    <>
      {/* Exercise */}
      <div style={{ backgroundColor: "yellow" }}>
        <h1>Exercise</h1>

        <div style={{ backgroundColor: "red" }}>
          {" "}
          <SelectUseEffect />
        </div>

        <div style={{ backgroundColor: "orange" }}>
          {" "}
          <CounterUseState />
        </div>
      </div>

      {/* Assignment */}
      <div style={{ backgroundColor: "yellow" }}>
        <h1>Assignment</h1>

        <div style={{ backgroundColor: "red" }}>
          {" "}
          <SelectCar />
        </div>

        <div style={{ backgroundColor: "orange" }}>
          {" "}
          <TimerCounter />
        </div>

        <div style={{ backgroundColor: "pink" }}>
          {" "}
          <CounterNumber />
        </div>
      </div>
    </>
  );
}

export default App;
