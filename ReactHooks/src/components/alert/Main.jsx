import React from "react";
import { useAlert } from "./AlertContext";

export default function Main() {
  const { show } = useAlert();
  return (
    <>
      <h1>Hello from context example</h1>
      <button
        onClick={() => show("This text is from Main.js")}
        className="btn btn-success"
      >
        Show alert
      </button>
    </>
  );
}
