import { configureStore } from '@reduxjs/toolkit'
import uiReducer from './slices/ui-slice'
import mealReducer from './slices/meal-slice'
import cartReducer from './slices/cart-slice'
import orderReducer from './slices/order-slice'

const store = configureStore({
    reducer: {
        ui: uiReducer,
        meal: mealReducer,
        cart: cartReducer,
        order: orderReducer
    }
})

export default store