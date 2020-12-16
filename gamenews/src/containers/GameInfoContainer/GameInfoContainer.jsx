import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import { fetchGame } from "../../redux/actions/games";
import { selectSingelGame, selectSingelGameErr, selectSingelGameisLoading} from '../../redux/reducers/games';
import { 
    AppContainer,
    GeneralWhiteText
   } from '../../components/common/index.styled';
import Button from '@material-ui/core/Button';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles(() => ({
  centerdiv: {
    color: "white",
    marginTop: '10%',
    margin: 'auto',
    width: '50%',
    textAlign: 'center'
  },
   root: {
    marginTop: '5%',
    flaot: 'right',
    width: '80%',
    padding: '15px',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'noWrap',
  },
  ButttonUnderTitle: {
    marginTop: '5%',
  },
  buttons: {
    martinTop: '10%',
    backgroundColor: 'yellow',
  },
  aboutText: {
    width: '80%',
    marginTop: '3%',
    marginBottom: '5%'
  },

  contentLeft: {
    marginLeft: '10%',
    width: '70%',
  },
  buy: {
    marginTop: '10%',
    marginLeft: '20%',
  },
  buyButtons: {
    marginTop: '10%',
    width: '300%',
  },

}))

export const GameInfoContainer = (props) => {
  const classes = useStyles();
  const gameId = props.match.params.gameId;
  
  useEffect(() => {
    fetchGame(gameId);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [])



  const { gameinfo, fetchGame, err, isLoading } = props;
  console.log(gameinfo);
  return (

      <div  className={classes.root}>
        {isLoading && <div className={classes.centerdiv}><CircularProgress style={{'color': 'yellow'}}/></div>}
        {err && <div className={classes.centerdiv}>👋 Hello kioskmongo!💩 An error occurred! Holey moley! This really sucks 🥺 Message: {err.message}</div>} 
        {gameinfo && (
        <div className={classes.content}>

          {/* första diven */}
          <div className={classes.contentLeft}>
            <div>
              <GeneralWhiteText variant="p"> DATE</GeneralWhiteText>
              <GeneralWhiteText variant="p"> PLATFORMS</GeneralWhiteText>
            </div>
              <GeneralWhiteText variant="h3"><strong>Cyberpunk 2077</strong></GeneralWhiteText>
            <div className={classes.ButttonUnderTitle}>
              <Button
                variant="contained"
                size="medium"
                color="default"
                className={classes.buttons}
                startIcon={< CardGiftcardIcon/>}
                > Wishlist
              </Button>
            </div>
            <div className={classes.aboutText}>
              <GeneralWhiteText  variant="h6"><strong>About</strong></GeneralWhiteText>
              <GeneralWhiteText variant="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</GeneralWhiteText>
            </div>
            <div>
              <GeneralWhiteText  variant="h6"><strong>Publisher</strong></GeneralWhiteText>
            </div>
          </div>

          {/* andra diven */}
          <div className={classes.contentInfoTwo}>

              <div className={classes.buy}>
                <GeneralWhiteText variant="p"><strong>Where to buy</strong></GeneralWhiteText>
                <div className={classes.buyButtons}>
                  <Button
                    variant="contained"
                    size="small"
                    color="default"
                    className={classes.buttons}
                    startIcon={< ShoppingCartIcon/>}
                    > Playstation
                  </Button>
                  <Button style={{marginLeft: '2%'}}
                    size="small"
                    variant="contained"
                    color="default"
                    className={classes.buttons}
                    startIcon={< ShoppingCartIcon/>}
                    > Steam
                  </Button>
                </div>
              </div>
          </div>          
        </div>
      )}
      </div>

  )
}

const mapStateToProps = (state, props) => { 
  const gameId = props.match.params.gameId;
  return {
    gameinfo: selectSingelGame(state,gameId),
    err: selectSingelGameErr(state,gameId),
    isLoading: selectSingelGameisLoading(state,gameId)
  }
}
const mapDispatchToProps = { 
  fetchGame,
}

export default connect(mapStateToProps, mapDispatchToProps)(GameInfoContainer)

