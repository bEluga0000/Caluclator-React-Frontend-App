import { selector } from "recoil";
import { number1State } from "../atom/numberState";

export const num1State = selector({
    key:'num1State',
    get:({get})=>{
        const state = get(number1State)
        return state.number1
    }
})