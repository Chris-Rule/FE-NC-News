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
        <ul className='articleGrid'>
        {allArticleData.map((article) => {
            const date = dayjs(article.created_at).format('YYYY-MM-DD HH:ss')
            return (<section key={article.article_id} className='articlePanel'>
                    <p className ="articleCreated">{date}</p>
                    <section className="articleHeaders">
                        <Link to={`/articles/${article.article_id}`}className ="articleTitle">{article.title}</Link>
                        <p className ="articleAuthor">By {article.author}</p>
                    </section>
                    <section className='articleFooters'>
                        <Votes article_id= {article.article_id} votes = {article.votes} /> 
                        <div className='commentVotes'>
                            <p className ="articleTopic">{article.topic}</p>
                            <p className ="articleComment">Comments: {article.comment_count}</p>   
                        </div>
                    </section>
                </section>
            )
        })}
    </ul>
    </>
};

export default ArticleList;