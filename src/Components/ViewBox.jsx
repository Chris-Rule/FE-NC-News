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
    const [topicDDVisible, setTopicDDVisible] = useState(false);

    useEffect(() => {
        fetchAllTopics().then(({data}) => {
            setTopicData(data.topics);
        })
    }, [topic,topicDDVisible])

    return <>
        <TopicBar   topic={topic} 
                    topicDDVisible={topicDDVisible}
                    setTopicDDVisible={setTopicDDVisible}
                    />
        {topicDDVisible ? 
            <TopicDropdown 
            setTopicDDVisible={setTopicDDVisible}
            topicDDVisible={topicDDVisible}
            setTopic={setTopic}
            topicData={topicData}/>
                :null
        }
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