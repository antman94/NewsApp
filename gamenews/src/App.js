import './App.scss';
import Header from './components/header/Header';
/*import Home from './components/header//Home';*/
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Wishlist from './components/header/Wishlist';
import MyLibrary from './components/header/MyLibrary';
import News from './components/header/News';
import { AppContainer } from './components/common/index.styled';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CardComponentContainer from './containers/CardComponentContainer';
import GameInfoContainer from './containers/GameInfoContainer/GameInfoContainer';
import Leftmenu from './components/LeftMenuComponent/LeftMenu';
import TopNavbar from './components/Navbar/TopNavbar';

function App() {

  return (
    <Router>
      <Header />
      <TopNavbar />
      <Leftmenu />
        <Switch>
          <Route path="/" exact component={CardComponentContainer}/>
          <Route path="/gameInfo/:gameId" component={GameInfoContainer}/>
        </Switch>  
    </Router>
  );
}

export default App;
