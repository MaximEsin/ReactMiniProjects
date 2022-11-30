import React from "react";
import Main from "../components/alert/Main";
import Alert from "../components/alert/Alert";
import { AlertProvider } from "../components/alert/AlertContext";

function useReducer() {
  return (
    <AlertProvider>
      <div className={"container pt-3"}>
        <Alert />
        <Main toggle={() => {}} />
      </div>
    </AlertProvider>
  );
}

export default useReducer;
