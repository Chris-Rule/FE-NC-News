import './Component-Style/ArticleList.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllArticles } from '../api';
import Votes from './Votes';
import dayjs from 'dayjs';


const ArticleList = ({topic,
    allArticleData, 
    setAllArticleData,
    dateSort, 
    commentSort, 
    voteSort,
    orderBy}) => {

    useEffect(() => {
        let topicValue = topic;

        if(topicValue === "Showing all topics"){
            topicValue = null;
        }

        const sortValues = [dateSort,commentSort,voteSort];

        const activeValues = sortValues.filter(value => value);

        const sortBy = activeValues.join(",");

        fetchAllArticles(topicValue,sortBy,orderBy).then(({data}) => {
            setAllArticleData(data.articles);
        })
    }, [dateSort, commentSort, voteSort, orderBy, topic]);

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