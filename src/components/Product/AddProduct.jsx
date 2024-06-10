import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "./ProductsSlice";

const AddProduct = () => {
    const nameRef = useRef();
    const priceRef = useRef();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProduct({ name: nameRef.current.value, price: priceRef.current.value }));
        nameRef.current.value = "";
        priceRef.current.value = "";
        nameRef.current.focus();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={nameRef} placeholder="Ajouter un produit" autoFocus />
            <input type="text" ref={priceRef} placeholder="Ajouter un prix" />
            <button>Ajouter un produit</button>
        </form>
    );
};

export default AddProduct;