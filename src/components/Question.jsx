import { useState } from "react";
import QUESTIONS from "../questions";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

function Question({ index, onSkipAnswer, onSelectAnswer }) {
  const [answerState, setAnswerState] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;

  if (answerState.selectedAnswer) {
    timer = 1000;
  }
  if (answerState.isCorrect !== null) {
    timer = 1500;
  }
 
  let answerStatus = "";
  function handleSelectAnswer(answer) {
    setAnswerState({ selectedAnswer: answer, isCorrect: null });
    setTimeout(() => {
      setAnswerState({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });
      setTimeout(() => {
        onSelectAnswer(answer);
      }, 1500);
    }, 1000);
  }

  if (answerState.selectedAnswer && answerState.isCorrect !== null) {
    answerStatus = answerState.isCorrect ? "correct" : "wrong";
  } else if (answerState.selectedAnswer) {
    answerStatus = "answered";
  }

  return (
    <>
      <div id="question">
        <p>{QUESTIONS[index].text}</p>
        <QuestionTimer
          key={timer}
          timeout={timer}
          onTimeout={answerState.selectedAnswer === "" ? onSkipAnswer : () => {}}
          mode={answerStatus}
        />
      </div>
      <Answers
        onSelect={handleSelectAnswer}
        answers={QUESTIONS[index].answers}
        selectedAnswer={answerState.selectedAnswer}
        answerStatus={answerStatus}
      />
    </>
  );
}

export default Question;
