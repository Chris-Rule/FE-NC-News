
import './Component-Style/TopicDropdown.css'
import { Link } from 'react-router-dom';

const TopicDropdown = ({setTopic, topicData, setDropDownVisible}) => {

    const handleClick = (topic) => {
        setTopic(topic.slug);
        setDropDownVisible(false);
    }

    return <>
        <ul>
        <Link to={`/`} onClick={() => {setTopic("Showing all topics")}}>Show All Topics</Link>
        {topicData.map((topic) => {
            return (
                <li key={topic.slug}>
                    <Link to={`${topic.slug}`} onClick={() => {handleClick(topic)}}>{topic.slug}</Link>
                    </li>
            )
        })}
    </ul>
    </>
};

export default TopicDropdown;