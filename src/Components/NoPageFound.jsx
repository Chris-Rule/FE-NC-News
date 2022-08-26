import './Component-Style/NoPageFound.css'
import { Link } from 'react-router-dom';

const NoPageFound = ({setTopic}) => {
    
    return <section className='noPathBox'>
        <h3> No path found </h3>
        <Link className='homeLink'to={`/`} onClick={() => {setTopic("Showing all topics")}}>Home</Link>  
    </section>

};

export default NoPageFound;