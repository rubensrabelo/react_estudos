function UserInput( { onChange, userInput } ) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investiment</label>
                    <input type="number" value={userInput.initialInvestiment} required onChange={(event) => onChange("initialInvestiment", event.target.value)} />
                </p>
                <p>
                    <label>Annual Investiment</label>
                    <input type="number" value={userInput.annualInvestiment} required onChange={(event) => onChange("annualInvestiment", event.target.value)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" value={userInput.expectedReturn} required onChange={(event) => onChange("expectedReturn", event.target.value)} />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" value={userInput.duration} required onChange={(event) => onChange("duration", event.target.value)} />
                </p>
            </div>
        </section>
    );
}

export default UserInput;