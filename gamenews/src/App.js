import './App.scss';
import Header from './components/header/Header';
import Home from './components/header//Home';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Wishlist from './components/header/Wishlist';
import MyLibrary from './components/header/MyLibrary';
import News from './components/header/News';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/wishlist" component={Wishlist}/>
          <Route path="/mylibrary" component={MyLibrary}/>
          <Route path="/news" component={News}/>
        </Switch>  
      </Router>
      <Home />
    </div>
  );
}

export default App;
