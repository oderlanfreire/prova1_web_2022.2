import React, { useState } from "react";

export default function Questao2(){
    const [firstNum, setFirstNum] = useState(0);
    const [secondNum, setSecondNum] = useState(0);
    const [operation, setOperation] = useState("");
    const [result, setResult] = useState(0);

    const handleOperationClick = (operation) =>
    {
        setOperation(operation);
        calculate();
    };

    const calculate = () =>{
        switch(operation){
            case 'divi':
                setResult(firstNum/secondNum);
                break;
            case 'mult':
                setResult(firstNum * secondNum);
                break;
            case 'sub':
                setResult(firstNum - secondNum);
                break;
            case 'adi':
                setResult(firstNum + secondNum);
                break;
        }
    };

    return(
        <form>
            <input
            type='number'
            name="firstNum"
            id="firstNum"
            value={firstNum}
            onChange={(e)=> setFirstNum(parseInt(e.target.value))}
            />
            <input
            type='number'
            name="secondNum"
            id="secondNum"
            value={secondNum}
            onChange={(e)=> setSecondNum(parseInt(e.target.value))}
            />

            <button type="button" onClick={()=> handleOperationClick('adi')}>+</button>
            <button type="button" onClick={()=> handleOperationClick('sub')}>-</button>
            <button type="button" onClick={()=> handleOperationClick('divi')}>/</button>
            <button type="button" onClick={()=> handleOperationClick('mult')}>*</button>

            {result && <p>Resultado: {result}</p>}
        </form>
    )
}