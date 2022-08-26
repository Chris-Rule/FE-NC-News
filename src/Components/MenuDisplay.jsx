import './Component-Style/MenuDisplay.css'

const MenuDisplay = ({
    dateSort, 
    setDateSort,
    commentSort, 
    setCommentSort,
    voteSort,
    setVoteSort,
    orderBy,
    setOrderBy}) => {

    const toggleDate = () => {
        if(commentSort || voteSort) {
            setCommentSort("");
            setVoteSort("");
            setDateSort((current) => {
                return current === "created_at" ? "" : "created_at";
            })
        }
    }

    const toggleComments = () => {
        if(dateSort || voteSort){
            setDateSort("");
            setVoteSort("");
            setCommentSort("comment_count");
        }else{
            setDateSort("created_at");
            setCommentSort("");
        }
    }
    
    const toggleVotes = () => {
        if(dateSort || commentSort) {
            setDateSort("");
            setCommentSort("");
            setVoteSort("votes");
        } else {
            setDateSort("created_at");
            setVoteSort("");
        }
    }

    const switchOrder = () => {
        setOrderBy((currentOrder) => {
            return currentOrder === "desc" ? "asc" : "desc";
        })
    }

    return <section>
        <section className="filterOptions">
            <button onClick={() => toggleDate()} className={`filter ${dateSort}`}>Date</button>
            <button onClick={() => toggleComments()} className={`filter ${commentSort}`}>Comments</button>
            <button onClick={() => toggleVotes()} className={`filter ${voteSort}`}>Votes</button>
            <button onClick={() => switchOrder()}>{orderBy === "desc" ? "Descending" : "Ascending"}</button>
        </section>
    </section>
};

export default MenuDisplay;