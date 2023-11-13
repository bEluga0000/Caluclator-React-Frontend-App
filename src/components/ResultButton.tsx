import { Button } from "@mui/material";
// import { Dispatch, SetStateAction } from 'react';
import { useResult } from "../ContextApi/resultContext";


export function ResultButton(): JSX.Element {
    const{addc,substractc,multiplicationc,divisionc,num1,num2,setNum1,setNum2,symbol} = useResult()
    return (
        <Button variant="contained"
            onClick={() => {
                if (symbol === "+") {
                    if(!num1)
                    {
                        setNum1(0) 
                    }
                    if(!num2)
                    {
                        setNum2 (0) 
                    }
                    addc(num1,num2)
                } else if (symbol === "-") {
                    if (!num1) {
                        setNum1(0) 
                    }
                    if (!num2) {
                        setNum2(0) 
                    }
                    substractc(num1,num2)
                } else if (symbol === "*") {
                    if (!num1) {
                        setNum1(1) 
                    }
                    if (!num2) {
                        setNum2(1)
                    }
                    multiplicationc(num1,num2)
                } else if (symbol === "/") {
                    if (!num1) {
                        setNum1(1) 
                    }
                    if (!num2) {
                        setNum1(1) 
                    }
                    divisionc(num1,num2)
                }
            }}
        >
            Result
        </Button>
    );
}

