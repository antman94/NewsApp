import React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import {
  Button, 
  Card,
  CardActionArea, 
  CardActions, 
  CardContent, 
  CardMedia, } from '@material-ui/core';
import pc from '../../assets/logos/platforms/windows.png';
import xbox from '../../assets/logos/platforms/xbox-logo.png';
import playstation from '../../assets/logos/platforms/playstation-logotype.png';
import nintendo from '../../assets/logos/platforms/nintendo-switch.png';
import linux from '../../assets/logos/platforms/linux-1.png';
import mac from '../../assets/logos/platforms/mac-os-logo.png';
import android from '../../assets/logos/platforms/android.png';
import ios from '../../assets/logos/platforms/app-store.png'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';

import { GeneralWhiteText } from '../common/index.styled';

const useStyles = makeStyles(() => ({
  root: {
    width: '345px',
    borderRadius: '15px',
    marginRight: '15px',
    marginBottom: '20px',
  },
  media: {
    height: 180
  },
  CardContainer: {
    backgroundColor: '#242424',
  },
  GameTitle: {
    fontSize: '22px',
  },
  Icons: {
    height: '15px',
    marginRight: '10px',
  },
  WishlistButton: {
    left: 85,
  },
  IconDiv: {
    display: 'flex',
    alignItems: 'center'
  },
  scoreColor: {
    color: 'green',
    border: '2px solid green',
  },
  scoreColor2: {
    color: 'orange',
    border: '2px solid orange',
  },
  scoreColor3: {
    color: 'red',
    border: '2px solid red',
  },
  genreDiv:{
    display: 'flex',
    paddingBottom: '5px',
    flexDirection: 'row-reverse' ,
    alignItems: 'center',
    marginTop: '10px',
    borderBottom: 'solid 1px #424242',
  },
  releaseContainer: {
    display: 'flex', 
    marginTop: '25px', 
    borderBottom: 'solid 1px #424242',
    paddingBottom: '5px'
  },
  genresHead: {
    position: 'absolute',
    left: '15px',
    marginBottom: '5px',
    fontSize: '14px'
  }
}))

function GameCard({game}) {

  const classes = useStyles();
  const [scoreColor, setscoreColor] = useState(classes.scoreColor);
  
  const dictionary={
    "pc": pc, "xbox": xbox, "playstation": playstation, "nintendo": nintendo,
    "linux": linux, "ios": ios, "mac":mac, "android": android
  }

  useEffect(() => {   
    if (game.metacritic > 75) {
    }else if (game.metacritic < 60){
      setscoreColor(classes.scoreColor3)
    }else{
      setscoreColor(classes.scoreColor2)
    } 
  }, [classes.scoreColor2, classes.scoreColor3, game.metacritic])

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
          <div className={classes.IconDiv}  >
            {game.parent_platforms.map((platform) => (
              <img className={classes.Icons} 
              key={platform.platform.id} 
              src={dictionary[platform.platform.slug]} 
              alt={platform.platform.name} />
              ))
            } 
            {game.metacritic && <div style={{'position': 'absolute', 'left':'230px','display':'flex','alignItems':'baseline'}}>
              <GeneralWhiteText style={{'marginRight': '5px'}}>Metacritic</GeneralWhiteText> 
              <div style={{'width': '25px','lineHeight': '18px','borderRadius': '20%','textAlign': 'center','fontSize': '13px','fontWeight': 'bolder'}}
               className={scoreColor}>{game.metacritic}</div>
            </div>}
          </div>           
          <GeneralWhiteText className={classes.releaseContainer} variant="body2"  component="p">
            Release Date <span style={{'position': 'absolute', 'left':'255px'}}>{game.released}</span>
          </GeneralWhiteText> 
    
          <div className={classes.genreDiv}>
            <GeneralWhiteText className={classes.genresHead}>Genres</GeneralWhiteText>
            {game.genres.map((genre) => (<GeneralWhiteText style={{'marginRight':'4px','fontSize':'12px','color':'lightgrey'}} 
            variant="body2"  component="p" key={genre.id} genre={genre.name}>{genre.name }</GeneralWhiteText>))}
          </div>     
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button style={{'marginLeft': '10px'}} size="small" component={Link} to={`/gameInfo/${game.id}`}>
          <SportsEsportsOutlinedIcon style={{'marginRight': '5px'}}></SportsEsportsOutlinedIcon>
          More Info
        </Button>
        <Button className={classes.WishlistButton} size="small" >
          <CardGiftcardIcon style={{'marginRight': '5px'}}></CardGiftcardIcon>
          Wishlist
        </Button>
      </CardActions>
    </Card>
  );
}

export default GameCard;
