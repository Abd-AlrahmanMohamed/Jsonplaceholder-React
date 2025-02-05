import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAlbum from "../../Api/AlbumApi/getOneAlbum";
import getAlbumPhotos from "../../Api/AlbumApi/getAlbumPhotos";

const GetOneAlbumHook = (id) => {
  
    const dispatch = useDispatch();

    
  const oneAlbum = useSelector((state) => state.getOneAlbumData.oneAlbum);
  const spesificPhotos = useSelector((state) => state.getAlbumPhotosData.albumPhotos);

    useEffect(() => {
        dispatch(getAlbum(id));
        dispatch(getAlbumPhotos(id));
    }, [id, dispatch]);


    let album = [];
    if (oneAlbum) {
        album = oneAlbum;
    } else {
        album = [];
    }
    
    let photos = [];
    if (spesificPhotos) {
        photos = spesificPhotos;
    } else {
        photos = [];
    }
    
    return [album, photos];
}

export default GetOneAlbumHook
