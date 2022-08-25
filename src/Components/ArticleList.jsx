import './Component-Style/ArticleList.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllArticles } from '../api';
import Votes from './Votes';
import dayjs from 'dayjs';


const ArticleList = ({topic}) => {
    const [allArticleData, setAllArticleData] = useState([]);

    useEffect(() => {
        let topicValue = topic;
        if(topicValue === "Showing all topics"){
            topicValue = null;
        }
        fetchAllArticles(topicValue).then(({data}) => {
            setAllArticleData(data.articles);
        })
    }, [topic]);

    return <>
        <ul>
        {allArticleData.map((article) => {
            const date = dayjs(article.created_at).format('YYYY-MM-DD HH:ss')
            return (<section key={article.article_id} className='articlePanel'>
                 
                 <Link to={`/articles/${article.article_id}`}className ="articleTitle">{article.title}</Link>
                    <p className ="articleAuthor">By {article.author}</p>
                    <p className ="articleCommentCount">Comments: {article.comment_count}</p>
                    <p className ="articleCreated">Created: {date}</p>
                    <p className ="articleTopic">Topic: {article.topic}</p>
                    <Votes className ="articleVotes" article_id= {article.article_id} votes = {article.votes} /> 
                </section>
            )
        })}
    </ul>
    </>
};

export default ArticleList;