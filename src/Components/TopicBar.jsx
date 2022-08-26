import './Component-Style/TopicBar.css'

const TopicBar = ({topic,topicDDVisible, setTopicDDVisible}) => {

    const handleClick = () => {
        setTopicDDVisible((value)=>{
            return value ? false : true;
        });
    }

    return <section className='TopicBar'>
        <h2 className="currentTopic">
        {topic} 
        </h2>
        <button className='changeTopic' onClick={handleClick}>
            {topicDDVisible ? "Close" : "New Topic"}
        </button>
    </section>
};

export default TopicBar;