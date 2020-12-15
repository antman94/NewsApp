import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import { fetchGame } from "../../redux/actions/games";
import { selectSingelGame, selectSingelGameErr, selectSingelGameisLoading} from '../../redux/reducers/games';

const useStyles = makeStyles(() => ({
  centerdiv: {
    color: "white",
    marginTop: '10%',
    margin: 'auto',
    width: '50%',
    textAlign: 'center'
  }
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
    <div>
      {isLoading && <div className={classes.centerdiv}><CircularProgress style={{'color': 'yellow'}}/></div>}
      {err && <div className={classes.centerdiv}>An error occurred! Holey moley! This really sucks. Message: {err.message}</div>}
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

