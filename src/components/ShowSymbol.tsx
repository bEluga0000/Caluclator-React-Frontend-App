
import { Button } from "@mui/material"
import { useRecoilValue } from "recoil"
import { symbolState } from "../Store/atom/symbol"
export function ShowSymbol(){
    const symbol  = useRecoilValue(symbolState)
    return(

        <Button style={{ backgroundColor: '#87C4FF', color: 'black', fontSize: '1.5rem', fontWeight: 'bolder', borderRadius: '35px' }} disableElevation>{symbol}</Button>
    )
}