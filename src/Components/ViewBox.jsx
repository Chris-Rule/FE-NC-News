import './Component-Style/ViewBox.css'
import { useState,useEffect } from 'react';
import TopicBar from './TopicBar';
import TopicDropdown from './TopicDropdown';
import ArticleList from './ArticleList';
import { Routes, Route } from 'react-router-dom'
import { fetchAllTopics } from '../api';


const ViewBox = () => {
    const [topic, setTopic] = useState("Showing all topics");
    const [topicData, setTopicData] = useState([]);

    useEffect(() => {
        fetchAllTopics().then(({data}) => {
            setTopicData(data.topics);
        })
    }, [topic])

    return <>
        <TopicBar topic={topic}/>
        <TopicDropdown setTopic={setTopic} topicData={topicData}/>
        <Routes>
          <Route path="/" element={<ArticleList topic='Showing all topics'/>}/>
          {topicData.map((topic) => {
            return (
                    <Route key={`/${topic.slug}`} path={`/${topic.slug}`} element={<ArticleList topic={topic.slug}/>}/>    
            )
        })}
        </Routes>
    </>
};

export default ViewBox;