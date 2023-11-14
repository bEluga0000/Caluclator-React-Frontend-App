import { selector } from "recoil"
import { resultState } from "../atom/results";
export const totalValueState = selector({
    key:'totalValueState',
    get:({get})=>{
        const state = get(resultState)
        return state.totalValue
    }
})