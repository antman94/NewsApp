import './App.scss';
import Header from './components/header/Header';
import { AppContainer } from './components/common/index.styled';
import CardComponentContainer from './containers/CardComponentContainer/index';

function App() {

  return (
    <div className="App">
      <Header />
      <AppContainer>
        <CardComponentContainer />
      </AppContainer>
    </div>
  );
}

export default App;
