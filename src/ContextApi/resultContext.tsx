import { createContext, ReactNode, useState ,useContext} from "react";
// import React = require("react");
// import React = require("react");

interface ResultContextprops{
    presentValue:number,
    totalValue:number,
    totalOperation:number,
    num1:number,
    num2:number,
    symbol:string,
    setNum1:React.Dispatch<React.SetStateAction<number>>,
    setNum2:React.Dispatch<React.SetStateAction<number>>,
    setSymbol:React.Dispatch<React.SetStateAction<string>>,
    setPresentValue:React.Dispatch<React.SetStateAction<number>>
    setTotalValue: React.Dispatch<React.SetStateAction<number>>
    setTotalOperation: React.Dispatch<React.SetStateAction<number>>
    addc:(num1:number,num2:number)=>void;
    substractc: (num1: number, num2: number)=>void;
    multiplicationc: (num1: number, num2: number)=>void;
    divisionc: (num1: number, num2: number)=>void;
}

const ResultContext = createContext<ResultContextprops|undefined>(undefined);
interface ResultProviderProps{
    children:ReactNode;
}
export function ResultProvider({children}:ResultProviderProps){
    const[presentValue,setPresentValue] = useState(0)
    const[totalValue,setTotalValue] = useState(0)
    const[totalOperation,setTotalOperation] = useState(0)
    const[num1,setNum1] = useState(0)
    const[num2,setNum2] = useState(0)
    const[symbol,setSymbol]= useState('+')
    const addc = (num1:number,num2:number)=>{
        const result:number = num1 + num2
        setPresentValue(result)
        setTotalValue(totalValue+result)
        setTotalOperation(totalOperation+1)
    }
    const substractc = (num1: number, num2: number) => {
        const result: number = num1 - num2
        setPresentValue(result)
        setTotalValue(totalValue + result)
        setTotalOperation(totalOperation + 1)
    }
    const multiplicationc = (num1: number, num2: number) => {
        const result: number = num1 * num2
        setPresentValue(result)
        setTotalValue(totalValue + result)
        setTotalOperation(totalOperation + 1)
    }
    const divisionc = (num1: number, num2: number) => {
        const result: number = num1 / num2
        setPresentValue(result)
        setTotalValue(totalValue + result)
        setTotalOperation(totalOperation + 1)
    }
    const contextValue: ResultContextprops = {
        presentValue,
        totalValue,
        totalOperation,
        num1,
        num2,
        symbol,
        setNum1,
        setNum2,
        setSymbol,
        setPresentValue,
        setTotalOperation,
        setTotalValue,
        addc,
        substractc,
        multiplicationc,
        divisionc
    }
    return <ResultContext.Provider value={contextValue}>{children}</ResultContext.Provider>
}

export function useResult()
{
    const context = useContext(ResultContext)
    if(!context)
    {
        throw new Error("Use Result must be written inside the ResultProvider")
    }
    return context
}
