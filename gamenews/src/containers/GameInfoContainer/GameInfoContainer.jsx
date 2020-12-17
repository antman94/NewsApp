import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import ReactPlayer from 'react-player'

import { fetchGame } from "../../redux/actions/games";
import { selectSingelGame, selectSingelGameErr, selectSingelGameisLoading} from '../../redux/reducers/games';
import { GeneralWhiteText } from '../../components/common/index.styled';
import Button from '@material-ui/core/Button';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import pc from '../../assets/logos/platforms/windows.png';
import xbox from '../../assets/logos/platforms/xbox-logo.png';
import playstation from '../../assets/logos/platforms/playstation-logotype.png';
import nintendo from '../../assets/logos/platforms/nintendo-switch.png';
import linux from '../../assets/logos/platforms/linux-1.png';
import mac from '../../assets/logos/platforms/mac-os-logo.png';
import android from '../../assets/logos/platforms/android.png';
import ios from '../../assets/logos/platforms/app-store.png'

const useStyles = makeStyles(() => ({
  centerdiv: {
    color: "white",
    marginTop: '10%',
    margin: 'auto',
    width: '40%',
    textAlign: 'center',
  },
  content: {
    display: 'flex',
  },
  backgroundImage: {
    backgroundPosition: 'center', 
    backgroundSize: 'cover', 
    width: '80%',
    float: 'right',
    minHeight: '100vh',
    borderRadius: '5px'
  },
  ButttonUnderTitle: {
  },
  buttons: {
    backgroundColor: 'yellow',
  },
  aboutText: {
    width: '80%',
    marginTop: '3%',
    marginBottom: '5%'
  },

  contentLeft: {
    width: '60%',
    marginLeft: '20px',
    marginTop: '20px'
  },
  contentInfoTwo: {
    width: '40%',
  },
  buy: {
    marginTop: '10%',
  },
  buyButtons: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '30px'
  },
  datePlatBox: {
    display: 'flex',
  },
  Icons: {
    height: '20px',
    marginRight: '10px',
  },
  IconDiv: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '20px'

  },

}))

export const GameInfoContainer = (props) => {
  const classes = useStyles();
  const { gameinfo, fetchGame, err, isLoading } = props;
  const gameId = props.match.params.gameId;
  const dictionary={
    "pc": pc, "xbox": xbox, "playstation": playstation, "nintendo": nintendo,
    "linux": linux, "ios": ios, "mac":mac, "android": android
  }
  
  useEffect(() => {
    fetchGame(gameId);
  }, [fetchGame, gameId])

  console.log(gameinfo);
  return (
    <div>
      {isLoading && <div className={classes.centerdiv}><CircularProgress style={{'color': 'yellow'}}/></div>}
      {err && <div className={classes.centerdiv}>👋 Hello kioskmongo!💩 An error occurred! Holey moley! This really sucks 🥺 Message: {err.message}</div>} 
      {gameinfo && (
        <div className={classes.backgroundImage} style={{'backgroundImage':  `linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9) ) ,url(${gameinfo.background_image})`}}>
        <div className={classes.content}>

          {/* första diven */}
          <div className={classes.contentLeft}>
            <div className={classes.datePlatBox}>
              <GeneralWhiteText>{gameinfo.released}</GeneralWhiteText>
              <div className={classes.IconDiv}  >
                {gameinfo.parent_platforms.map((platform) => (
                  <img className={classes.Icons} 
                  key={platform.platform.id} 
                  src={dictionary[platform.platform.slug]} 
                  alt={platform.platform.name} />
                  ))
                } 
              </div>
            </div>
              <GeneralWhiteText variant="h3"><strong>{gameinfo.name}</strong></GeneralWhiteText>
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
              <GeneralWhiteText variant='body1'>{gameinfo.description_raw}</GeneralWhiteText>
            </div>
            <div>
              <GeneralWhiteText  variant="h6"><strong>Publisher</strong></GeneralWhiteText>
            </div>
          </div>

          {/* andra diven */}
          <div className={classes.contentInfoTwo}>
            <div className={classes.buy}>
              <GeneralWhiteText ><strong>Where to buy</strong></GeneralWhiteText>
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
            <div>
              {gameinfo.clip && <ReactPlayer url={gameinfo.clip.clip} loop={true} controls={true} playing={true} volume={0} width='400px' height='300px' />}
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

