import { useState } from 'react';

import Rating from './Rating';
import ThankYou from './ThankYou';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [numberSelected, setNumberSelected] = useState(null);

  const handleNumberSelected = (number) => {
    setNumberSelected(number);
  };

  return (
    <div className="card">
      {isSubmitted ? (
        <ThankYou number={numberSelected} />
      ) : (
        <>
          <img src="./icon-star.svg" alt="star image" className="star" />
          <div className="text">
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          </div>
          <Rating handleNumberSelected={handleNumberSelected} />
          <button className="submit-btn" onClick={() => setIsSubmitted(!isSubmitted)}>
            Submit
          </button>
        </>
      )}
    </div>
  );
}

export default App;
