import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../Api/postsApi/getAllPosts";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function GetPosts() {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.postsData.isLoading);
  const posts = useSelector((state) => state.postsData.posts);
  const error = useSelector((state) => state.postsData.error);
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);
  return (
    <div>
      <Container>
        <Row>
          {isLoading && <div>Loading...</div>}
          {error && <div>Error: {error}</div>}
          {posts && posts.length > 0 ? (
            posts.map((post) => (
                <Col
                  key={post.id}
                  sm={12}
                  md={4}
                  lg={4}
                  className="culomn mt-3"
                >
                  <h2 className="head text-center">{post.title}</h2>
                  <p>{post.body}</p>
                  <Link to={`spesificPost/${post.id}`} className="text-decoration-none">
                  <h4 className="text-info ">Show Comments</h4>
                  </Link>
                </Col>
            ))
          ) : ([])}
        </Row>
      </Container>
    </div>
  );
}
