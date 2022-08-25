import axios from "axios";

const fetchAllArticles = (topic) => {
    return axios.get('https://cr-nc-news.herokuapp.com/api/articles',{params:{sortBy: null,order: null,topic}}).then((res)=>{
        return res;
    }).catch((err) => {
        console.log(err);
    })
}

const fetchArticleByID = (article_id) => {
    return axios.get(`https://cr-nc-news.herokuapp.com/api/articles/${article_id}`).then((res)=>{
        return res;
    }).catch((err) => {
        console.log(err);
    })
}

const fetchCommentsByArticleID = (article_id) => {
    return axios.get(`https://cr-nc-news.herokuapp.com/api/articles/${article_id}/comments`).then((res)=>{
        return res;
    }).catch((err) => {
        console.log(err);
    })
}

const fetchAllTopics = () => {
    return axios.get('https://cr-nc-news.herokuapp.com/api/topics').then((res)=>{
        return res;
    }).catch((err) => {
        console.log(err);
    })
}

const updateVotes = (article_id, votes) => {
    return axios.patch(`https://cr-nc-news.herokuapp.com/api/articles/${article_id}`,
    {
        inc_votes: votes
    }
    ).then((res)=>{
        return res;
    })
};

const postComment = (article_id, username, body) => {
    return axios.post(`https://cr-nc-news.herokuapp.com/api/articles/${article_id}/comments`,{username,body})
    .then((res)=>{
        return res;
    })
}


export { fetchAllArticles, fetchAllTopics, fetchArticleByID, updateVotes, fetchCommentsByArticleID, postComment };