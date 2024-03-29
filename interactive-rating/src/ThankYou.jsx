/**
 * Component to display a thank you message
 *  @param {number} number number to display the user selection. Example '1 of 5'
 */
function ThankYou({ number }) {
  return (
    <div className="thank-you">
      <img src="./illustration-thank-you.svg" alt="thank you image" />
      <div className="thank-you-selection">
        <p className="selection">You selected {number} out of 5</p>
      </div>
      <h2>Thank you!</h2>
      <p className="final-text">We appreciate you taking the time to give a rating. If you ever need more support, don not hesitate to get in touch!</p>
    </div>
  );
}

export default ThankYou;
