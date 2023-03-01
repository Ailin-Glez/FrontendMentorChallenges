import { useState } from "react";
import Circle from "./Circle";

/**
 * Component to create a Rating with 5 circles
 * @param {function} handleNumberSelected function to pass the selected number to the parent (App)
 */
function Rating({ handleNumberSelected }) {
  const numbers = Array(5).fill().map((_, i) => ++i); // Array with numbers from 1 to 5
  const rating = numbers.map(() => false); // Mapped Array from 'numbers', with 5 positions, filled with 'false' value
  const [ratingActive, setRatingActive] = useState(rating);

  const handleSelection = (number) => {
    const newRating = [...rating];
    newRating[number - 1] = true; // current number - 1 = index
    setRatingActive(newRating);
    handleNumberSelected(number); // function used in the parent (App)
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