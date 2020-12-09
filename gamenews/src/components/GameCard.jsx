import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, 
  Card, 
  CardActionArea, 
  CardActions, 
  CardContent, 
  CardMedia } from '@material-ui/core';
  import XboxICON from '@material-ui/icons/SportsEsports';
  import PSICON from '@material-ui/icons/Games';
  import PCICON from '@material-ui/icons/DesktopWindows';

  import { GeneralWhiteText } from './common/index.styled';
import LoginComponent from './LoginComponent';

const useStyles = makeStyles(() => ({
  root: {
    margin: '15px',
    maxWidth: 345,
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
    left: 135,
  },

}))

function GameCard({poster, title, content}) {

  const classes = useStyles();
  
  return (
      <Card className={classes.root}>
        <LoginComponent/>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={poster}
            title={title + ' poster'}
          />
          <CardContent className={classes.CardContainer}>
            <GeneralWhiteText gutterBottom variant="h5" component="h2" className={classes.GameTitle}>
              {title}
            </GeneralWhiteText>
            <XboxICON className={classes.Icons} />
            <PSICON className={classes.Icons}/>
            <GeneralWhiteText variant="body2"  component="p">
              {content}
            </GeneralWhiteText>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            {'<<Read more'}
          </Button>
          <Button className={classes.WishlistButton} size="small" color="primary" >
            +Wishlist
          </Button>
        </CardActions>
      </Card>
  );
}

export default GameCard;
