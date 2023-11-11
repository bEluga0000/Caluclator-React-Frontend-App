import { Typography } from "@mui/material"
export function Results({resultType,result}:{resultType:string,result:number})
{
    return(
        <div style={{color:'white'}}>
            <Typography variant="subtitle1" style={{ display: 'inline' }}>{resultType} :&nbsp;<Typography variant="h5" style={{ display: 'inline' }}>{result}</Typography></Typography>
        </div>
    )
}