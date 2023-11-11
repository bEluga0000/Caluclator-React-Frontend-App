import { Button } from "@mui/material"
import { useState } from "react"
import { InputsBoxes } from "./components/InputsBoxes"
import { Results } from "./components/Results"
import { Symbols } from "./components/Symbols"
import { ResultButton } from "./components/ResultButton"
import { Note } from "./components/Note"
function App():JSX.Element {
  const[totalValue,setTotalValue] = useState(0)
  const[totalOperations,setTotalOperations] = useState(0)
  const[presentValue,setPresentValue] = useState(0) 
  const[symbol,setSymbol] = useState<string>("+")
  const[num1,setNum1] = useState(0)
  const[num2,setNum2] = useState(0)
  return (
    <div>
      <InputsBoxes symbol={symbol} setNum1={setNum1} setNum2={setNum2}/>
     <Symbols setSymbol={setSymbol}/>
     <Results resultType="Total Result" result={totalValue}/>
      <Results resultType="Present Result" result= {presentValue}/>
      <Results resultType="Total Operations" result={totalOperations}/>
      <Button variant="contained" color="error"
      onClick={()=>{setSymbol('+');
      setTotalValue(0);
      setPresentValue(0);
      setTotalOperations(0)}}>Clear</Button>
      <ResultButton symbol={symbol} num1={num1} num2={num2} setPresentValue={setPresentValue} setTotalOperations={setTotalOperations} setTotalValue={setTotalValue} totalOperations={totalOperations} totalValue={totalValue}></ResultButton>
      <Note/>
    </div>
  )
}

export default App
// https://github.com/bEluga0000/Caluclator-React-Frontend-App.git