import { Button } from "@mui/material"
import { useSetRecoilState } from "recoil"
import { symbolState } from "../Store/atom/symbol"
// import  {  Dispatch, SetStateAction } from 'react';

export function Symbols()
{
    const setSymbol = useSetRecoilState(symbolState)
    return(
        <div>
            <Button style={{ backgroundColor: '#F4CE14', color: 'black', fontSize: '1', fontWeight: '600', borderRadius: '35px' }}
                onClick={() => { setSymbol("+") }}>+</Button>
            <Button style={{ backgroundColor: '#F4CE14', color: 'black', fontSize: '1', fontWeight: '600', borderRadius: '35px' }}
            onClick={()=>{setSymbol("-")}}>-</Button>
            <Button style={{ backgroundColor: '#F4CE14', color: 'black', fontSize: '1', fontWeight: '600', borderRadius: '35px' }}
                onClick={() => { setSymbol("*") }}>*</Button>
            <Button style={{ backgroundColor: '#F4CE14', color: 'black', fontSize: '1', fontWeight: '600', borderRadius: '35px' }}
                onClick={() => { setSymbol("/") }}>/</Button>
        </div>
    )
}