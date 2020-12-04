import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { addUser } from '../redux/actions/index'
import { connect } from 'react-redux'
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

function GameCard(props) {

  useEffect(() => {
    props.addUser()
   
  }, [])

  const classes = useStyles();
  console.log(props.name,'redux');

  return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.poster}
            title={props.title + ' poster'}
          />
          <CardContent className={classes.CardContainer}>
            <GeneralWhiteText gutterBottom variant="h5" component="h2" className={classes.GameTitle}>
              {props.title}
            </GeneralWhiteText>
            <XboxICON className={classes.Icons} />
            <PSICON className={classes.Icons}/>
            <GeneralWhiteText variant="body2"  component="p">
              {props.content}
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
function mapStateToProps(state){
  return{ name: state.name
    
  }
  
}

function mapDispatchToProps(dispatch){
  return{ 
    addUser: () => {
      dispatch ({type: "SET_USER", payload: "knut"})
    }
  }
  
}
export default connect(mapStateToProps, mapDispatchToProps)(GameCard);
