import { useEffect } from 'react';
import { fetchAllUsers } from '../api';
import './Component-Style/LoginDropdown.css'
import { useState } from 'react';

const LoginDropdown = ({viewLogin, setViewLogin}) => {
    const [validUsers,setValidUsers] = useState([])

    useEffect(()=>{
        fetchAllUsers().then(({data}) => {
            setValidUsers(data.users);
        });
    },[])
    
    const handleClick = (event) => {
        console.log(event);
    }
    
    return (
        viewLogin ?
            <ul className='userList'>
                {validUsers.map((user) => {
                    return (
                        <section onClick={() => handleClick(user.username)}className='userPanel'>
                            <p>{user.name}</p>
                            <img src={user.avatar_url}/>
                        </section>
                    )
            })}
            </ul> 
        :<></>)
    
};

export default LoginDropdown;