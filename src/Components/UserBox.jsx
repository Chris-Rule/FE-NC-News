import { useContext } from 'react';
import { UserContext } from '../Contexts/userContext';
import './Component-Style/HeaderBar.css'

const UserBox = ({setViewLogin}) => {
    const{activeUser, setActiveUser} = useContext(UserContext);

    const handleClick = () => {
        setViewLogin((current)=>{
            return !current;
        })
    }

    return <button className="userBox" onClick={() => handleClick()}>
       <p>User:</p>  <sub>{activeUser}</sub>
    </button>
};

export default UserBox;