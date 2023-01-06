import React, {useState} from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import {useSelector, useDispatch} from 'react-redux'
import CakeShop from './CakeShop'

const ReduxExample =()=> {
    return (
        <Provider store={store}>
        <div>
            <CakeShop />
        </div>
        </Provider>
    )
}
export default ReduxExample