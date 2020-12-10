import './App.scss';
import Header from './components/header/Header';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Wishlist from './components/header/Wishlist';
import MyLibrary from './components/header/MyLibrary';
import News from './components/header/News';
import CardComponentContainer from './containers/CardComponentContainer';
import Leftmenu from './components/LeftMenuComponent/LeftMenu';

function App() {

  return (
    <div className="App">
      <Header />
      <Leftmenu />
      <Router>
        <Switch>
          <Route path="/" exact component={CardComponentContainer}/>
          <Route path="/wishlist" component={Wishlist}/>
          <Route path="/mylibrary" component={MyLibrary}/>
          <Route path="/news" component={News}/>
          <Route path="card" component={CardComponentContainer}/>
        </Switch>  
      </Router>
    </div>
  );
}

export default App;
