import { useEffect, useState } from "react";

function ProgressBar({timer}) {
    const [remaingTime, setRemainingTime] = useState(timer);
    
    useEffect(() => {
    const interval = setInterval(() => {
        setRemainingTime(prevTimer => prevTimer - 10);
    }, 10);

    return () => {
        clearInterval(interval);
    };
    }, []);
    
    return (
        <progress value={remaingTime} max={timer} />
    );
}

export default ProgressBar;