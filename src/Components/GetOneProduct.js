import React from "react";
import { useParams } from "react-router-dom";
import GetOneProductHook from "../Hook/Products/Get-One-Product-Hook";
import { Card, Col, Container, Row } from "react-bootstrap";

const GetOneProduct = () => {
  const { id } = useParams(); // Get the product ID from the URL parameters
  const [product] = GetOneProductHook(id); // Get product data from custom hook

  console.log(id); // Just to check if ID is being captured
  console.log(product.colors);
  return (
    <Container className="mt-5">
      <Row>
        <React.Fragment key={product.id}>
          <Col sm="4" xs="4" md="4" lg="4">
            <Card>
              <Card.Img
                style={{ minHeight: "330px" }}
                variant="top"
                src={`data:image/png;base64,${product.images}`} // Fallback if no image
                alt={product.images}
              />
            </Card>
          </Col>
          <Col sm="8" xs="8" md="8" lg="8">
            <Card style={{ minHeight: "300" }}>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  <div className="mt-5" style={{ minHeight: "100px" }}>
                    {product.description}
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>{product.brand}</div>
                    {Array.isArray(product.colors) ? (
                      product.colors.map((color, index) => (
                        <div
                          key={index}
                          style={{
                            backgroundColor: color,
                            width: "30px",
                            height: "30px",
                            borderRadius: "12px",
                          }}
                        ></div>
                      ))
                    ) : (
                      <div>{product.colors}</div>
                    )}
                  </div>
                  <div className="mt-5">
                    <h2>{product.price} جنيه</h2>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </React.Fragment>
      </Row>
    </Container>
  );
};

export default GetOneProduct;

// {
//     Array.isArray(product.colors) && product.colors.length > 1 ? (
//       product.colors.map((color, index) => (
//         <div
//           key={index}
//           style={{
//             backgroundColor: color,
//             width: "30px",
//             height: "30px",
//             borderRadius: "12px",
//             display: "inline-block",
//             marginRight: "5px"
//           }}
//         ></div>
//       ))
//     ) : (
//       <div
//         style={{
//           backgroundColor: product.colors,
//           width: "30px",
//           height: "30px",
//           borderRadius: "12px",
//           display: "inline-block"
//         }}
//       >
//         {product.colors}
//       </div>
//     )
//   }
