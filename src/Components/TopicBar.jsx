import './Component-Style/TopicBar.css'

const TopicBar = ({topic,topicDDVisible, setTopicDDVisible}) => {

    const handleClick = () => {
        setTopicDDVisible((value)=>{
            return value ? false : true;
        });
    }

    return <section className='TopicBar'>
        <h2>
        {topic} 
        </h2>
        <div className='changeTopic' onClick={handleClick}>
            {topicDDVisible ? "Close" : "New Topic"}
        </div>
    </section>
};

export default TopicBar;