import './Component-Style/TopicBar.css'

const TopicBar = ({currentTopic}) => {
    return <section className='TopicBar'>
        <h2>
        {currentTopic} 
        </h2>
        <div className='changeTopic'>
            Change<br/>Topic
        </div>
    </section>
};

export default TopicBar;