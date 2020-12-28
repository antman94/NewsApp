import React, { useEffect, Fragment, Paragraph } from 'react';
import { connect } from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

import { fetchGames } from "../../redux/actions/games";
import { CardContainer } from '../../components/common/index.styled';
import GameCard from '../../components/gameCard/GameCard';
import { selectGames, selectGamesErr, selectGamesisLoading } from '../../redux/reducers/games';

const useStyles = makeStyles(() => ({
  centerdiv: {
    color: "white",
    marginTop: '10%',
    margin: 'auto',
    width: '50%',
    marginRight: '40%',
    textAlign: 'center'
  }
}))

function CardComponentContainer(props) {
  const classes = useStyles();
  const { games, err, isLoading, fetchGames} = props;

  useEffect(() => {
    fetchGames('1,2,3,7');
  }, [fetchGames])

  return (
    <CardContainer>
      {isLoading && <div className={classes.centerdiv}><CircularProgress style={{'color': 'yellow'}}/></div>}
      { !isLoading && 
        <Fragment>
          { games && 
            <Fragment>
              {games.results.length === 0 && (<Paragraph>No games found</Paragraph>)}
              {games.results.map((game) => (<GameCard key={game.id} game={game}/>))}
            </Fragment>
          }
        </Fragment>
      }
      {err && <div className={classes.centerdiv}>👋 Hello kioskmongo!💩 An error occurred! Holey moley! This really sucks 🥺 Message: {err.message}</div>}
    </CardContainer>
  )
}

const mapStateToProps = (state) => {
  return {
    games: selectGames(state),
    err: selectGamesErr(state),
    isLoading: selectGamesisLoading(state),
  }
};
const mapDispatchToProps = {
  fetchGames,
};

export default connect(mapStateToProps, mapDispatchToProps)( CardComponentContainer);


