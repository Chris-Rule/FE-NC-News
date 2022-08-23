import './Component-Style/SingleArticle.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchArticleByID } from '../api';
import Votes from './Votes';

const SingleArticle = ({setTopic}) => {
    const [articleData, setArticleData] = useState([]);
    const {article_id} = useParams();


    useEffect(() => {
        fetchArticleByID(article_id).then(({data}) => {
            setTopic(data.article.topic);
            setArticleData(() => {
                return data.article;
            });
        })
    },[])


    return <section className='articleBox'>
        <h3 className ="articleTitle">{articleData.title}</h3>
            <div className ="articleAuthor">By {articleData.author}</div>
            <p className='articleBody'>{articleData.body}</p>
        <section className = "articleFooterData">
            <div className ="articleCommentCount">Comment count: {articleData.comment_count}</div>
            <Votes votes = {articleData.votes}/>
        </section>           
    </section>
};

export default SingleArticle;