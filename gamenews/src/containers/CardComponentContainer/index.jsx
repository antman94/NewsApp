import React from 'react';

import { 
  CardContainer,
 } from '../../components/common/index.styled';
 import GameCard from '../../components/GameCard';
 import placeholder from '../../images/placeholder2.jpg';

function CardComponentContainer() {

  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `;

  return (
      <CardContainer>
        <GameCard title='Cyberpunk 2077' poster={placeholder} content={content}/>
      </CardContainer>
  )
}

export default CardComponentContainer;
