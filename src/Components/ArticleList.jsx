import './Component-Style/ArticleList.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllArticles } from '../api';
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
            return (
                <Link key={article.article_id} to={`/articles/${article.article_id}`} className='articlePanel'>
                    <h3 className ="articleTitle">{article.title}</h3>
                    <div className ="articleAuthor">Author: {article.author}</div>
                    <div className ="articleCommentCount">Comment count: {article.comment_count}</div>
                    <div className ="articleCreated">Created: {date}</div>
                    <div className ="articleTopic">Topic: {article.topic}</div>
                    <div className ="articleVotes">Votes: {article.votes}</div>
                </Link>
            )
        })}
    </ul>
    </>
};

export default ArticleList;