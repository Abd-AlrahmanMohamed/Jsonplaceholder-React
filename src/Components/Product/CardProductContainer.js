import { Container, Row } from "react-bootstrap";
import SubTitle from "../../Uitily/SubTitle";  // Make sure this import is correct
import ProductsCard from "./GetProductCard";
const CardProductContainer = ({ title, btntitle, products }) => {
    return (
        <Container>
        {/* <Row>
                <SubTitle title={title} btntitle={btntitle} />
                </Row> */}
            <Row>
            {/* <SubTitle title={title} btntitle={btntitle} /> */}

                        <ProductsCard />
            </Row>
        </Container>
    );
};

export default CardProductContainer;



// // import { Container, Row } from "react-bootstrap";
// // import SubTitle from "../../Uitily/SubTitle";
// // import GetProductCard from "./GetProductCard"; // Make sure to import GetProductCard

// // const CardProductContainer = ({ title, btntitle, products }) => {
// //   return (
// //     <Container>
// //       {products ? (
// //         <SubTitle title={title} btntitle={btntitle} />
// //       ) : null}
// //       <Row>
// //         {products ? (
// //           products.map((item, index) => <GetProductCard key={index} item={item} />)
// //         ) : null}
// //       </Row>
// //     </Container>
// //   );
// // };

// // export default CardProductContainer;
