import { useContext } from 'react';
import { UserContext } from '../Contexts/userContext';
import './Component-Style/HeaderBar.css'

const UserBox = () => {
    const{activeUser, setActiveUser} = useContext(UserContext);

    return <button className="userBox">
       <p>User:</p>  <sub>{activeUser}</sub>
    </button>
};

export default UserBox;