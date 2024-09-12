import quizLogo from "../assets/quiz-logo.png";

function Header() {
  return (
    <header>
      <img src={quizLogo} alt="app logo" />
      <h1>REACT QUIZ</h1>
    </header>
  )
}

export default Header;