import { useState } from "react";

function UserInput() {
    const [userInput, setUserInput] = useState({
        initialInvestiment: 10000,
        annualInvestiment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    function handleChange(inputIndetifier, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIndetifier]: newValue
            };
        });
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investiment</label>
                    <input type="number" value={userInput.initialInvestiment} required onChange={(event) => handleChange("initialInvestiment", event.target.value)} />
                </p>
                <p>
                    <label>Annual Investiment</label>
                    <input type="number" value={userInput.annualInvestiment} required onChange={(event) => handleChange("annualInvestiment", event.target.value)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" value={userInput.expectedReturn} required onChange={(event) => handleChange("expectedReturn", event.target.value)} />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" value={userInput.duration} required onChange={(event) => handleChange("duration", event.target.value)} />
                </p>
            </div>
        </section>
    );
}

export default UserInput;