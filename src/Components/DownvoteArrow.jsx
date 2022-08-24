import { sendDownVote } from '../api';
import './Component-Style/Votes.css'

const DownvoteArrow = ({article_id, setDisplayVotes}) => {

    const handleDownvote = () => {
        setDisplayVotes((currentVotes) => {
            return currentVotes = currentVotes - 1;
        })
        sendDownVote(article_id, -1);
    }

    return <svg onClick={()=> handleDownvote()} className='downvote' xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m18.707 12.707-1.414-1.414L13 15.586V6h-2v9.586l-4.293-4.293-1.414 1.414L12 19.414z"/></svg>
};

export default DownvoteArrow;