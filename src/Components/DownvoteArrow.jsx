import { updateVotes } from '../api';
import './Component-Style/Votes.css'

const DownvoteArrow = ({article_id, setDisplayVotes, setErr}) => {
    
    const handleDownvote = () => {
        setDisplayVotes((currentVotes) => {
            return currentVotes = currentVotes - 1;
        })
        setErr(null);
        updateVotes(article_id, -1).catch((err) => {
            setDisplayVotes((currentVotes) => {
                return currentVotes = currentVotes - 1;
            })
            setErr('Error voting - please try again');
        });
    }

    return <button onClick={()=> handleDownvote()}>
        <svg className='downvote' alt="Downvote button" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m18.707 12.707-1.414-1.414L13 15.586V6h-2v9.586l-4.293-4.293-1.414 1.414L12 19.414z"/></svg>
    </button>
};

export default DownvoteArrow;