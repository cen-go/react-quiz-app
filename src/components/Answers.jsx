import { useRef } from "react";

function Answers({ onSelect, answers, selectedAnswer, answerState }) {
  const shuffledAnswers = useRef();
  if (answerState === "") {
    shuffledAnswers.current = [...answers].sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let buttonCssClass = "";
        if (answerState === "answered" && isSelected) {
          buttonCssClass = "selected";
        }
        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          buttonCssClass = answerState;
        }

        return (
          <li className="answer" key={answer}>
            <button className={buttonCssClass} onClick={() => onSelect(answer)}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Answers;
