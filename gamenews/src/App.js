import './App.scss';
import Header from './components/header/Header';
import { AppContainer } from './components/common/index.styled';
import CardComponentContainer from './containers/CardComponentContainer';
import Leftmenu from './components/LeftMenuComponent/LeftMenu';

function App() {

  return (
    <div className="App">
      <Header />
      <AppContainer>
        <Leftmenu />
        <CardComponentContainer />
      </AppContainer>
    </div>
  );
}

export default App;
