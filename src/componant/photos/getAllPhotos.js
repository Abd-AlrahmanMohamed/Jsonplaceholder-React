import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPhotos } from "../../Api/photosApi/getAllPhotos";
import { Card, Col, Container, Row } from "react-bootstrap"; // Added Spinner

const GetAllPhotos = () => {
  const dispatch = useDispatch();

  // Get photos from Redux store
  const photos = useSelector((state) => state.photosData.photos);

  useEffect(() => {
    dispatch(getAllPhotos());
  }, [dispatch]);

  return (
    <div>
      <Container>
        <Row>
          {photos.length > 0 ? (
            photos.map((photo) => (
              <Col sm={12} md={4} lg={4} key={photo.id} className="mt-5">
                <Card>
                  <Card.Img variant="top" src={photo.thumbnailUrl} />
                  <Card.Body>
                    <Card.Title>{photo.title}</Card.Title>
                    <Card.Text>{photo.url}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : ([])}
        </Row>
      </Container>
    </div>
  );
};

export default GetAllPhotos;
