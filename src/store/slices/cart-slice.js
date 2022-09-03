import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addToCart : (state, {payload}) => {
            let item = {...payload.item}
            let itemInCart = state.items.find(x => x.id == item.id)
            if (itemInCart) {
                itemInCart.amount += payload.amount
            } else {
                item.amount = payload.amount
                state.items = [
                    ...state.items,
                    item
                ]
            }
        },
        removeFromCart : (state, {payload}) => {
            state.items = state.items.filter(x => x.id != payload)
        },
        increaseAmount : (state, {payload}) => {
            let itemInCart = state.items.find(x => x.id == payload)
            itemInCart.amount += 1
        },
        decreaseAmount : (state, {payload}) => {
            let itemInCart = state.items.find(x => x.id == payload)
            if (itemInCart.amount == 1) {
                state.items = state.items.filter(x => x.id != payload)
            } else {
                itemInCart.amount -= 1
            }
        },
        removeAllFromCart : (state) => {
            state.items = []
        }
    }
})

export const { addToCart, increaseAmount, decreaseAmount, removeFromCart, removeAllFromCart } = cartSlice.actions

export default cartSlice.reducer