import React from 'react';
import AddCartHook from '../../Hook/Products/Add-Cart-Hook';
import { Col, Container, Row } from 'react-bootstrap';

const AddCart = () => {
  // Destructure the hook response (better approach using object return)
  const {
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
  } = AddCartHook();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent default form submission behavior
    onChangeSubmit(e);  // Call your submit function from the hook
  };

  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center">
        <Col sm="12" className="d-flex flex-column">
          <label className="mx-auto">اضافة منتج جديد</label>

          {/* Custom Input */}
          <input
            value={custom}
            onChange={onChangeCustomCart}
            placeholder="الاسم الاول"
            type="text"
            className="addproduct-input mt-3 text-center mx-auto"
          />

          {/* Size Input */}
          <input
            value={size}
            onChange={onChangeSize}
            placeholder="Size"
            type="number"
            className="addproduct-input mt-3 text-center mx-auto"
          />

          {/* Quantity Input */}
          <input
            value={quantity}
            onChange={onChangeQuantity}
            placeholder="Quantity"
            type="number"
            className="addproduct-input mt-3 text-center mx-auto"
          />

          {/* Product ID Input */}
          <input
            value={productid}
            onChange={onChangeProductId}
            placeholder="Product ID"
            type="number"
            className="addproduct-input mt-3 text-center mx-auto"
          />

          {/* Order ID Input */}
          <input
            value={orderid}
            onChange={onChangeOrderId}
            placeholder="Order ID"
            type="number"
            className="addproduct-input mt-3 text-center mx-auto"
          />

          {/* Submit Button */}
          // Inside AddCart component

<form onSubmit={handleSubmit}>
  {/* Your inputs go here */}
  <button
    type="submit"
    disabled={isLoading}
    className="user-input mt-3 text-center mx-auto bg-black text-white"
  >
    {isLoading ? 'Adding...' : 'Add to Cart'}
  </button>
</form>

        </Col>
      </Row>
    </Container>
  );
};

export default AddCart;
