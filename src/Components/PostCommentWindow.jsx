import { postComment } from '../api';
import './Component-Style/PostCommentWindow.css'
import { useState,useContext } from 'react';
import { UserContext } from '../Contexts/userContext';

const PostCommentWindow = ({article_id, setSessionPostCount}) => {
    const [infoMessage, setInfoMessage] = useState("");
    const [formDisabled, setFormDisabled] = useState("");
    const {activeUser} = useContext(UserContext); 

    const handleSubmit = (event) => {
        setFormDisabled("disabled");
        event.preventDefault();
        const commentBody = event.target[0].value;
        const minPostLength = 5;
        if(commentBody.length < minPostLength){
            setFormDisabled("");
            setInfoMessage(`Posts must be at least ${minPostLength} characters long.`);
        } else {
            setInfoMessage("Posting.....");
            postComment(article_id,activeUser.username,commentBody).then((res)=> {
                setSessionPostCount((postCount) => {
                    return postCount + 1;
                })
                setFormDisabled("");
                setInfoMessage("Posted!");
            }).catch((err) => {
                setFormDisabled("");
                setInfoMessage("Error posting - please try again");
            });
        }   
    }
    return <section>
        <form onSubmit={handleSubmit} className='commentInputForm'>
            <textarea disabled={formDisabled} className='commentInput' name="commentInput"></textarea>
            <input disabled={formDisabled} className='commentSubmit' type='submit'></input>
        </form>
        {!infoMessage ? null : <p className='infoMessage'>{infoMessage}</p>}
        
    </section>
};

export default PostCommentWindow;