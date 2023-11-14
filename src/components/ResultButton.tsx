import { Button } from "@mui/material";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { resultState } from "../Store/atom/results";
import { symbolState } from "../Store/atom/symbol";
import { num1State } from "../Store/selectors/num1";
import { num2State } from "../Store/selectors/num2";
// import { symbolState } from "../Store/atom/symbol";
import { totalOperatationState } from "../Store/selectors/totalOperatation";
import { totalValueState } from "../Store/selectors/totalValue";


export function ResultButton(): JSX.Element {
    const num1 = useRecoilValue(num1State)
    const num2 = useRecoilValue(num2State)
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
                    const result = subtract(num1, num2)
                    results({
                        presentValue: result,
                        totalValue: prevTotalValue + result,
                        totalOperatation: prevTotalOperation + 1
                    })
                }
                 else if (symbol === "*") {
                    const result = multiply(num1, num2)
                    results({
                        presentValue: result,
                        totalValue: prevTotalValue + result,
                        totalOperatation: prevTotalOperation + 1
                    })
                }
                 else if (symbol === "/") {
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

function add(num1: number|null, num2: number|null) {
    if(num1 === null)
    {
        num1 = 0
    }
    if(num2 === null)
    {
        num2 =0
    }
    return num1 + num2;
}

function subtract(num1: number|null, num2: number|null) {
    if (num1 === null) {
        num1 = 0
    }
    if (num2 === null) {
        num2 = 0
    }
    return num1 - num2;
}

function multiply(num1: number|null, num2: number|null) {
    if (num1 === null) {
        num1 = 1
    }
    if (num2 === null) {
        num2 = 1
    }
    return num1 * num2;
}

function divide(num1: number|null, num2: number|null) {
    if (num1 === null) {
        num1 = 1
    }
    if (num2 === null) {
        num2 = 1
    }
    return num1 / num2;
}