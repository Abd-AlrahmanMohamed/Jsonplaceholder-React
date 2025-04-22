import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import getAllProducts from "../../api/Product/ApiGetAllProducts";
import { Link } from "react-router-dom";

const ProductsCard = () => {
  const dispatch = useDispatch();
  
  // Assuming the state is under 'productsData' and 'error' (not 'erorr' or 'productsReducer')
  const isLoading = useSelector((state) => state.productsData.isLoading);
  const product = useSelector((state) => state.productsData.products);
  const error = useSelector((state) => state.productsData.error);  // Corrected the typo from 'erorr' to 'error'

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div>
      {error !== null ? <h1>{error}</h1> : null}  {/* Corrected 'erorr' to 'error' */}

      {isLoading ? (
        <h1>Loading...</h1>
      ) : product.length >= 1 ? (
        product.map((product) => (
          <Card  style={{ width: '18rem', margin: '10px' }}>
            {/* Card Header with Product Name */}
            
            <Card.Body>
              {/* Product Image */}
              {product.image1 && (
                <Card.Img variant="top" src={product.image1} alt="" />
              )}
              <Link to={`/spesicficProduct/${product.id}`}>
              <Card.Header key={product.id}>{product.name}</Card.Header>
              </Link>
              {/* Product Description */}
              <Card.Text>
                {product.description}
              </Card.Text>

              {/* Product Price */}
              <h5>Price: ${product.price}</h5>

              {/* Card Footer with Brand and Color */}
              <div>
                <strong>Brand:</strong> {product.brand}
                <br />
                <strong>Color:</strong> {product.color}
              </div>
            </Card.Body>

            {/* Card Footer with Additional Options */}
            <Card.Footer>
              <Button variant="primary">Buy Now</Button>
            </Card.Footer>
          </Card>        ))
      ) : (
        <h5>No posts</h5>
      )}
    </div>
  );
};

export default ProductsCard;

// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import getAllProducts from '../../api/Product/ApiGetAllProducts';
// import { Card, Button } from 'react-bootstrap';

// const ProductsCard = () => {
//   const dispatch = useDispatch();

//   const isLoading = useSelector((state) => state.products.isLoading);
//   const products = useSelector((state) => state.products.products);
//   const error = useSelector((state) => state.products.error);

//   useEffect(() => {
//     dispatch(getAllProducts());
//   }, [dispatch]);

//   return (
//     <div>
//       {error && <h1>{error}</h1>}  {/* Show error message if exists */}

//       {isLoading ? (
//         <h1>Loading...</h1>
//       ) : products?.length > 0 ? (
//         products.map((product) => (
//           <Card key={product.id} style={{ width: '18rem', margin: '10px' }}>
//             {/* Card Header with Product Name */}
//             <Card.Header>{product.name}</Card.Header>
            
//             <Card.Body>
//               {/* Product Image */}
//               {product.image1 && (
//                 <Card.Img variant="top" src={product.image1} alt={product.name} />
//               )}

//               {/* Product Description */}
//               <Card.Text>
//                 {product.description}
//               </Card.Text>

//               {/* Product Price */}
//               <h5>Price: ${product.price}</h5>

//               {/* Card Footer with Brand and Color */}
//               <div>
//                 <strong>Brand:</strong> {product.brand}
//                 <br />
//                 <strong>Color:</strong> {product.color}
//               </div>
//             </Card.Body>

//             {/* Card Footer with Additional Options */}
//             <Card.Footer>
//               <Button variant="primary">Buy Now</Button>
//             </Card.Footer>
//           </Card>
//         ))
//       ) : (
//         <h5>No posts</h5>
//       )}
//     </div>
//   );
// };

// export default ProductsCard;
