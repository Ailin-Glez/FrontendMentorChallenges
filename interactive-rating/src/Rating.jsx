import { useState } from 'react';

import Circle from './Circle';

function Rating({ handleNumberSelected }) {
  const numbers = Array(5).fill().map((_, i) => ++i);
  const rating = numbers.map(() => false);
  const [ratingActive, setRatingActive] = useState(rating);

  const handleSelection = (number) => {
    const newRating = [...rating];
    newRating[number - 1] = true;
      setRatingActive(newRating);
      handleNumberSelected(number);
  };

  return (
    <div className="rating-container">
      {numbers.map((num, i) => {
        return <Circle key={num} isSelected={ratingActive[i]} handleSelection={handleSelection} number={num} />;
      })}
    </div>
  );
}

export default Rating;
