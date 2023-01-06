import React from 'react'
import { BUYCAKE } from './ActionType'

const initialState ={
    cakes: 2
}

export const CakeReducer =(state = initialState, action)=> {
    switch(action.type) {
        case BUYCAKE : 
        return {
            cakes : state.cakes +1
        }
        
        default : return state
    }
}