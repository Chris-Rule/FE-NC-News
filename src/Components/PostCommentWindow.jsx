import './Component-Style/PostCommentWindow.css'

const PostCommentWindow = () => {
    return <section>
        <form className='commentInputForm'>
            <textarea className='commentInput' name="commentInput"></textarea>
            <input className='commentSubmit' type='submit'></input>
        </form>
    </section>
};

export default PostCommentWindow;