import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const setAsyncNotification = createAsyncThunk('ui/setNotification', async (payload, {dispatch}) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
        }, 3000)
    })
    return promise.then(x => x)
})

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        notificationShow: false,
        notificationTitle: 'Title',
        notificationMsg: 'Message',
        notificationState: 'warning'
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(setAsyncNotification.pending, (state, {meta}) => {
            state.notificationState = meta.arg.state
            state.notificationTitle = meta.arg.title
            state.notificationMsg = meta.arg.msg
            state.notificationShow = true
        })
        builder.addCase(setAsyncNotification.fulfilled, (state, {payload}) => {
            state.notificationShow = false
        })
    }
})

export const {
} = uiSlice.actions

export {
    setAsyncNotification
}

export default uiSlice.reducer