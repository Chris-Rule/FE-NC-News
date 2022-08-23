import './App.css';
import Explore from './Components/Explore';
import HeaderBar from './Components/HeaderBar';
import MenuDisplay from './Components/MenuDisplay';
import LoginDropdown from './Components/LoginDropdown';
import { BrowserRouter} from 'react-router-dom';
import ViewBox from './Components/ViewBox';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderBar/>
        <LoginDropdown/>
        <MenuDisplay/>
        <ViewBox/>
        <Explore/>
      </div>
    </BrowserRouter>
  );
}

export default App;
