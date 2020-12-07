import { AppContainer } from './components/common/index.styled';
import CardComponentContainer from './containers/CardComponentContainer';
import Leftmenu from './components/LeftMenuComponent/LeftMenu';

function App() {

  return (
    <AppContainer>
      <CardComponentContainer />
      <Leftmenu />
    </AppContainer>
    
  );
}

export default App;
