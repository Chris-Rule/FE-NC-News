import './Component-Style/CommentList.css'
import { useEffect, useState } from 'react';
import { fetchCommentsByArticleID } from '../api';
import dayjs from 'dayjs';

const CommentList = ({article_id}) => {
    const [commentList, setCommentList] = useState([]);

    useEffect(()=>{
            fetchCommentsByArticleID(article_id).then(({data}) => {
                console.log(data.comments);
                setCommentList(data.comments);
            })
    }, []);
    return <ul>
    {commentList.map((comment) => {
        const date = dayjs(comment.created_at).format('YYYY-MM-DD HH:ss')
        return (<section key={comment.comment_id} className='articlePanel'>
             {comment.author}
                
            </section>
        )
    })}
</ul>
};

export default CommentList;