import { useState } from "react";

import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
      initialInvestiment: 10000,
      annualInvestiment: 1200,
      expectedReturn: 6,
      duration: 10
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIndetifier, newValue) {
      setUserInput(prevUserInput => {
          return {
              ...prevUserInput,
              [inputIndetifier]: +newValue
          };
      });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p className="center">Please enter a duration greater than zero!</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;