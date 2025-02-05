import { configureStore } from "@reduxjs/toolkit";

//post
import  postsReducer  from "./Slice/Posts/Get-All-Posts-Slice";
import postReducer from "./Slice/Posts/Get-One-Post-Slice";

// comments
import postCommentsReducer from "./Slice/comments/Get-PostComments-Slice";
import addPostCommentsReducer from "./Slice/comments/Add-Comment-Slice";

//album
import getAlbumsReducer from "./Slice/album/Get-All-Albums-Slice";
import getOneAlbumReducer from "./Slice/album/Get-One-Album-Slice";


//photo
import photoReducer from "./Slice/photos/Get-One-Photo-Slice";
import photosReducer from "./Slice/photos/Get-All-Photos-Slice";
import getAlbumPhotosReducer from "./Slice/album/Get-Album-Photos-Slice";


const store = configureStore({
    reducer: {
        //post 
        postsData: postsReducer,
        postData: postReducer,
        // albums
        getAlbumsData: getAlbumsReducer,
        getOneAlbumData: getOneAlbumReducer,
        getAlbumPhotosData: getAlbumPhotosReducer,

        // photo
        photosData: photosReducer,
        photoData: photoReducer,
        // comment
        postCommentsData: postCommentsReducer,
        addCommentData: addPostCommentsReducer,

    },
    devTools: true,
})

export default store
