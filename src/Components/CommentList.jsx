import './Component-Style/CommentList.css'
import { useEffect, useState } from 'react';
import { fetchCommentsByArticleID } from '../api';
import SingleComment from './SingleComment';
import ErrorPage from './ErrorPage';

const CommentList = ({article_id, setTopic, sessionPostCount}) => {
    const [commentList, setCommentList] = useState([]);
    const [error,setError] = useState(null);

    useEffect(()=>{
            fetchCommentsByArticleID(article_id).then((res) => {
                if("data" in res) {
                    const data = res.data;
                    setCommentList(data.comments);
                }
            }).catch((err) => {
                return setError({err});
            })
    }, [sessionPostCount]);

    if(error) {
        return <ErrorPage setTopic={setTopic} message={error}/>
    }

    const limitThreshold = 100;
    const limitLength = 75;

    return <ul>
    {commentList.map((comment) => {
        return <SingleComment key={comment.comment_id} comment={comment} limitLength={limitLength} limitThreshold={limitThreshold}/>
    })}
</ul>
};

export default CommentList;