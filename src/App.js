import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GetPosts from './componant/Posts/getAllPosts';
import GetOnePost from './componant/Posts/getOnePosts';
import GetAllPhotos from './componant/photos/getAllPhotos';
import GetAllAlbums from './componant/album/GetAllAlbums';
import GetOneAlbum from './componant/album/GetOneAlbum';
import HoomePage from './componant/home/HoomePage';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
       <Route path="/" exact element={<HoomePage/>} />
        <Route path="/post" exact element={<GetPosts/>} />
        <Route path="/spesificPost/:id" exact element={<GetOnePost/>} />
        <Route path="/photos" exact element={<GetAllPhotos/>} />
        <Route path="/albums" exact element={<GetAllAlbums/>} />
        <Route path="/albums/spesificAlbum/:id" exact element={<GetOneAlbum/>} />
        
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
