import './App.scss';
import Header from './components/header/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CardComponentContainer from './containers/CardComponentContainer';
<<<<<<< HEAD
import GameDetails from './components/GameDetails/GameDetails';
=======
import GameInfoContainer from './containers/GameInfoContainer/GameInfoContainer';
import Leftmenu from './components/LeftMenuComponent/LeftMenu';
>>>>>>> c912d4e031a9b1d36505aa7086d3546b148d9623

function App() {

  return (
    <Router>
      <Header />
<<<<<<< HEAD
      <AppContainer>
        {/* <CardComponentContainer /> */}
        <GameDetails />
      </AppContainer>
    </div>
=======
      <Leftmenu />
        <Switch>
          <Route path="/" exact component={CardComponentContainer}/>
          <Route path="/gameInfo/:gameId" component={GameInfoContainer}/>
        </Switch>  
    </Router>
>>>>>>> c912d4e031a9b1d36505aa7086d3546b148d9623
  );
}

export default App;
