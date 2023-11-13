import { Button } from "@mui/material";
import { useResult } from "../ContextApi/resultContext";

export function ClearButton(){
    const {setPresentValue,setTotalOperation,setTotalValue} = useResult()
return(
        <Button variant="contained"
        color="error"
        onClick={()=>{
            setPresentValue(0)
            setTotalOperation(0)
            setTotalValue(0)
        }}>
            Clear
        </Button>
    )
}