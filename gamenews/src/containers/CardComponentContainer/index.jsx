import React, { useEffect, Fragment, Paragraph } from 'react';
import { connect } from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

import { fetchGames } from "../../redux/actions/games";
import { CardContainer } from '../../components/common/index.styled';
import GameCard from '../../components/GameCard';

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
  }, [])

 
  const { games, err, isLoading, fetchGames } = props;
  console.log(games);
  return (
    <CardContainer>
      {isLoading && 
        <div className={classes.centerdiv}><CircularProgress /></div>
      }
      {games && (
        <Fragment>
          {games.results.length === 0 && (
            <Paragraph>No games found</Paragraph>
          )}
          {games.results.map((game) => (
            <GameCard
              key={game.id}
              game={game}
            />
          ))}
        </Fragment>
      )}
      {err && <div className={classes.centerdiv}>An error occurred. Message: {err.message}</div>}
    </CardContainer>
  )
}

const mapStateToProps = (state) => ({
  games: state.games.data,
  err: state.games.err,
  isLoading: state.games.isLoading
});
const mapDispatchToProps = {
  fetchGames
};

export default connect(mapStateToProps, mapDispatchToProps)( CardComponentContainer);


