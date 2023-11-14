import { selector } from "recoil"
import { resultState } from "../atom/results";
export const totalOperatationState = selector({
    key:'totalOperationState',
    get:({get})=>{
        const state = get(resultState)
        return state.totalOperatation
    }
}) 