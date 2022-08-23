import { fetchAllTopics } from '../api';
import './Component-Style/TopicDropdown.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TopicDropdown = ({setTopic, topicData}) => {

    return <>
        <ul>
        <Link to={`/`} onClick={() => {setTopic("Showing all topics")}}>Show All Topics</Link>
        {topicData.map((topic) => {
            return (
                <li key={topic.slug}>
                    <Link to={`${topic.slug}`} onClick={() => {setTopic(topic.slug)}}>{topic.slug}</Link>
                    </li>
            )
        })}
    </ul>
    </>
};

export default TopicDropdown;