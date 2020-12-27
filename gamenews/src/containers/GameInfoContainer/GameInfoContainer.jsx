import React, { useEffect,useState } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import ReactPlayer from 'react-player'
import Chip from '@material-ui/core/Chip';

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
import ios from '../../assets/logos/platforms/app-store.png';
import CarouselFunc from '../../components/Carousel/Carousel';

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
    paddingBottom: '60px'
  },
  backgroundImage: {
    backgroundPosition: 'center', 
    backgroundSize: 'cover', 
    width: '85%',
    float: 'right',
    height: '100vh',
    borderRadius: '5px'
  },
  ButttonUnderTitle: {
    marginTop:'15px'
  },
  button: {
    backgroundColor: 'yellow',
    marginRight: '10px',
    marginBottom: '10px'
  },
  aboutText: {
    width: '80%',
    marginTop: '3%',
    marginBottom: '5%'
  },

  contentLeft: {
    width: '60%',
    marginLeft: '40px',
    marginTop: '20px'
  },
  contentInfoTwo: {
    width: '40%',
  },
  buy: {
    marginTop: '20%',
  },
  buyButtons: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '10px'
  },
  datePlatBox: {
    display: 'flex',
    marginBottom: '10px',
    alignItems:'center'
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
  publisherDiv: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '7px',
    marginBottom: '30px'
  },
  pubDevChip: {
    marginRight: '8px'
  }

}))

export const GameInfoContainer = (props) => {
  const classes = useStyles();
  const { gameinfo, fetchGame, err, isLoading } = props;
  const [scoreColor, setscoreColor] = useState(classes.scoreColor);
  const dictionary={
    "pc": pc, "xbox": xbox, "playstation": playstation, "nintendo": nintendo,
    "linux": linux, "ios": ios, "mac":mac, "android": android
  }
  const gameId = props.match.params.gameId;
  
  
  useEffect(() => {
    fetchGame(gameId);
  }, [fetchGame, gameId])


  useEffect(() => { 
    if(isLoading === false){
      if(gameinfo.metacritic && gameinfo.metacritic){  
        if (gameinfo.metacritic > 75) {
        }else if (gameinfo.metacritic < 60){
          setscoreColor(classes.scoreColor3)
        }else{
          setscoreColor(classes.scoreColor2)
        } 
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [classes.scoreColor2, classes.scoreColor3, isLoading])

  return (
    <div>
      {isLoading && <div className={classes.centerdiv}><CircularProgress style={{'color': 'yellow'}}/></div>}
      {err && <div className={classes.centerdiv}>👋 Hello kioskmongo!💩 An error occurred! Holey moley! This really sucks 🥺 Message: {err.message}</div>} 
      {gameinfo && (
        <div className={classes.backgroundImage} style={{'backgroundImage':`linear-gradient( rgba(0, 0, 0, 0.8),rgba(17, 17, 17, 100) ),url(${gameinfo.background_image})`}}>
        <div className={classes.content}>

          {/* första diven */}
          <div className={classes.contentLeft}>
            <div className={classes.datePlatBox}> 
              <Chip label={gameinfo.released} />
              <div className={classes.IconDiv}  >
                {gameinfo.parent_platforms.map((platform) => (
                  <img className={classes.Icons} 
                  key={platform.platform.id} 
                  src={dictionary[platform.platform.slug]} 
                  alt={platform.platform.name} />
                  ))
                } 
              </div>
              {gameinfo.metacritic && 
                <div style={{'width': '25px','lineHeight': '18px','borderRadius': '20%','textAlign': 'center','fontSize': '13px','fontWeight': 'bolder'}}
                className={scoreColor}>{gameinfo.metacritic}</div>
              }
            </div>
            <GeneralWhiteText variant="h3"><strong>{gameinfo.name}</strong></GeneralWhiteText>
            <div className={classes.ButttonUnderTitle}>
              <Button
                variant="contained"
                size="medium"
                color="default"
                className={classes.button}
                startIcon={< CardGiftcardIcon/>}
                > Wishlist
              </Button>
            </div>
            <div className={classes.aboutText}>
              <GeneralWhiteText  variant="h6"><strong>About</strong></GeneralWhiteText>
              <GeneralWhiteText variant='body1'>{gameinfo.description_raw.replace(/###/g,'')}</GeneralWhiteText>
            </div>
            <div>
              <GeneralWhiteText  variant="h6"><strong>Publishers</strong></GeneralWhiteText>
              <div className={classes.publisherDiv}>
              {gameinfo.publishers.map((pub) => (<Chip className={classes.pubDevChip} key={pub.id} label={pub.name} />))}
              </div>
              <GeneralWhiteText  variant="h6"><strong>Developers</strong></GeneralWhiteText>
              <div className={classes.publisherDiv}>
              {gameinfo.developers.map((dev) => (<Chip className={classes.pubDevChip} key={dev.id} label={dev.name} />))}
              </div>
            </div>
          </div>

          {/* andra diven */}
          <div className={classes.contentInfoTwo}>
            <div className={classes.buy}>
              <GeneralWhiteText ><strong>Where to buy</strong></GeneralWhiteText>
              <div className={classes.buyButtons}>
                {gameinfo.stores.map((store) => (
                  <Button
                    variant="contained"
                    size="small"
                    color="default"
                    key={store.id}
                    className={classes.button}
                    startIcon={<ShoppingCartIcon/>}
                    href={store.url}
                    >{store.store.name}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              {gameinfo.clip && <ReactPlayer url={gameinfo.clip.clip} loop={true} controls={true} playing={true} volume={0} width='400px' height='300px' />}
            </div>
            <div>
              <CarouselFunc gameId={gameId} />
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

