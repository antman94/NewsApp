import React, {useEffect} from 'react';
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
  const {screenshots, fetchScreenshots, gameId} = props;

  useEffect(() => {
    fetchScreenshots(gameId);
  }, [fetchScreenshots, gameId]);


  return (
    <div>
    {screenshots && (
      <Carousel className={classes.style}>
        { screenshots.results.length > 0 ?
        <div>
          <img alt='gamepic' src={screenshots.results[0].image} />
        </div> : <img alt='The game has not pictures' />}
        { screenshots.results.length > 1 ?
        <div>
          <img alt='gamepic' src={screenshots.results[1].image} />
        </div> : <img alt='The game has not pictures'/>}
        { screenshots.results.length > 2 ?
        <div>
          <img alt='gamepic' src={screenshots.results[2].image} />
        </div> : <img alt='The game has not pictures'/>}
        { screenshots.results.length > 3 ? 
        <div>
          <img alt='gamepic' src={screenshots.results[3].image} />
        </div> : <img alt='The game has not pictures'/>}
      </Carousel>
    )}
  </div>
  );
};

const mapStateToProps = (state, props) => { 
  return {
    screenshots: gameScreenshots(state, props.gameId),
    err: screenshotsErr(state, props.gameId),
    isLoading: screenshotsLoading(state, props.gameId)
  }
}

const mapDispatchToProps = { 
  fetchScreenshots,
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenshotCarousel)

