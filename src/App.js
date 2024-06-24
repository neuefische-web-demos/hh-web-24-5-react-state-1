import "./styles.css";

export default function App() {
  return <Counter />;
}

function Counter() {

  return (
    <div className="counter">
      <h1>You have clicked 0 times</h1>
      <button>
        Click me
      </button>
    </div>
  );
}
