import { Button } from "@mui/material";
import { useSetRecoilState } from "recoil";
import { resultState } from "../Store/atom/results";
import { symbolState } from "../Store/atom/symbol";

export function ClearButton(){
    const results = useSetRecoilState(resultState)
    const setSymbol = useSetRecoilState(symbolState)
return(
        <Button variant="contained"
        color="error"
        onClick={()=>{
            results({
                presentValue:0,
                totalValue:0,
                totalOperatation:0
            })
            setSymbol("+")
        }}>
            Clear
        </Button>
    )
}