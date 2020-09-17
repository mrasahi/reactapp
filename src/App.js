import React, { useState, useEffect } from 'react'
let op = ['+', '-', '*', '/']

// Start App
const App = () => {

    // Counter
    const [countState, setCountState] = useState({
        count: 0 
    })

    countState.handleCountClick = event => {
        // ternary operator used. It's a shortened if else statement in a single line
        // spread countState with ... before any changes to import all other states to prevent missing overwrites
        setCountState({ ...countState, count: (event.target.value === '0') ? 0 : countState.count + parseInt(event.target.value) })
        console.log(event.target.value)
    }


    // Calculator
    const [calcState, setCalcState] = useState({
        num1: '',
        num2: '',
        op: '',
        result: ''
    })

    calcState.handleNum = event => {
        if (calcState.op === '') {
            setCalcState({ ...calcState, num1: calcState.num1 + event.target.value })
        } else {
            setCalcState({ ...calcState, num2: calcState.num2 + event.target.value })
        }
    }

    calcState.handleOp = event => {
        if (calcState.num1 !== '') {
            setCalcState({ ...calcState, op: event.target.value})
        } else {
            console.log('Please enter a number first')
        }
    }

    calcState.handleEquals = event => {
        if (calcState.num2 !== '') {
            switch (calcState.op) {
                case '+':
                    setCalcState({ result: parseInt(calcState.num1) + parseInt(calcState.num2) })
                    break
                case '-':
                    setCalcState({ result: parseInt(calcState.num1) - parseInt(calcState.num2) })
                    break
                case '*':
                    setCalcState({ result: parseInt(calcState.num1) * parseInt(calcState.num2) })
                    break
                case '/':
                    setCalcState({ result: parseInt(calcState.num1) / parseInt(calcState.num2) })
                    break
                default:
                    console.log('Something went wrong in the ops')
                    break
            }
        } else {
            console.log('Please enter a second number')
        }
    }

    calcState.handleReset = () => {
        setCalcState({ ...calcState, result: '', num1: '', num2: '', op: '' })
      }


    return (
        <>
            <h1>Count: {countState.count}</h1>
            <button value={+1} onClick={countState.handleCountClick}>Add</button>
            <button value={-1} onClick={countState.handleCountClick}>Subtract</button>
            <button value={0} onClick={countState.handleCountClick}>Reset</button>

            <hr/>

            <h1>Calculator App</h1>
            <h1>{calcState.result}</h1>
            <h1>{calcState.num1} {calcState.op} {calcState.num2}</h1>
            { [...Array(10).keys()].map(num => <button value={num} onClick={calcState.handleNum}>{num}</button>)}
            <br/>
            { op.map(op => <button onClick={calcState.handleOp} value={op}>{op}</button>) }
            <br/>
            <button onClick={calcState.handleEquals} value={'equals'}>=</button>
            <br/>
            <button onClick={calcState.handleReset}>Reset</button>

            <hr/>

            <h1>Giphy App</h1>
            
        </>
    )
}

// Export app
export default App