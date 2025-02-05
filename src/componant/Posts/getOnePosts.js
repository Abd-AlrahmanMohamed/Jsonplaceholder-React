import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostComments } from '../../Api/commentsApi/getPostComments';
import { useParams } from 'react-router-dom';
import { Container, InputGroup, Row } from 'react-bootstrap';
import GetOnePostHook from '../../hook/posts/Get-One-Post-Hook';
import { ToastContainer } from 'react-toastify';

const GetOnePost = () => {
  const { id } = useParams();
  const [post, name,onChangeName, email,onChangeEmail, body, onChangeBody, onChangeSubmit] = GetOnePostHook(id);
  const dispatch = useDispatch();

  const { postComments} = useSelector((state) => state.postCommentsData);

  useEffect(() => {
    dispatch(getPostComments(id));
  }, [id, dispatch]);


  return (
    <div>
      <Container className='pcomments'>
      <Row className="row">
          <h2>{post.title}</h2>
          <p>{post.body}</p>

      </Row>
      <h1 className=' text-info my-3'>All Comments</h1>

      <Row className="row p-3">
        {Array.isArray(postComments) && postComments.length > 0 ? (
          postComments.map((comment) => (
            <div key={comment.id}>
              <h4>{comment.name}</h4>
              <p>{comment.body}</p>
            </div>
          ))
        ) : ([])}

        <label className=' mx-auto'>Add Comment</label>
            
            <input
              value={name}
              onChange={onChangeName}
              placeholder=' enter the name '
              type='text'
              className=''
            />
             <input
              value={email}
              onChange={onChangeEmail}
              placeholder=' Add email '
              type='text'
              className=''
            />
             <input
              value={body}
              onChange={onChangeBody}
              placeholder=' Add Comment '
              type='text'
              className=''
            />
             <button onClick={onChangeSubmit}>Submit</button>
      </Row>
      <Row className='mt-5 add-comment'>
        <InputGroup>
            Leave a comment:
        </InputGroup>
        <>Add Comment</>
      </Row>
      <ToastContainer/>
      </Container>
    </div>
  );
};

export default GetOnePost;
