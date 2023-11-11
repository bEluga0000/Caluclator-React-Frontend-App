import { Button } from "@mui/material";
import { Dispatch, SetStateAction } from 'react';

type PresentResultState = number;
type TotalResultState = number;
type TotalOperationState = number
type SetPresentValue = Dispatch<SetStateAction<PresentResultState>>;
type SetToatlValue = Dispatch<SetStateAction<TotalResultState>>;
type SetOperatTotalOeration = Dispatch<SetStateAction<TotalOperationState>>;

export function ResultButton({ symbol, num1, num2, setPresentValue ,setTotalOperations,setTotalValue,totalValue,totalOperations}: { symbol: string; num1: number; num2: number; setPresentValue: SetPresentValue , setTotalOperations:SetOperatTotalOeration,setTotalValue:SetToatlValue,totalValue:number,totalOperations:number}): JSX.Element {
    return (
        <Button variant="contained"
            onClick={() => {
                if (symbol === "+") {
                    if(!num1)
                    {
                        num1 = 0
                    }
                    if(!num2)
                    {
                        num2 = 0
                    }
                    const result: number = add(num1, num2);
                    setPresentValue(result);
                    setTotalOperations(totalOperations+1)
                    setTotalValue(result+totalValue)
                } else if (symbol === "-") {
                    if (!num1) {
                        num1 = 0
                    }
                    if (!num2) {
                        num2 = 0
                    }
                    const result: number = subtract(num1, num2);
                    setPresentValue(result);
                    setTotalOperations(totalOperations + 1)
                    setTotalValue(result + totalValue)
                } else if (symbol === "*") {
                    if (!num1) {
                        num1 = 1
                    }
                    if (!num2) {
                        num2 = 1
                    }
                    const result: number = multiply(num1, num2);  
                    setPresentValue(result);
                    setTotalOperations(totalOperations + 1)
                    setTotalValue(result + totalValue)
                } else if (symbol === "/") {
                    if (!num1) {
                        num1 = 0
                    }
                    if (!num2) {
                        num2 = 0
                    }
                    const result: number = divide(num1, num2);
                    setPresentValue(result);
                    setTotalOperations(totalOperations + 1)
                    setTotalValue(result + totalValue)
                }
            }}
        >
            Result
        </Button>
    );
}

function add(num1: number, num2: number) {
    return num1 + num2;
}

function subtract(num1: number, num2: number) {
    return num1 - num2;
}

function multiply(num1: number, num2: number) {
    return num1 * num2;
}

function divide(num1: number, num2: number) {
    return num1 / num2;
}
