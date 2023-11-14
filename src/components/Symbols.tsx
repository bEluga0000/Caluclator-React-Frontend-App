import { Button } from "@mui/material"
import { useSetRecoilState } from "recoil"
import { symbolState } from "../Store/atom/symbol"
// import  {  Dispatch, SetStateAction } from 'react';

export function Symbols()
{
    const setSymbol = useSetRecoilState(symbolState)
    return(
        <div style={{display:'flex',gap:'2rem'}}>
            <Button style={{ backgroundColor: '#F4CE14', color: 'black', fontSize: '1.2rem', fontWeight: '600', borderRadius: '50rem' }}
                onClick={() => { setSymbol("+") }}>+</Button>
            <Button style={{ backgroundColor: '#F4CE14', color: 'black', fontSize: '1.2rem', fontWeight: '600', borderRadius: '50rem' }}
            onClick={()=>{setSymbol("-")}}>-</Button>
            <Button style={{ backgroundColor: '#F4CE14', color: 'black', fontSize: '1.2rem', fontWeight: '600', borderRadius: '50rem' }}
                onClick={() => { setSymbol("*") }}>*</Button>
            <Button style={{ backgroundColor: '#F4CE14', color: 'black', fontSize: '1.2rem', fontWeight: '600', borderRadius: '50rem' }}
                onClick={() => { setSymbol("/") }}>/</Button>
        </div>
    )
}