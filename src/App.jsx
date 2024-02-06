import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import ResultTable from "./components/ResultTable.jsx";
import {calculateInvestmentResults} from "./util/investment.js";
import {useState} from "react";



// const result =  calculateInvestmentResults(initialValue)
// console.log(result)


function App() {
    const [userInput,setUserInput] = useState({initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10})

    const inputIsValid = userInput.duration >= 1

    function handleChange(imputIdentfier,newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [imputIdentfier]: +newValue
            }
        })
    }

    return (
        <>
            <Header />
            <UserInput onChange={handleChange} userInput={userInput}/>
            {!inputIsValid && <p className='center'>Please enter a duration greater than zero.</p>}
            {inputIsValid &&  <ResultTable userInput={userInput}/>}
        </>
  )
}

export default App
