import quizCompleteImg from "../assets/quiz-complete.png";

function Summary() {
  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="quiz complete image" />
      <h2>Quiz Completed!</h2>
      <div className="summary-stats">
        <p>
          <span className="number">10% </span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">10% </span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">10% </span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        <li>
          <h3>2</h3>
          <p className="question">question</p>
          <p className="user-answer">user answer</p>
        </li>
      </ol>
    </div>
  );
}

export default Summary;
