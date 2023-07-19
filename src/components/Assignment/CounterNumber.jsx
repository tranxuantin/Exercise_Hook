import { useState } from "react";

const CounterNumber = () => {
  const [Count1, setCount1] = useState(0);
  const [Count2, setCount2] = useState(0);

  const handleCounterPerson1 = () => {
    setCount1(Count1 + 1);
  };

  const handleCounterPerson2 = () => {
    setCount2(Count2 + 2);
  };

  return (
    <div>
      <div className="person1">
        <h3>Count of person 1: {Count1}</h3>
        <button onClick={handleCounterPerson1}>Add 1</button>
      </div>
      <div className="person2">
        <h3>Count of person 2: {Count2}</h3>
        <button onClick={handleCounterPerson2}>Add 2</button>
      </div>
    </div>
  );
};

export default CounterNumber;
