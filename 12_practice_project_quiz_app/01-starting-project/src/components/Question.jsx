import QuestionTimer from "./QuestionTimer.jsx"
import Answer from "./Answer.jsx"
import { useState } from "react";

function Question({ questionText, answers, onSelectAnswer, selectedAnswer, answerState, onSkipAnswer }) {
    const [answer, setAnswer] = useState({
        selectedAnswer: "",
        isCorrect: null
    });

    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        });

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: null
            });
        }, 1000);
    }

    return (
        <div id="question">
            <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
            <h2>{questionText}</h2>
            <Answer
                answers={answers}
                selectedAnswer={selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
        </div>
    );
}

export default Question;