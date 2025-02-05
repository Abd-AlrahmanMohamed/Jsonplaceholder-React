import React from "react";
import { useParams } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";
import GetOneAlbumHook from "../../hook/albums/Get-One-Album-Hook";

const GetOneAlbum = () => {
  const { id } = useParams();
  const [album, photos] = GetOneAlbumHook(id);


  return (
    <div>
      <Container>
        <Row>
          <h1 className=" mx-5">{album.title}</h1>
        </Row>
        <h1 className=' text-info my-3'>All Comments</h1>
        <Row>
          {Array.isArray(photos) && photos.length > 0 ? (
            photos.map((photo) => (
              <Col sm={6} md={4} lg={3} key={photo.id}>
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

export default GetOneAlbum;
