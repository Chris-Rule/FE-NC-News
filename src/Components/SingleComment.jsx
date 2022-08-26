import './Component-Style/CommentList.css'
import dayjs from 'dayjs';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Contexts/userContext';
import { deleteComment } from '../api';

const SingleComment = ({comment, limitLength, limitThreshold}) => {
    const [previewActive, setPreviewActive] = useState(true);
    const date = dayjs(comment.created_at).format('YYYY-MM-DD HH:ss')
    const [commentDeleted, setCommentDeleted] = useState("");

    const{activeUser} = useContext(UserContext);

    const handleClick = () => {
        setPreviewActive(!previewActive)
    }

    const handleDelete = () => {
        console.log("handling delete");
        setCommentDeleted("disabled");
        deleteComment(comment.comment_id).then(() => {
            console.log("delete succesful - disabling panel");
        }).catch(() => {
            setCommentDeleted("");
            console.log("failed to delete comment");
        });
    }
    
    useEffect(() => {
        console.log("refreshing page");
    },[commentDeleted]);

    return (<section className={`commentPanel ${commentDeleted}`}>
            <section className='commentHeaders'>
                <p>{comment.author}</p>
                <p>{date}</p>
            </section>{
                previewActive ? 
                comment.body.length > limitThreshold ?
                <p className='commentBody preview' onClick={()=> handleClick()}>
                    {comment.body.substring(0,limitLength)+"..."} </p>
                    :
                    <p className='commentBody'>
                    {comment.body}</p>
                :
            <p className='commentBody full' onClick={()=> handleClick()}>{comment.body}</p>
            }
            <section className = "commentFooters">
                <p>{comment.author.toUpperCase() == activeUser.toUpperCase() ? 
                    <button className ="delete" onClick={() => {handleDelete()}} disabled={commentDeleted} >Delete</button> : null}</p>
                <p className='commentVotes'>Votes: {comment.votes}</p>
            </section>
        </section>
    )
};

export default SingleComment;