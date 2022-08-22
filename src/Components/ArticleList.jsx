import './Component-Style/ArticleList.css'
import { useEffect, useState } from 'react';
import { fetchAllArticles } from '../api';

const ArticleList = () => {
    const [allArticleData, setAllArticleData] = useState([]);

    useEffect(() => {
        fetchAllArticles().then(({data}) => {
            console.log(data.articles);
            setAllArticleData(data.articles);
        })
    }, [])
    return <ul>
        {allArticleData.map((article) => {
            return (
                <li key={article.article_id}>
                    <h3 className ="articleTitle">{article.title}</h3>
                    <div className ="articleAuthor">Author: {article.author}</div>
                    <div className ="articleCommentCount">Comment count: {article.comment_count}</div>
                    <div className ="articleCreated">Created: {article.created_at}</div>
                    <div className ="articleTopic">Topic: {article.topic}</div>
                    <div className ="articleVotes">Votes: {article.votes}</div>
            


                    
                    </li>
            )
        })}
        ArticleList
    </ul>
};

export default ArticleList;