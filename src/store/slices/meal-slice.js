import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../helper/axios-instance'

const fetchMeals = createAsyncThunk('meal/fetchMeals', async () => {
    const resp = await axiosInstance.get('meals.json')
    const list = []
    const data = resp.data
    for(let key in data){ 
        list.push({
            id: key,
            ...data[key]
        }) 
    }
    return list
})


const mealSlice = createSlice({
    name: 'meal',
    initialState: {
        list: [
        ]
    },
    reducers: {
        setList: (state, {payload}) => {
            state.list = payload
        } 
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMeals.pending, (state, action) => {
        })
        builder.addCase(fetchMeals.fulfilled, (state, {payload}) => {
            state.list = payload
        })
    }
})

// reducer
export const {
    setList,
} = mealSlice.actions

// action
export {
    fetchMeals
}

export default mealSlice.reducer