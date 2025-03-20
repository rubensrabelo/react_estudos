import logoImg from "../assets/quiz-complete.png";

function Header() {
    return (
        <header>
            <img src={logoImg} alt="Quiz logo" />
            <h1>ReactQuiz</h1>
        </header>
    );
}

export default Header;