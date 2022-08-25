import './Component-Style/CommentList.css'
import { useEffect, useState } from 'react';
import { fetchCommentsByArticleID } from '../api';
import SingleComment from './SingleComment';

const CommentList = ({article_id, sessionPostCount}) => {
    const [commentList, setCommentList] = useState([]);

    useEffect(()=>{
            fetchCommentsByArticleID(article_id).then(({data}) => {
                setCommentList(data.comments);
            })
    }, [sessionPostCount]);

    const limitThreshold = 100;
    const limitLength = 75;

    return <ul>
    {commentList.map((comment) => {
        return <SingleComment key={comment.comment_id} comment={comment} limitLength={limitLength} limitThreshold={limitThreshold}/>
    })}
</ul>
};

export default CommentList;