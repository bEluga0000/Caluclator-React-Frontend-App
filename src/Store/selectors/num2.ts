import { selector } from "recoil";
import { number2State } from "../atom/numberState";

export const num2State = selector({
    key:'num2State',
    get:({get})=>{
        const state = get(number2State)
        return state.number2
    }
})