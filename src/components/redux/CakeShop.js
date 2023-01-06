import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import { useSelector, useDispatch } from 'react-redux'
import { BuyCake } from './Action'


const CakeShop = () => {

    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const buyCakeFunc = () => {
        if (state.cakes < 10 ) {
            dispatch(BuyCake())
        } else {
            alert('Out of Order')
        }
        
    }

    return (

        <div>
            <h1>Cake Shop</h1>
            <h2>Cakes : {state.cakes}</h2>
            <button onClick={buyCakeFunc}>Buy Cake</button>
        </div>

    )
}

export default CakeShop