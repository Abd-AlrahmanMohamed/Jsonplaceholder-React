import React from "react";
import GetSpesificAlbumsHook from "../../hook/albums/Get-Spesific-Albums-Hook";
import { Card, CardTitle, Container, Row } from "react-bootstrap";
import SubTitle from "../../Utitly/SubTitle";

const CardAlbumsContainer = () => {
  const [spesificAlbums] = GetSpesificAlbumsHook();
  return (
    <div>
      <Container className="albumCard">
        <Row>
          <SubTitle
            title="Recent Albums"
            btntitle="More Albums"
            pathText="/albums"
          />
        </Row>
        <Row className=" mt-3 albums">
            {spesificAlbums.length > 0
              ? spesificAlbums.map((album) => (
                  <Card key={album.id}>
                    <CardTitle>{album.title}</CardTitle>
                  </Card>
                ))
              : []}
        </Row>
      </Container>
    </div>
  );
};

export default CardAlbumsContainer;
