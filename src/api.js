import axios from "axios";

const Client = axios.create(
    {
        baseURL:'https://cr-nc-news.herokuapp.com/',
        timeout:5000
    }
)

const fetchAllArticles = (topic, sort_by = null, order = null) => {
    if(sort_by === ''){
        sort_by =null;
    }
    return Client.get('/api/articles',{params:{sort_by,order,topic}}).then((res)=>{
        return res;
    }).catch((err) => {
        return err;
    })
}

const fetchArticleByID = (article_id) => {
    return Client.get(`/api/articles/${article_id}`).then((res)=>{
        return res;
    }).catch((err) => {
        return err;
    })
    
}

const fetchCommentsByArticleID = (article_id) => {
    return Client.get(`/api/articles/${article_id}/comments`).then((res)=>{
        return res;
    }).catch((err) => {
        return err;
    })
}

const fetchAllTopics = () => {
    return Client.get('/api/topics').then((res)=>{
        return res;
    }).catch((err) => {
        return err;
    })
}

const updateVotes = (article_id, votes) => {
    return Client.patch(`/api/articles/${article_id}`,
    {
        inc_votes: votes
    }
    ).then((res)=>{
        return res;
    })
};

const postComment = (article_id, username, body) => {
    return Client.post(`/api/articles/${article_id}/comments`,{username,body})
    .then((res)=>{
        return res;
    })
}

const deleteComment = (comment_id) => {
    return Client.delete(`/api/comments/${comment_id}`)
    .then((res)=>{
        return res;
    })
}


export { 
    fetchAllArticles,
    fetchAllTopics,
    fetchArticleByID,
    updateVotes,
    fetchCommentsByArticleID,
    postComment,
    deleteComment };