import './Component-Style/SingleArticle.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchArticleByID } from '../api';
import Votes from './Votes';
import CommentList from './CommentList';

const SingleArticle = ({setTopic}) => {
    const [articleData, setArticleData] = useState([]);
    const {article_id} = useParams();


    useEffect(() => {
        fetchArticleByID(article_id).then(({data}) => {
            setTopic(data.article.topic);
            setArticleData(data.article);
        })
    },[])


    return <section className='articleBox'>
        <h3 className ="articleTitle">{articleData.title}</h3>
            <div className ="articleAuthor">By {articleData.author}</div>
            <p className='articleBody'>{articleData.body}</p>
        <section className = "articleFooterData">
            <div className ="articleCommentCount">Comment count: {articleData.comment_count}</div>
            <Votes article_id= {articleData.article_id} votes = {articleData.votes} />  
        </section>   
        <CommentList article_id={article_id}/>     
    </section>
};

export default SingleArticle;