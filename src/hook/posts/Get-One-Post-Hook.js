import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getOnePost from '../../Api/postsApi/getOnePost';
import notify from '../../Utitly/Use-Notification';
import addComment from '../../Api/commentsApi/addComment';

const GetOnePostHook = (id) => {

    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [body, setBody] = useState("");
    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const onChangeBody = (e) => {
        setBody(e.target.value);
    }
    const onChangeSubmit = async (e) => {
        e.preventDefault();
        await dispatch(addComment( name, email, body));
        if(name === "")
            notify("name must not be empty","error")
        if(email === "")
            notify("email must not be empty","error")
        if(body === "")
            notify("content must not be empty","error")
        
    }
    const onePost = useSelector((state) => state.postData.post);

    useEffect(() => {
        dispatch(getOnePost(id));
    }, [id, dispatch]);


    let post = [];
    if (onePost) 
        post = onePost;
    
    else
        post = []
    

    
    return [post, name,onChangeName, email,onChangeEmail, body, onChangeBody, onChangeSubmit];
    
  
}

export default GetOnePostHook
