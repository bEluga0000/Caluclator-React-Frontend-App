import { TextField, Button } from '@mui/material/';
// import { Dispatch, SetStateAction } from 'react';
import { useResult } from '../ContextApi/resultContext';

export function InputsBoxes() {
    const{symbol,setNum1,setNum2} = useResult()
    return (
        <div style={{display:'flex',gap:'1rem',flexWrap:'wrap'}}>
            <TextField id="outlined-basic" label="Number 1" variant="outlined" type={'number'}
                placeholder='Enter Number'
                style={{ backgroundColor: '#eee', borderRadius: '5px' }}
                onChange={(e)=>{
                    setNum1(parseInt(e.target.value))
                }} />
            <Button style={{ backgroundColor: '#87C4FF', color: 'black', fontSize: '1.5rem', fontWeight: 'bolder', borderRadius: '35px' }} disableElevation>{symbol}</Button>
            <TextField id="outlined-basic" label="Number 2" variant="outlined" type={'number'}
                placeholder='Enter Number'
                style={{ backgroundColor: '#eee', borderRadius: '5px' }} 
                onChange={(e) => {
                    setNum2(parseInt(e.target.value))
                }}/>
        </div>)
}