import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

const ProductList = () => {
    const products = useSelector(state => state.product.products);

    return (
        <>
            {products.map((product, index) => (
                <ProductItem product={product} key={index} />
            ))}
        </>
    );
};

export default ProductList;