import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ApiAddCart from '../../api/Product/ApiAddCart';  // Import your API action

const AddCartHook = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.addCartData.isLoading);
    const addCart = useSelector((state) => state.addCartData.addCart);
    const error = useSelector((state) => state.addCartData.error);

    // State management for inputs
    const [custom, setCustom] = useState("");
    const [size, setSize] = useState("");
    const [quantity, setQuantity] = useState("");
    const [productid, setProductId] = useState("");
    const [orderid, setOrderId] = useState("");
    const [loading, setLoading] = useState(false); // Define the loading state

    // Handle input changes
    const onChangeCustomCart = (e) => {
        setCustom(e.target.value);
    };
    
    const onChangeQuantity = (e) => {
        setQuantity(e.target.value);
    };

    const onChangeSize = (e) => {
        setSize(e.target.value);
    };

    const onChangeProductId = (e) => {
        setProductId(e.target.value);
    };

    const onChangeOrderId = (e) => {
        setOrderId(e.target.value);
    };

    // Handle form submit
    const onChangeSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Dispatch API action to add to cart
        await dispatch(ApiAddCart({custom, size, quantity, productid, orderid}));

        console.log({ custom, size, quantity, productid, orderid });
        setLoading(false);
    };

    // Return values and handlers as an object for better organization
    return {
        custom,
        size,
        quantity,
        productid,
        orderid,
        isLoading,
        error,
        onChangeSubmit,
        onChangeCustomCart,
        onChangeSize,
        onChangeQuantity,
        onChangeProductId,
        onChangeOrderId,
        loading,  // Add loading state to be used outside the hook
    };
};

export default AddCartHook;
