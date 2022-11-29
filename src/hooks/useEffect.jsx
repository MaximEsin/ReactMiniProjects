import React, { useState, useEffect } from "react";

function useEffect() {
  const [type, setType] = useState("users");
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  // useEffect(() => {
  //   console.log("render");
  // });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));

    return () => {
      console.log("clean type");
    };
  }, [type]);

  const mouseMoveHandler = (event) => {
    setPos({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    console.log("componentDidMount");
    window.addEventListener("mouseover", mouseMoveHandler);
    return () => {
      window.removeEventListener("mouseover", mouseMoveHandler);
    };
  }, []);

  return (
    <div>
      <h1>Resource: {type}</h1>
      <button onClick={() => setType("users")}>Users</button>
      <button onClick={() => setType("todos")}>Todos</button>
      <button onClick={() => setType("posts")}>Posts</button>

      {/* <pre>{JSON.stringify(data, null, 0)}</pre> */}
      <pre>{JSON.stringify(pos, null, 0)}</pre>
    </div>
  );
}

export default useEffect;
