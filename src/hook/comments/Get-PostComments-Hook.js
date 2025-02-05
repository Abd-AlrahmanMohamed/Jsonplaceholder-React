import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOnePost } from '../../Api/mainApi/postsApi/getOnePost';
import { getPostComments } from '../../Api/commentsApi/getPostComments';

const GetPostCommentsHook = (id) => {
  const dispatch = useDispatch();

  const Loading = useSelector((state) => state.postCommentsData.isLoading);
  const onePostComments = useSelector((state) => state.postCommentsData.post);
  const err = useSelector((state) => state.postCommentsData.error);

  useEffect(() => {
    dispatch(getPostComments(id));
  }, [id, dispatch]);

  let postComments = [];
    if (postComments) 
        postComments = onePostComments;
    
    else
    postComments = []

  return [ postComments];
};

export default GetPostCommentsHook;
