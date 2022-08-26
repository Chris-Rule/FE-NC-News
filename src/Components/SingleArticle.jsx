import './Component-Style/SingleArticle.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchArticleByID } from '../api';
import Votes from './Votes';
import CommentList from './CommentList';
import PostCommentWindow from './PostCommentWindow';
import ErrorPage from './ErrorPage';

const SingleArticle = ({setTopic}) => {
    const [articleData, setArticleData] = useState([]);
    const [sessionPostCount,setSessionPostCount] = useState(0);
    const [postWindowVis, setPostWindowVis] = useState(false);
    const [error,setError] = useState(null);
    const {article_id} = useParams();

    useEffect(() => {
        fetchArticleByID(article_id).then((res) => {
            if("data" in res){
                const data = res.data;
                setTopic(data.article.topic);
                setArticleData(data.article);
            } else if (res.name === "AxiosError"){
                return setError({res})
            } else {
                console.log("Error");
            }
        }).catch((err) => {
            return setError({err});
        })
    },[])

    if(error) {
        return <ErrorPage setTopic={setTopic} message={error}/>
    }

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