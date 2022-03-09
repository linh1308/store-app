import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state[index].quantity += 1;
            } else {
                return [...state, action.payload];
            }
        },

        deleteFromCart: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            } else return;
        },

        increaseQuantity: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload);
            if (index !== -1) {
                state[index].quantity += 1;
            }
        },

        decreaseQuantity: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload);
            if (index !== -1) {
                if (state[index].quantity > 1) {
                    state[index].quantity -= 1;
                } else {
                    state[index].quantity = 1;
                }
            }
        }
    }
});

export const { addToCart, deleteFromCart, increaseQuantity, decreaseQuantity } = productsSlice.actions;
export default productsSlice.reducer;