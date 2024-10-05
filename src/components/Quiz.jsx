import { useState, useCallback } from "react";

import QUESTIONS from "../questions";
import Question from "./Question";
import Summary from "./Summary";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  console.log(userAnswers);
  

  const activeQuestionIndex = userAnswers.length;
  const quizIsFinished = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback((selectedAnswer) => {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]);

  if (quizIsFinished) {
    return <Summary selectedAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}

export default Quiz;
