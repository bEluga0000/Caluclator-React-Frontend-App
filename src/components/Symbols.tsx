import { Button } from "@mui/material"
import  {  Dispatch, SetStateAction } from 'react';
type SymbolState = string;
type SetSymbol = Dispatch<SetStateAction<SymbolState>>;
interface ChildComponentProps {
    setSymbol: SetSymbol;
}
export function Symbols({ setSymbol }: ChildComponentProps)
{
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