import { useState } from "react";

function Quiz() {
  const [ activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [ userAnswers, setUserAnswers] = useState([]);

  return (
    <div>
      <p>Currently active question</p>
    </div>
  )
}

export default Quiz;