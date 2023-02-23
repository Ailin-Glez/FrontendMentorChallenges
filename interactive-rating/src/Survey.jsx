import Rating from './Rating';

function Survey({ handleSubmit, handleNumberSelected }) {
  return (
    <>
      <img src="./icon-star.svg" alt="star image" className="star" />
      <div className="text">
        <h1>How did we do?</h1>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      </div>
      <Rating handleNumberSelected={handleNumberSelected} />
      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
}

export default Survey;
