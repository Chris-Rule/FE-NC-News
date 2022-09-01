import './App.css';
import Explore from './Components/Explore';
import HeaderBar from './Components/HeaderBar';
import MenuDisplay from './Components/MenuDisplay';
import LoginDropdown from './Components/LoginDropdown';
import { BrowserRouter} from 'react-router-dom';
import ViewBox from './Components/ViewBox';
import { useContext, useState } from 'react';
import {UserContext} from './Contexts/userContext';

function App() {
  //states
  const [displayMenu, setDisplayMenu] = useState(false);
  const [allArticleData, setAllArticleData] = useState([]);
  const [dateSort, setDateSort] = useState("created_at");
  const [commentSort, setCommentSort] = useState("");
  const [voteSort, setVoteSort] = useState("");
  const [orderBy, setOrderBy] = useState('desc');
  const [viewLogin, setViewLogin] = useState(false);
  //contexts
  const [activeUser, setActiveUser] = useState({
    username:'default',
    name:'defaultName',
    avatar_url:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  });

  return (
    <UserContext.Provider value={{activeUser,setActiveUser}}>
      <BrowserRouter>
        <div className="App">
          <HeaderBar 
            setDisplayMenu={setDisplayMenu} 
            setViewLogin={setViewLogin}
          />
          <LoginDropdown viewLogin={viewLogin} setViewLogin={setViewLogin}/>
          {displayMenu? <MenuDisplay 
            dateSort={dateSort}
            setDateSort={setDateSort} 
            commentSort={commentSort}
            setCommentSort={setCommentSort}
            voteSort={voteSort} 
            setVoteSort={setVoteSort} 
            orderBy={orderBy}
            setOrderBy={setOrderBy} /> : null}

          <ViewBox 
            allArticleData={allArticleData} 
            setAllArticleData={setAllArticleData}
            dateSort={dateSort} 
            commentSort={commentSort} 
            voteSort={voteSort} 
            orderBy={orderBy}/>

          <Explore/>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
