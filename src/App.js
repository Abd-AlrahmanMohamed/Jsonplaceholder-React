// App.js
import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar"; 
import GetAllPhotos from "./Components/JsonPlaceholder/GetAllPhotos";
// import Home from "./Pages/Home";
// import ProductsCard from "./Components/Product/GetProductCard";
// import CardProductContainer from "./Components/Product/CardProductContainer";
// import Register from "./Components/Admin/Register";
// import Login from "./Components/Admin/login";
// import AddProduct from "./Components/Product/Add-Product";
// import AddCart from "./Components/Product/Cart";
// import GetOneProduct from "./Components/GetOneProduct";
// import getstore from "./api/fakestore/";



function App() {
  return (

    <div>
      <NavBar />

      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<CardProductContainer/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/> 
        <Route path="/addproduct" element={<AddProduct/>}/> 
        <Route path="/spesicficProduct/:id" element={<GetOneProduct/>}/> 
        <Route path="/addcart" element={<AddCart/>}/> 
        <Route path="/fake" element={<getfakestore/>}/>                */}
          <Route path="/photos" element={<GetAllPhotos/>}/>
      </Routes>

      </BrowserRouter>

    </div>

  );
}

export default App;
