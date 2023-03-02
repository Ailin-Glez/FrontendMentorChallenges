import { useEffect } from "react";
import { useAdvice } from "./hooks";

function App() {
  const { getAdvice, isLoading, advice } = useAdvice();

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="card">
      <p className="advice-number">{isLoading ? "Advice" : `Advice # ${advice.id}`}</p>
      <div className="advice-section">
        <p className="advice">{isLoading ? "Loading..." : `"${advice.advice}"`}</p>
      </div>
      <img className="divider" src="./pattern-divider-desktop.svg" alt="divider" />
      <button className="dice-btn" onClick={() => getAdvice()}>
        <img src="./icon-dice.svg" alt="dice image" />
      </button>
    </div>
  );
}

export default App;
