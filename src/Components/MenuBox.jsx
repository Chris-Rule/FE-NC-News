import './Component-Style/HeaderBar.css'

const MenuBox = ({setDisplayMenu}) => {

    const handleClick = () => {
        setDisplayMenu((status) => {
            return !status;
        });
    }

    return <button className="menuBox" onClick={() => handleClick()}>Filters</button>
};

export default MenuBox;