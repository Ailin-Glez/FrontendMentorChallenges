/**
 * Component to create a simple circle with a number inside (stateless component)
 * @param {function} handleSelection function used in the parent (Rating component)
 * to set the number inside the circle as the selected one
 * @param {number} number number to display inside the circle
 * @param {boolean} isSelected boolean to set a class based on the selection or not
 */
function Circle({ handleSelection, number, isSelected }) {
  return (
    <button className={isSelected ? "circle selected" : "circle"} onClick={(e) => handleSelection(e.target.textContent)}>
      {number}
    </button>
  );
}

export default Circle;
