import { TextField, Button } from '@mui/material/';
import { Dispatch, SetStateAction } from 'react';
type Num1State = number;
type Num2State = number;
type SetNum1 = Dispatch<SetStateAction<Num1State>>;
type SetNum2 = Dispatch<SetStateAction<Num2State>>;

export function InputsBoxes({symbol,setNum1,setNum2}:{symbol:string,setNum1:SetNum1,setNum2:SetNum2}) {
    return (
        <div style={{display:'flex',gap:'.5rem'}}>
            <TextField id="outlined-basic" label="Number 1" variant="outlined" type={'number'}
                placeholder='Enter Number'
                style={{ backgroundColor: '#eee', borderRadius: '5px' }}
                onChange={(e)=>{
                    setNum1(parseInt(e.target.value))
                }} />
            <Button style={{ backgroundColor: '#87C4FF', color: 'black', fontSize: '1.5rem', fontWeight: 'bolder', borderRadius: '35px' }} disableElevation>{symbol}</Button>
            <TextField id="outlined-basic" label="Number 1" variant="outlined" type={'number'}
                placeholder='Enter Number'
                style={{ backgroundColor: '#eee', borderRadius: '5px' }} 
                onChange={(e) => {
                    setNum2(parseInt(e.target.value))
                }}/>
        </div>)
}