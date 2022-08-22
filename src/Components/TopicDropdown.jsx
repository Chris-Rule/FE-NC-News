import { fetchAllTopics } from '../api';
import './Component-Style/TopicDropdown.css'
import { useState, useEffect } from 'react';

const TopicDropdown = () => {
    const [allTopicData, setTopicData] = useState([]);

    useEffect(() => {
        fetchAllTopics().then(({data}) => {
            setTopicData(data.topics);
        })
    }, [])
    return <>
        <ul>
        {allTopicData.map((topic) => {
            return (
                <li key={topic.slug}>
                    <button>{topic.slug}</button>
                    </li>
            )
        })}
    </ul>
    </>
};

export default TopicDropdown;