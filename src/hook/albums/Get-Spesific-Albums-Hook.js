import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getAllAlbums from '../../Api/AlbumApi/getAlbums';

const GetSpesificAlbumsHook = () => {
 
    const dispatch = useDispatch();
    const [spesificAlbums, setSpesificAlbums] = useState([]);


    const albums = useSelector((state) => state.getAlbumsData.getAlbums);

    useEffect(() => {
      dispatch(getAllAlbums());
    }, [dispatch]);


    useEffect(() => {
        if (albums) {
            setSpesificAlbums(albums.slice(-4));
        }
    }, [albums]);
    
    return [spesificAlbums];
}

export default GetSpesificAlbumsHook
