import { TextField } from '@mui/material/';
import {  useSetRecoilState } from 'recoil';
import { number1State, number2State } from '../Store/atom/numberState';
import { ShowSymbol } from './ShowSymbol';

export function InputsBoxes() {
    const setNum1 = useSetRecoilState(number1State)
    const setNum2 = useSetRecoilState(number2State)
    
    return (
        <div style={{display:'flex',gap:'1rem',flexWrap:'wrap'}}>
            <TextField id="outlined-basic" label="Number 1" variant="outlined" type={'number'}
                placeholder='Enter Number'
                style={{ backgroundColor: '#eee', borderRadius: '5px' }}
                onChange={(e)=>{
                    setNum1(parseInt(e.target.value))
                }} />
                <ShowSymbol/>
            <TextField id="outlined-basic" label="Number 2" variant="outlined" type={'number'}
                placeholder='Enter Number'
                style={{ backgroundColor: '#eee', borderRadius: '5px' }} 
                onChange={(e) => {
                    setNum2(parseInt(e.target.value))
                }}/>
        </div>)
}