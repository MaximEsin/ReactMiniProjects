import React, { useState, useMemo, useEffect } from "react";

function complexCompute(num) {
  let i = 0;
  while (i < 100000000) i++;
  return num * 2;
}

function useMemo() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles = useMemo(() => {
    return {
      color: colored ? "darkred" : "black",
    };
  }, [colored]);

  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);

  useEffect(() => {
    console.log("styles changed");
  }, [styles]);

  return (
    <div>
      <h1 style={styles}>Counted state: {computed}</h1>
      <button
        className="btn btn-success"
        onClick={() => setNumber((prev) => prev + 1)}
      >
        Add
      </button>
      <button
        className="btn btn-danger"
        onClick={() => setNumber((prev) => prev - 1)}
      >
        Substract
      </button>
      <button
        className="btn btn-warning"
        onClick={() => setColored((prev) => !prev)}
      >
        Change
      </button>
    </div>
  );
}

export default useMemo;
