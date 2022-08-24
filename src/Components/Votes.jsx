import { useEffect, useState } from 'react';
import { fetchArticleByID } from '../api';
import './Component-Style/Votes.css'
import DownvoteArrow from './DownvoteArrow';
import UpvoteArrow from './UpvoteArrow';

const Votes = ({article_id, votes}) => {
    const [displayVotes, setDisplayVotes] = useState(0);
    const [err, setErr] = useState (null);

    useEffect(()=> {
        if(article_id){
            fetchArticleByID(article_id).then(({data}) => {
                setDisplayVotes(data.article.votes);
            })
        }
    },[err, votes])

    return <section className='votes'>
        <div>
            <p> Votes: {displayVotes} </p>
            <UpvoteArrow article_id={article_id} setDisplayVotes={setDisplayVotes} err={err} setErr={setErr}/>
            <DownvoteArrow article_id={article_id} setDisplayVotes={setDisplayVotes} err={err} setErr={setErr}/>
        </div>
        {err ? <p className='votingError'>{err}</p> : null}
    </section>
        
    
};

export default Votes;

