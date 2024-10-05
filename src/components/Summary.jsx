import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

function Summary({ selectedAnswers }) {
  const skippedAnswers = selectedAnswers.filter((answer) => answer === null);
  const skippedRatio = Math.round(
    (skippedAnswers.length / selectedAnswers.length) * 100
  );

  const correctAnswers = selectedAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );
  const correctRatio = Math.round(
    (correctAnswers.length / selectedAnswers.length) * 100
  );

  const incorrectRatio = 100 - (skippedRatio + correctRatio);

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="quiz complete image" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedRatio}% </span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctRatio}% </span>
          <span className="text">correct</span>
        </p>
        <p>
          <span className="number">{incorrectRatio}% </span>
          <span className="text">incorrect</span>
        </p>
      </div>
      <ol>
        {QUESTIONS.map((QUESTION, index) => {
          const isWrong = selectedAnswers[index] !== QUESTION.answers[0];
          let cssClass = "user-answer";
          if (selectedAnswers[index] === null) {
            cssClass += " skipped";
          } else if (selectedAnswers[index] === QUESTION.answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={QUESTION.id}>
              <h3>{index + 1}</h3>
              <p className="question">Question: {QUESTION.text}</p>
              <p className={cssClass}>
                User answer: {selectedAnswers[index] ?? "Not answered"}
              </p>
              {isWrong && (
                <p className="user-answer">
                  Correct answer: {QUESTION.answers[0]}
                </p>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Summary;
