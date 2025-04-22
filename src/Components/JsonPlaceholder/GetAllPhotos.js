import React, { useEffect } from "react";
import getAllPhotos from "../../api/JsonPlaceholderApi/GetPhotosApi";
import { useDispatch, useSelector } from "react-redux";

const GetAllPhotos = () => {
  const dispatch = useDispatch();

  // Assuming the state is under 'productsData' and 'error' (not 'erorr' or 'productsReducer')
  const isLoading = useSelector((state) => state.photosData.isLoading);
  const photos = useSelector((state) => state.photosData.photos);
  const error = useSelector((state) => state.photosData.error); // Corrected the typo from 'erorr' to 'error'

  useEffect(() => {
    dispatch(getAllPhotos());
  }, []);

  return (
    <div>
      {error !== null ? <h1>{error}</h1> : null}{" "}
      {/* Corrected 'erorr' to 'error' */}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : photos.length >= 1 ? (
        photos.map((photo) => (
          <Card style={{ width: "18rem", margin: "10px" }}>
            {/* Card Header with Product Name */}

            <Card.Body>
              {/* Product Image */}
              {photo.url && <Card.Img variant="top" src={photo.url} alt="" />}
              {/* <Link to={`/spesicficProduct/${product.id}`}> */}
              <Card.Header key={photo.id}>{photo.title}</Card.Header>
              {/* </Link> */}
              {/* Product Description */}
              <Card.Text>{photo.thumbnailUrl}</Card.Text>
            </Card.Body>
          </Card>
        ))
      ) : (
        <h5>No photos</h5>
      )}
    </div>
  );
};

export default GetAllPhotos;
