import { useState } from 'react';

import Survey from './Survey';
import ThankYou from './ThankYou';

function Card() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [numberSelected, setNumberSelected] = useState(null);

  const handleNumberSelected = (number) => {
    setNumberSelected(number);
  };

  const handleSubmit = () => {
    setIsSubmitted((submitted) => !submitted);
  };
  return <div className="card">{isSubmitted ? <ThankYou number={numberSelected} /> : <Survey handleNumberSelected={handleNumberSelected} handleSubmit={handleSubmit} />}</div>;
}

export default Card;
