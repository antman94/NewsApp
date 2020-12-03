import GameCard from './components/GameCard';
import {
  AppContainer,
  TextTEST
} from './components/common/index.styled';
import placeholder from './images/placeholder2.jpg';

function App() {
  
  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `;

  return (
    <AppContainer>
      <GameCard title='Cyberpunk 2077' poster={placeholder} content={content}/>
    </AppContainer>
    
  );
}

export default App;
