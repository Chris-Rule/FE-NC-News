import './Component-Style/ErrorPage.css'
import { Link } from 'react-router-dom';

const ErrorPage = ({setTopic, message}) => {
    
    return <section className='noPathBox'>
        <h3> {message.err.response.data.msg}</h3>
        <Link className='homeLink'to={`/`} onClick={() => {setTopic("Showing all topics")}}>Home</Link>  
    </section>

};

export default ErrorPage;