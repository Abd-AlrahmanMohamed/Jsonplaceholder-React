import React from "react";
import CardAlbumsContainer from "../album/CardAlbumsContainer";
import CardPostsContainer from "../Posts/CardPostsContainer";
import { Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const HoomePage = () => {
  return (
    <div>
      <Container className=" d-flex justify-content-between gap-3">
        <Col sm={12} md={3} lg={4} className="homeSideBar">
          <Link to={"/post"} className=" text-decoration-none text-info-emphasis"><h1>Posts</h1></Link>
          <Link to={"/albums"} className=" text-decoration-none text-info-emphasis"><h1>Albums</h1></Link>
        </Col>
        <Col sm={12} md={9} lg={8}>
          <CardAlbumsContainer />
          <CardPostsContainer />
        </Col>
      </Container>
    </div>
  );
};

export default HoomePage;
