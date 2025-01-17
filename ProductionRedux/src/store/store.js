import {configureStore } from '@reduxjs/toolkit'
import cartReducer from '../slice/cartSlice'

const store = configureStore({
    reducer:{
        cart: cartReducer,
    },
    devTools: true,
})

export default store;