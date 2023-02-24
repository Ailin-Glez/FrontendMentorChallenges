import { useState } from 'react';

const ADVICE_URL = "https://api.adviceslip.com/advice";

export function useAdvice() {
  const [advice, setAdvice] = useState({ id: null, advice: "" });
  const [isLoading, setIsLoading] = useState(false);

  const getAdvice = () => {
    setIsLoading(true);
    fetch(ADVICE_URL)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setAdvice(data.slip);
      });
  };

  return { advice, isLoading, getAdvice };
}
