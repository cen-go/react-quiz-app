import { useState } from "react";

import QUESTIONS from "../questions";
import quizCompleteImg from "../assets/quiz-complete.png";


function Quiz() {
  const [ userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;  
  const quizIsFinished = activeQuestionIndex === QUESTIONS.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers(prevAnswers => {
      return [...prevAnswers, selectedAnswer];
    })    
  }

  if (quizIsFinished) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="quiz complete image" />
        <h2>Quiz Completed!</h2>
      </div>
    )
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers].sort(
    () => Math.random() - 0.5
  );
  
  return (
    <div id="quiz">
      <div id="question">
        <p>{QUESTIONS[activeQuestionIndex].text}</p>
      </div>
      <ul id="answers">
        {shuffledAnswers.map( answer => (
          <li className="answer" key={answer}>
            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Quiz;