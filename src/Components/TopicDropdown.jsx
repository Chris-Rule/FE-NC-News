
import './Component-Style/TopicDropdown.css'
import { Link } from 'react-router-dom';

const TopicDropdown = ({setTopic, topicData, setTopicDDVisible}) => {

    const handleClick = (topic) => {
        setTopic(topic.slug);
        setTopicDDVisible(false);
    }

    return <>
        <ul className='topicDropDown'>
            <li onClick={() => {setTopic("Showing all topics")}}>
                <Link to={`/`} >Show All Topics</Link>
            </li>
        {topicData.map((topic) => {
            return (
                <li key={topic.slug} onClick={() => {handleClick(topic)}}>
                    <Link to={`${topic.slug}`} >{topic.slug}</Link>
                    </li>
            )
        })}
    </ul>
    </>
};

export default TopicDropdown;