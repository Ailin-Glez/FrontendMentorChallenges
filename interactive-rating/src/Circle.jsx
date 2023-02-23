function Circle({ handleSelection, number, isSelected }) {
  return (
    <button className={isSelected ? "circle selected" : "circle"} onClick={(e) => handleSelection(e.target.textContent)}>
      {number}
    </button>
  );
}

export default Circle;
