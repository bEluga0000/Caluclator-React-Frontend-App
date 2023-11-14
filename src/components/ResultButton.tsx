import { Button } from "@mui/material";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { number1State, number2State } from "../Store/atom/numberState";
import { resultState } from "../Store/atom/results";
import { symbolState } from "../Store/atom/symbol";
// import { symbolState } from "../Store/atom/symbol";
import { totalOperatationState } from "../Store/selectors/totalOperatation";
import { totalValueState } from "../Store/selectors/totalValue";


export function ResultButton(): JSX.Element {
    const num1 = useRecoilValue(number1State)
    const num2 = useRecoilValue(number2State)
    const setNum1 = useSetRecoilState(number1State)
    const setNum2 = useSetRecoilState(number2State)
    const symbol = useRecoilValue(symbolState)
    const results = useSetRecoilState(resultState)
    const prevTotalValue = useRecoilValue(totalValueState)
    const prevTotalOperation = useRecoilValue(totalOperatationState)
    return (
        <Button variant="contained"
            onClick={() => {
                if (symbol === "+") {
                    const result = add(num1,num2)
                    results({
                        presentValue:result,
                        totalValue:prevTotalValue+result,
                        totalOperatation:prevTotalOperation+1
                    })
                }
                 else if (symbol === "-") {
                    if (!num1) {
                        setNum1(0) 
                    }
                    if (!num2) {
                        setNum2(0) 
                    }
                    const result = subtract(num1, num2)
                    results({
                        presentValue: result,
                        totalValue: prevTotalValue + result,
                        totalOperatation: prevTotalOperation + 1
                    })
                }
                 else if (symbol === "*") {
                    if (!num1) {
                        setNum1(1) 
                    }
                    if (!num2) {
                        setNum2(1)
                    }
                    const result = multiply(num1, num2)
                    results({
                        presentValue: result,
                        totalValue: prevTotalValue + result,
                        totalOperatation: prevTotalOperation + 1
                    })
                }
                 else if (symbol === "/") {
                    if (!num1) {
                        setNum1(1) 
                    }
                    if (!num2) {
                        setNum1(1) 
                    }
                    const result =divide(num1,num2)
                    results({
                        presentValue: result,
                        totalValue: prevTotalValue + result,
                        totalOperatation: prevTotalOperation + 1
                    })
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