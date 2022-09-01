import { fetchAllUsers } from '../api';
import './Component-Style/LoginDropdown.css'
import { useState,useEffect,useContext } from 'react';
import { UserContext } from '../Contexts/userContext';


const LoginDropdown = ({viewLogin, setViewLogin}) => {
    const [validUsers,setValidUsers] = useState([]);
    const {activeUser, setActiveUser} = useContext(UserContext);

    useEffect(()=>{
        fetchAllUsers().then(({data}) => {
            setValidUsers(data.users);
        });
    },[])
    
    const handleClick = (user) => {
        setViewLogin(false);
        setActiveUser(user);
    }
    
    return (
        viewLogin ?
            <ul className='userList'>
                {validUsers.map((user) => {
                    return (
                        <section onClick={() => handleClick(user)}className='userPanel'>
                            <p>{user.name}</p>
                            <img src={user.avatar_url}/>
                        </section>
                    )
            })}
            </ul> 
        :<></>)
    
};

export default LoginDropdown;