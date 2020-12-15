import './App.scss';
import Header from './components/header/Header';
import { AppContainer } from './components/common/index.styled';
import CardComponentContainer from './containers/CardComponentContainer';
import GameDetails from './components/GameDetails/GameDetails';

function App() {

  return (
    <div className="App">
      <Header />
      <AppContainer>
        {/* <CardComponentContainer /> */}
        <GameDetails />
      </AppContainer>
    </div>
  );
}

export default App;
