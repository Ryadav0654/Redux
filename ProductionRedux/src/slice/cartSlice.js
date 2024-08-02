import { createSlice, createSelector } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    }, 
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        }
    }
})


export const getItemsSelector = createSelector(
    (state) => state.cart.items,
    (items) => items
  );

export const { addItem } = cartSlice.actions

export default cartSlice.reducer;