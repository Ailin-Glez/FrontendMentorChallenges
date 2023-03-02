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
      <section className="advice-section">
        <p className="advice">{isLoading ? "Loading..." : `"${advice.advice}"`}</p>
      </section>
      <img className="divider" />
      <button className="dice-btn" src="./pattern-divider-desktop.svg" alt="divider" onClick={() => getAdvice()}>
        <img src="./icon-dice.svg" alt="dice image" />
      </button>
    </div>
  );
}

export default App;
