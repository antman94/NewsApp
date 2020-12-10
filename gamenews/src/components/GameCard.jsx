import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, 
  Card,
  List, 
  CardActionArea, 
  CardActions, 
  CardContent, 
  CardMedia, } from '@material-ui/core';
import pc from '../assets/logos/platforms/windows.png';
import xbox from '../assets/logos/platforms/xbox-logo.png';
import playstation from '../assets/logos/platforms/playstation-logotype.png';
import nintendo from '../assets/logos/platforms/nintendo-switch.png';
import linux from '../assets/logos/platforms/linux-1.png';
import mac from '../assets/logos/platforms/mac-os-logo.png';
import android from '../assets/logos/platforms/android.png';
import ios from '../assets/logos/platforms/app-store.png'
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
    fontSize: '20px'
  },
  Icons: {
    height: '15px',
    marginRight: '10px'
  },
  WishlistButton: {
    left: 105,
  },

}))

function GameCard({game}) {

  const classes = useStyles();

  const dictionary={
    "pc": pc, "xbox": xbox, "playstation": playstation, "nintendo": nintendo,
    "linux": linux, "ios": ios, "mac":mac, "android": android
  }
  

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
          {game.parent_platforms.map((platform) => (
            <img className={classes.Icons} 
            key={platform.platform.id} 
            src={dictionary[platform.platform.slug]} 
            alt={platform.platform.name} />
            ))
          }   
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
