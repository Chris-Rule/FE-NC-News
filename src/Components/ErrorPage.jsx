import './Component-Style/ErrorPage.css'
import { Link } from 'react-router-dom';

const ErrorPage = ({setTopic, message}) => {
    let errorMessage = "";
    if("res" in message){
        errorMessage = message.res.message;
    } else {
        errorMessage = message.err.response.data.msg;
    }

    return <section className='noPathBox'>

        <h3> {errorMessage}</h3>
        <Link className='homeLink'to={`/`} onClick={() => {setTopic("Showing all topics")}}>Home</Link>  
    </section>

};

export default ErrorPage;