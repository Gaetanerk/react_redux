import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
    },
    reducers: {
        addProduct: (state, action) => {
            const newProduct = {
                id: state.products.length + 1,
                name: action.payload.name,
                price: action.payload.price
            }
            state.products.push(newProduct);
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload);
        },
        editProduct: (state, action) => {
            const { id, name, price } = action.payload;
            const existingProduct = state.products.find(product => product.id === id);
            if (existingProduct) {
                existingProduct.name = name;
                existingProduct.price = price;
            }
        }
    }
});

export const { addProduct, deleteProduct, editProduct } = productsSlice.actions;
export default productsSlice.reducer;