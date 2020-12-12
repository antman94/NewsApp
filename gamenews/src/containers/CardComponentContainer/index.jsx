import React, { useEffect, Fragment, Paragraph } from 'react';
import { connect } from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

import { fetchGames } from "../../redux/actions/games";
import { CardContainer } from '../../components/common/index.styled';
import GameCard from '../../components/gameCard/GameCard';
import { selectGames, selectGamesErr, selectGamesisLoading} from '../../redux/reducers/games';


const useStyles = makeStyles(() => ({
  centerdiv: {
    color: "white",
    marginTop: '10%',
    margin: 'auto',
    width: '50%',
    textAlign: 'center'
  }
}))

function CardComponentContainer(props) {
  const classes = useStyles();

  useEffect(() => {
    fetchGames();
    // fetchGame("51325");
    // fetchUsers();
  }, [])

  const { games, err, isLoading, fetchGames,} = props;
  // console.log(users);
  console.log(games);
  return (
    <CardContainer>
      {isLoading && <div className={classes.centerdiv}><CircularProgress style={{'color': 'yellow'}}/></div>}
      {games && (
        <Fragment>
          {games.results.length === 0 && (<Paragraph>No games found</Paragraph>)}
          {games.results.map((game) => (<GameCard key={game.id} game={game}/>))}
        </Fragment>
      )}
      {err && <div className={classes.centerdiv}>An error occurred. Message: {err.message}</div>}
    </CardContainer>
  )
}

const mapStateToProps = (state) => {
  return {
    games: selectGames(state),
    err: selectGamesErr(state),
    isLoading: selectGamesisLoading(state),
    // gameinfo: selectSingelGame(state,"51325"),
    // users: selectUserList(state)
  }
};
const mapDispatchToProps = {
  fetchGames,
  // fetchGame,
  // fetchUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)( CardComponentContainer);


