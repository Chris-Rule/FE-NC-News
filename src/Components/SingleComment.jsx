import './Component-Style/CommentList.css'
import dayjs from 'dayjs';
import { useState } from 'react';

const SingleComment = ({comment, limitLength, limitThreshold}) => {
    const [previewActive, setPreviewActive] = useState(true);
    const date = dayjs(comment.created_at).format('YYYY-MM-DD HH:ss')

    const handleClick = () => {
        setPreviewActive(!previewActive)
    }

    return (<section key={comment.comment_id} className='commentPanel'>
            <section className='commentHeaders'>
                <p>{comment.author}</p>
                <p>{date}</p>
            </section>{
                previewActive ? 
            <p className='commentBody preview' onClick={()=> handleClick()}>{
                comment.body.length > limitThreshold ?
                    comment.body.substring(0,limitLength)+"..." :
                    comment.body
                }</p>:
            <p className='commentBody full' onClick={()=> handleClick()}>{comment.body}</p>
            }
            <p className='commentVotes'>Votes: {comment.votes}</p>
        </section>
    )
};

export default SingleComment;