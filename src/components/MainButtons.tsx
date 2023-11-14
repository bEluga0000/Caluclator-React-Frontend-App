import { ResultButton } from "./ResultButton"
import { ClearButton } from "./ClearButton"
export function MainButtons(){
    return(
        <div style={{display:'flex',gap:'15rem'}}>
            <ResultButton></ResultButton>
            <ClearButton />
        </div>
    )
}