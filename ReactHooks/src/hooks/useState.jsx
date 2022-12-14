import React, { useState } from "react";

function computeInitialCounter() {
  return Math.floor(Math.random() * 20);
}

function useState() {
  // const [counter, setCounter] = useState(0);
  //const [counter, setCounter] = useState(computeInitialCounter);
  const [counter, setCounter] = useState(() => {
    return computeInitialCounter();
  });

  const [state, setState] = useState({
    title: "Counter",
    date: Date.now(),
  });

  const increase = () => {
    // setCounter(counter + 1);
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
    // setCounter((prev) => prev + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };

  const updateTitle = () => {
    setState((prev) => {
      return {
        ...prev,
        title: "New name",
      };
    });
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increase} className="btn btn-success">
        Increase
      </button>
      <button onClick={decrease} className="btn btn-danger">
        Decrease
      </button>
      <button onClick={updateTitle} className="btn btn-default">
        Change name
      </button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default useState;
