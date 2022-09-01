import './Component-Style/HeaderBar.css'
import { useState } from 'react';

const MenuBox = ({setDisplayMenu}) => {
    const [active, setActive] = useState("");

    const handleClick = () => {
        setDisplayMenu((status) => {
            return !status;
        });
        setActive((status) => {
            if(status === ""){
                return "active";
            } else {
                return "";
            }
        });
    }

    return <button className={`menuBox ${active}`} onClick={() => handleClick()}>Filters</button>
};

export default MenuBox;