import React, {useEffect, useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { connect } from 'react-redux';
import { gameScreenshots, screenshotsLoading, screenshotsErr } from '../../redux/reducers/screenshots';
import { fetchScreenshots} from '../../redux/actions/games';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  style: {
    width: '400px',
    height: '300px',

  },
}))

export const ScreenshotCarousel = (props) => {
  const classes = useStyles();
  const {gameinfo, fetchScreenshots, err, isLoading, gameId} = props;

  useEffect(() => {
    fetchScreenshots(gameId);
  }, [fetchScreenshots, gameId]);

console.log('test', props.gameinfo);

  return (
    <div>
    {gameinfo && (
      <Carousel className={classes.style}>
        <div>
          <img src={gameinfo.results[0].image} />
        </div>
        <div>
          <img src={gameinfo.results[1].image} />
        </div>
        <div>
          <img src={gameinfo.results[2].image} />
        </div>
        <div>
          <img src={gameinfo.results[3].image} />
        </div>
      </Carousel>
    )}
  </div>
  );
};

const mapStateToProps = (state, props) => { 
  return {
    gameinfo: gameScreenshots(state, props.gameId),
    err: screenshotsErr(state, props.gameId),
    isLoading: screenshotsLoading(state, props.gameId)
  }
}

const mapDispatchToProps = { 
  fetchScreenshots,
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenshotCarousel)

