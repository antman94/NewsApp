import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, 
  Card,
  List, 
  CardActionArea, 
  CardActions, 
  CardContent, 
  CardMedia, } from '@material-ui/core';
import XboxICON from '@material-ui/icons/SportsEsports';
import PSICON from '@material-ui/icons/Games';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';

import { GeneralWhiteText } from './common/index.styled';

const useStyles = makeStyles(() => ({
  root: {
    margin: '15px',
    width: '345px',
    borderRadius: '15px',
  },
  media: {
    height: 180
  },
  CardContainer: {
    backgroundColor: '#242424',
  },
  GameTitle: {
    display: 'inline',
  },
  Icons: {
    color: 'white',
    float: 'right'
  },
  WishlistButton: {
    left: 105,
  },

}))

function GameCard({game}) {

  const classes = useStyles();

  return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={game.background_image}
            title={game.name}
          />
          <CardContent className={classes.CardContainer}>
            <GeneralWhiteText gutterBottom  className={classes.GameTitle}>
              {game.name}
            </GeneralWhiteText>
            <XboxICON className={classes.Icons} />
            <PSICON className={classes.Icons}/>
            <List>
              <GeneralWhiteText variant="body2"  component="p">
                Metacritic {game.metacritic}
              </GeneralWhiteText>            
              <GeneralWhiteText variant="body2"  component="p">
                Release Date {game.released}
              </GeneralWhiteText> 
              <GeneralWhiteText variant="body2"  component="p">Genres </GeneralWhiteText>
               {game.genres.map((genre) => (<GeneralWhiteText variant="body2"  component="p" key={genre.id} genre={genre.name}>{genre.name}</GeneralWhiteText>))}         
            </List>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            {'<<Read more'}
          </Button>
          <Button className={classes.WishlistButton} size="small" color="primary" >
          <CardGiftcardIcon></CardGiftcardIcon>
            +Wishlist
          </Button>
        </CardActions>
      </Card>
  );
}

export default GameCard;
