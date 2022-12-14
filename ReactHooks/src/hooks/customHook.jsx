import React, { useEffect, useState } from "react";

function useLogger(value) {
  useEffect(() => {
    console.log("Value changed");
  }, [value]);
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    setValue(event.target.value);
  };

  const clear = () => setValue("");

  return {
    bind: { value, onChange },
    value,
    clear,
  };
}

function customHook() {
  const input = useInput("");
  const lastName = useInput("");

  useLogger(input.value);

  return (
    <div className={"container pt-3"}>
      <input type="text" {...input.bind} />

      <button className="btn btn-warning" onClick={() => input.clear()}>
        Clear
      </button>
      <h1>{input.value}</h1>
    </div>
  );
}

export default customHook;
