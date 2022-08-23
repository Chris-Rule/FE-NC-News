import './Component-Style/HeaderBar.css'
import UserBox from './UserBox';
import MenuBox from './MenuBox';

const HeaderBar = () => {
    return <header>
        <UserBox/>
        <h1> NC News</h1>
        <MenuBox/>
        </header>
};

export default HeaderBar;