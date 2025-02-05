import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../Api/postsApi/getAllPosts';

const GetSpesificPostsHook = () => {
    const dispatch = useDispatch();
    const [spesificPosts ,setSpesificPosts] = useState([]);
    const posts = useSelector((state) => state.postsData.posts);
    useEffect(() => {
      dispatch(getAllPosts());
    }, [dispatch]);
    useEffect(() => {
        if(posts)
            setSpesificPosts(posts.slice(-4));
    }, [posts]);
    return [spesificPosts];


}

export default GetSpesificPostsHook
