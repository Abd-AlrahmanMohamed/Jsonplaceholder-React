import { useDispatch, useSelector } from 'react-redux'
import getOneProduct from '../../api/Product/ApiGetOneProduct'
import { useEffect } from 'react'

const GetOneProductHook = (id) => {
 const dispatch = useDispatch();

 const isLoading = useSelector((state) => state.onProductData.isLoading);
 const oneProduct = useSelector((state) => state.onProductData.oneProduct);
 const error = useSelector((state) => state.onProductData.error);


useEffect (() => {
    dispatch(getOneProduct(id))
},[id,dispatch])


let product = [];

if(oneProduct)
    product = oneProduct;
else
product = []
return [product]

}

export default GetOneProductHook
