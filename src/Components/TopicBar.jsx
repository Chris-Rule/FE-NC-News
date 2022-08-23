
import { useParams,useSearchParams } from 'react-router-dom';
import './Component-Style/TopicBar.css'

const TopicBar = ({topic}) => {
    return <section className='TopicBar'>
        <h2>
        {topic} 
        </h2>
        <div className='changeTopic'>
            Change<br/>Topic
        </div>
    </section>
};

export default TopicBar;