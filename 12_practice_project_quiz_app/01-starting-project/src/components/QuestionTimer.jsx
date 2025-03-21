import { useEffect, useState } from "react";

function QuestionTimer({ timeout, onTimeout }) {
    const [remainingTime, setRemainingTime] = useState();

    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout);

        return () => {
            clearTimeout(timer);
        };
    }, [timeout, onTimeout]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime + 100);
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, []);
    
    return (
        <progress id="question-time" max={timeout} value={remainingTime}  />
    );
}

export default QuestionTimer;