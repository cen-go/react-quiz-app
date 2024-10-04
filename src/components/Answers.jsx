import { useRef } from "react";

function Answers({ onSelect, answers, selectedAnswer, answerStatus }) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers].sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let buttonCssClass = "";
        if (answerStatus === "answered" && isSelected) {
          buttonCssClass = "selected";
        }
        if (
          (answerStatus === "correct" || answerStatus === "wrong") &&
          isSelected
        ) {
          buttonCssClass = answerStatus;
        }

        return (
          <li className="answer" key={answer}>
            <button
              className={buttonCssClass}
              onClick={() => onSelect(answer)}
              disabled={answerStatus !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Answers;
