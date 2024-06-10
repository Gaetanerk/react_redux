import {configureStore} from '@reduxjs/toolkit'
import ProductsSlice from './components/Product/ProductsSlice'

export default configureStore({
    reducer: {
        product: ProductsSlice,
    }
})