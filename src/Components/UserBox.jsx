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
       <img src={activeUser.avatar_url}/>
    </button>
};

export default UserBox;