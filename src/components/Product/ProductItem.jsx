import React, { useState, useRef } from 'react';
import { useDispatch } from "react-redux";
import { editProduct, deleteProduct } from "./ProductsSlice";

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const inputName = useRef(product.name);
    const inputPrice = useRef(product.price);

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleChange = (event) => {
        event.preventDefault();
        dispatch(editProduct({ id: product.id, name: inputName.current.value, price: inputPrice.current.value }));
        setIsEditing(false);
    }

    return (
        <div>
            {!isEditing ? (
                <div>
                    <p>{product.name} - {product.price}€</p>
                    <button onClick={handleEdit}>Modifier</button>
                    <button onClick={() => dispatch(deleteProduct(product.id))}>Supprimer</button>
                </div>
            ) : (
                <form onSubmit={handleChange}>
                    <p>
                        <input 
                            type="text" 
                            defaultValue={product.name} 
                            ref={inputName} 
                        />
                        <input 
                            type="text" 
                            defaultValue={product.price} 
                            ref={inputPrice} 
                        />€ 
                        <button type="submit">Valider</button>
                    </p>
                </form>
            )}
        </div>
    );
};

export default ProductItem;
