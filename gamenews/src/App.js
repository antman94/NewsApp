import './App.scss';
import Header from './components/header/Header';
import { AppContainer } from './components/common/index.styled';
import CardComponentContainer from './containers/CardComponentContainer';
import Leftmenu from './components/LeftMenuComponent/LeftMenu';

function App() {

  return (
<<<<<<< HEAD
    <AppContainer>
      <CardComponentContainer />
      <Leftmenu />
    </AppContainer>
    
=======
    <div className="App">
      <Header />
      <AppContainer>
        <CardComponentContainer />
      </AppContainer>
    </div>
>>>>>>> 5836caed14b18c8b762a25a6a0610a142ec67cd3
  );
}

export default App;
