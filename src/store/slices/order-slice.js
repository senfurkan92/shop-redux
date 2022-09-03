import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../helper/axios-instance'
import { removeAllFromCart } from './cart-slice'
import { setAsyncNotification } from './ui-slice'

const submitOrder = createAsyncThunk('order/submitOrder', async (payload, {dispatch}) => {
    payload._date = new Date()
    const resp = await axiosInstance.post('/orders.json', payload)
    if (resp.status == 200) {
        console.log(resp.data)
        dispatch(removeAllFromCart())
        dispatch(setAsyncNotification({
            title: 'new order',
            msg: `Your order has been successfully registered. Order number: ${resp.data.name}`,
            state: 'success'
        }))
    }
    return resp.data
})

const orderSlice = createSlice({
    name: 'order',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(submitOrder.fulfilled, (state, {payload}) => {
        })
    }
})

export const {} = orderSlice.actions

export {
    submitOrder
}

export default orderSlice.reducer