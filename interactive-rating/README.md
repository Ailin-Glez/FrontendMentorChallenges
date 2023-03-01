# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

Live site: [Interactive Rating](https://challenge-interactive-rating.netlify.app)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

The challenge is to build out this interactive rating component and get it looking as close to the design as possible.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./solution.png)

## My process

### Built with

- JSX
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library

### What I learned

I learned to create small component first and reuse them in another components. When creating the 'Rating component I didn´t how to select a single circle, I always ended selecting all. I was able to achieve that with the following solution (using a new state to handle the single number selected and passing the property 'isSelected' using the index of the iteration)

```js
const numbers = Array(5)
  .fill()
  .map((_, i) => ++i); // Array with numbers from 1 to 5
const rating = numbers.map(() => false); // Mapped Array from 'numbers', with 5 positions, filled with 'false' value
const [ratingActive, setRatingActive] = useState(rating);

const handleSelection = (number) => {
  const newRating = [...rating];
  newRating[number - 1] = true; // current number - 1 = index
  setRatingActive(newRating);
};

// isSelected={ratingActive[i]}
```

## Author

- Frontend Mentor - [@Ailin-Glez](https://www.frontendmentor.io/profile/Ailin-Glez)
- Linkedin - [Ailin Garcia](https://www.linkedin.com/in/ailin-garcía-gonzález-600b46168)
