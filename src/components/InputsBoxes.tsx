import { TextField } from '@mui/material/';
import {  useSetRecoilState } from 'recoil';
import { number1State, number2State} from '../Store/atom/numberState';
import { ShowSymbol } from './ShowSymbol';

export function InputsBoxes() {
    const number1 = useSetRecoilState(number1State)
    const number2 = useSetRecoilState(number2State)
    
    return (
        <div style={{display:'flex',gap:'1rem'}}>
            <TextField id="outlined-basic" label="Number 1" variant="outlined" type={'number'}
                placeholder='Enter Number'
                style={{ backgroundColor: '#eee', borderRadius: '5px' }}
                onChange={(e)=>{
                    if(e.target.value)
                    {
                        number1({
                            number1:parseInt(e.target.value)
                        })
                    }
                    else
                    {
                        number1({
                            number1:null
                        })
                    }
                }} />
                <ShowSymbol/>
            <TextField id="outlined-basic" label="Number 2" variant="outlined" type={'number'}
                placeholder='Enter Number'
                style={{ backgroundColor: '#eee', borderRadius: '5px' }} 
                onChange={(e) => {
                    if(e.target.value)
                    {
                        number2({

                            number2:(parseInt(e.target.value))
                        })
                    }
                    else
                    {
                        number2({
                            number2:null
                        })
                    }
                }}/>
        </div>)
}