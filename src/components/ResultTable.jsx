import React, {useEffect} from 'react';
import {calculateInvestmentResults, formatter} from "../util/investment.js";


const ResultTable = ({userInput}) => {
    const result = calculateInvestmentResults(userInput)
    const initialInvestment = result[0].valueEndOfYear - result[0].interest -  result[0].annualInvestment
    return (
        <table id='result'>
            <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
            {result.map((value, i) => {
                const totalInterest = value.valueEndOfYear - value.annualInvestment * value.year - initialInvestment
                const totalmountInvested = value.valueEndOfYear - totalInterest
                return (
                    <tr key={i}>
                        <th scope="row">{value.year}</th>
                        <td>{formatter.format(value.valueEndOfYear)}</td>
                        <td>{formatter.format(value.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalmountInvested)}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    );
};

export default ResultTable;