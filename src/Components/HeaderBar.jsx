import './Component-Style/HeaderBar.css'
import UserBox from './UserBox';
import MenuBox from './MenuBox';

const HeaderBar = ({setDisplayMenu}) => {
    return <header>
        <UserBox/>
        <h1> NC News</h1>
        <MenuBox setDisplayMenu={setDisplayMenu}/>
        </header>
};

export default HeaderBar;