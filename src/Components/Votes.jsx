import { useEffect, useState } from 'react';
import './Component-Style/Votes.css'
import DownvoteArrow from './DownvoteArrow';
import UpvoteArrow from './UpvoteArrow';

const Votes = ({article_id, votes}) => {
    const [displayVotes, setDisplayVotes] = useState(0);

    useEffect(()=> {
        setDisplayVotes(votes);
    },[votes])

    return <section className='votes'>
        <div>
            Votes: {displayVotes}
        </div>
        <UpvoteArrow article_id={article_id} setDisplayVotes={setDisplayVotes}/>
        <DownvoteArrow article_id={article_id} setDisplayVotes={setDisplayVotes}/>
    </section>
};

export default Votes;

