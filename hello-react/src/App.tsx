import { Dispatch, SetStateAction, useState } from "react";
import "./App.css";
import Game from "./components/CheckBoard";

function App() {
  const [count, setCount]: [number, Dispatch<SetStateAction<number>>] =
    useState(0);
  function handleAdd(): void {
    setCount(count + 1);
  }
  return (
    <>
      <Game />
    </>
  );
}

export default App;
