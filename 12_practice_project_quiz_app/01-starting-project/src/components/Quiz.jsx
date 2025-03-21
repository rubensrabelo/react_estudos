import { useCallback, useState } from "react";

import { QUESTIONS } from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import Question from "./Question.jsx";

function Quiz() {
    const [answerState, setAnswerState] = useState();
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = answerState === "" ? userAnswers.length : userAnswers.length - 1;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectedAnswer = useCallback(function handleSelectedAnswer(selectedAnswer) {
        setAnswerState("answer");
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });

        setTimeout(() => {
            if(selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
                setAnswerState("correct");
            } else {
                setAnswerState("wrong");
            }

            setTimeout(() => {
                setAnswerState("");
            }, 2000);
        }, 1000);
    }, [activeQuestionIndex])

    const handleSkipAnswer = useCallback(() => {() => handleSelectedAnswer(null)}, [handleSelectedAnswer]);

    if(quizIsComplete) {
        return (
            <div id="summary">
                <img src={quizCompleteImg} alt="Trophy icon" />
                <h2>Quiz Completed!</h2>
            </div>
        );
    }

    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                questionText={QUESTIONS[activeQuestionIndex].text}
                answerState={answerState}
                selectedAnswer={userAnswers[userAnswers.length - 1]}
                answers={QUESTIONS[activeQuestionIndex].answers}
                onSelectAnswer={handleSelectedAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    );
}

export default Quiz;