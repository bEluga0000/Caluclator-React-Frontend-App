import { atom } from "recoil";

export const numberState = atom<{num1 :null|number,num2:null|number}>({
    key:'number2State',
    default:{
        num1:null,
        num2:null
    }
})
export const number1State = atom<{number1:null|number}>({
    key:'number1State',
    default:{
        number1:null
    }
})
export const number2State = atom<{number2:null|number}>({
    key:'number2State',
    default:{
        number2:null
    }
})