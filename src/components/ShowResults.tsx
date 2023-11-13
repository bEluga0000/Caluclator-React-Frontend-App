import { Typography } from "@mui/material";
import { useResult } from "../ContextApi/resultContext";

export function ShowResults(){
    const {presentValue,totalValue,totalOperation} = useResult()
    return(
        <div style={{ color: 'white' }}>
            <Typography variant="subtitle1" style={{ display: 'inline' }}> Present Value:&nbsp;<Typography variant="h5" style={{ display: 'inline' }}>{presentValue}</Typography></Typography>
            <br/>
            <Typography variant="subtitle1" style={{ display: 'inline' }}> Total Value: &nbsp;<Typography variant="h5" style={{ display: 'inline' }}>{totalValue}</Typography></Typography>
            <br/>
            <Typography variant="subtitle1" style={{ display: 'inline' }}> TotalOperation: &nbsp;<Typography variant="h5" style={{ display: 'inline' }}>{totalOperation}</Typography></Typography>

        </div>
    )
}