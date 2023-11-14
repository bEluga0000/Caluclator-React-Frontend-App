import { selector } from "recoil";
import { resultState } from "../atom/results";

export const presentValueSate = selector({
    key:'presentValueState',
    get:({get})=>{
        const state = get(resultState)
        return state.presentValue
    }
})

