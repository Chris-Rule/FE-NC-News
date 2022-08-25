import './Component-Style/SingleArticle.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchArticleByID } from '../api';
import Votes from './Votes';
import CommentList from './CommentList';
import PostCommentWindow from './PostCommentWindow';

const SingleArticle = ({setTopic}) => {
    const [articleData, setArticleData] = useState([]);
    const [sessionPostCount,setSessionPostCount] = useState(0);
    const [postWindowVis, setPostWindowVis] = useState(false);
    const {article_id} = useParams();


    useEffect(() => {
        fetchArticleByID(article_id).then(({data}) => {
            setTopic(data.article.topic);
            setArticleData(data.article);
        })
    },[])

    const handleClick = () => {
        setPostWindowVis(!postWindowVis)
    }
    

    return <section className='articleBox'>
        <h3 className ="articleTitle">{articleData.title}</h3>
            <div className ="articleAuthor">By {articleData.author}</div>
            <p className='articleBody'>{articleData.body}</p>
        <section className = "articleFooterData">
            <div className ="articleCommentCount">
               <p>Comments: {articleData.comment_count}</p>
                <button className ='postCommentButton' onClick={() => handleClick()}>Comment</button>
            </div>
            <Votes article_id= {articleData.article_id} votes = {articleData.votes} />  
        </section>
        {postWindowVis ?   
        <PostCommentWindow setSessionPostCount={setSessionPostCount} article_id={article_id}/>: null}
        <CommentList sessionPostCount={sessionPostCount} article_id={article_id}/>     
    </section>
};

export default SingleArticle;