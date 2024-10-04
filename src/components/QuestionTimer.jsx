import { useEffect, useState } from "react";

function QuestionTimer({ onTimeout, timeout, mode }) {
  const [timeRemaining, setTimeRemaining] = useState(timeout);

  useEffect(() => {
    const timeoutFunction = setTimeout(() => {
      onTimeout();
    }, timeout);

    return () => {
      clearTimeout(timeoutFunction);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevRemainingTime) => prevRemainingTime - 50);
    }, 50);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" value={timeRemaining} max={timeout} className={mode} />;
}

export default QuestionTimer;
