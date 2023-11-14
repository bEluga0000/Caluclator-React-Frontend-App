import {atom} from 'recoil'
export const resultState = atom({
    key:'resultState',
    default:{
        presentValue: 0,
        totalValue: 0,
        totalOperatation: 0
    }
})