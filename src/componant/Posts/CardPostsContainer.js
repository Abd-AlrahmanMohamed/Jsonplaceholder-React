import React from "react";
import GetSpesificPostsHook from "../../hook/posts/Get-Spesific-Posts-Hook";
import { Card, Col, Container, Row } from "react-bootstrap";
import SubTitle from "../../Utitly/SubTitle";

const CardPostsContainer = () => {
  const [spesificPosts] = GetSpesificPostsHook();
  return (
    <div>
      <Container className="albumCard">
        <Row>
          <SubTitle
            title="Recent Albums"
            btntitle="More Posts"
            pathText="/post"
          />
        </Row>
        <Row className=" mt-3 albums ">
          {spesificPosts.length > 0
            ? spesificPosts.map((post) => (
                <Card key={post.id}>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.body}</Card.Text>
                </Card>
              ))
            : []}
        </Row>
      </Container>
    </div>
  );
};

export default CardPostsContainer;
