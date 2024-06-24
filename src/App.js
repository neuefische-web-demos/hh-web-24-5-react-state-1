import "./styles.css";
import { useState } from "react";
export default function App() {
  return (
    <>
      <Counter />
      <Counter />
      <Counter />
    </>
  );
}

function Counter() {
  //   // state:
  //   const count = 0;
  // // setter function:
  // function setCount(newCount){
  //   // ... optimierungen
  //   // count = newCount;
  //   // Counter()
  // }

  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  function handleClick() {
    //count = count + 1;
    setCount(count + 1);
    console.log("You clicked me", count);
  }

  return (
    <div className={darkMode ? "counter darkmode" : "counter"}>
      <h1>You have clicked {count} times</h1>
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        Toggle Mode
      </button>
    </div>
  );
}
