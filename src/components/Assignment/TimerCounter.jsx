import { useEffect, useState } from "react";

const TimerCounter = () => {
  const [counter, setCounter] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter === 0) {
        // alert("anh yeu em");
        clearInterval(interval);
      } else {
        setCounter(counter - 1);
      }
    }, 1000);

    if (counter === 0) {
      alert("anh yeu em");
    }

    return () => clearInterval(interval);
  }, [counter]);

  return (
    <div>
      <h1>Counter from: {counter}</h1>
    </div>
  );
};

export default TimerCounter;
