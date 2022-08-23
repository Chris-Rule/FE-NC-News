import './App.css';
import ArticleList from './Components/ViewBox';
import Explore from './Components/Explore';
import HeaderBar from './Components/HeaderBar';
import MenuDisplay from './Components/MenuDisplay';
import UserDropdown from './Components/UserDropdown';
import { BrowserRouter} from 'react-router-dom';
import ViewBox from './Components/ViewBox';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderBar/>
        <UserDropdown/>
        <MenuDisplay/>
        <ViewBox/>
        <Explore/>
      </div>
    </BrowserRouter>
  );
}

export default App;
