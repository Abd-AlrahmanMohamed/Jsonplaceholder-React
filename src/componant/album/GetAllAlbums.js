import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Col, Container, Row } from "react-bootstrap";
import getAllAlbums from "../../Api/AlbumApi/getAlbums";
import { Link } from "react-router-dom";

const GetAllAlbums = () => {
  const dispatch = useDispatch();

  const albums = useSelector((state) => state.getAlbumsData.getAlbums);

  useEffect(() => {
    dispatch(getAllAlbums());
  }, [dispatch]);

  return (
    <div>
      <Container>
        <Row>
          {albums.length > 0 ? (
            albums.map((album) => (
              <Col sm={12} md={4} lg={4} key={album.id} className="mt-5">
                <Card>
                  <Card.Body >
                    <Card.Title className=" text-lg-start text-black-50">{album.title}</Card.Title>
                    <Link to={`/albums/spesificAlbum/${album.id}`} className="text-decoration-none">
                    <Card.Title className="text-start mt-3 text-info ">Show AlbumPhotos</Card.Title>
                    </Link>
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

export default GetAllAlbums;
