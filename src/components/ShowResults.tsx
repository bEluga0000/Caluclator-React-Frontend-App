import { Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { presentValueSate } from "../Store/selectors/prsentValue";
import { totalOperatationState } from "../Store/selectors/totalOperatation";
import { totalValueState } from "../Store/selectors/totalValue";

export function ShowResults(){
    
    const presentValue = useRecoilValue(presentValueSate)
    const totalValue = useRecoilValue(totalValueState)
    const totalOperation = useRecoilValue(totalOperatationState)
    return(
        <div style={{ color: 'white' ,display:'flex',gap:'1rem'}}>
            <Typography variant="subtitle1" style={{ display: 'inline' }}> Present Value:&nbsp;<Typography variant="h5" style={{ display: 'inline' }}>{presentValue}</Typography></Typography>
            <br/>
            <Typography variant="subtitle1" style={{ display: 'inline' }}> Total Value: &nbsp;<Typography variant="h5" style={{ display: 'inline' }}>{totalValue}</Typography></Typography>
            <br/>
            <Typography variant="subtitle1" style={{ display: 'inline' }}> TotalOperation: &nbsp;<Typography variant="h5" style={{ display: 'inline' }}>{totalOperation}</Typography></Typography>

        </div>
    )
}