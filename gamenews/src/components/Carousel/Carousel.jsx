import React, {useEffect} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { connect } from 'react-redux';
import { selectSingelGame } from '../../redux/reducers/games';
import { fetchGame } from '../../redux/actions/games';
import { makeStyles } from '@material-ui/core/styles';



import testImg from '../Carousel/test.jpeg';

const useStyles = makeStyles(() => ({
  style: {
    width: '92%',

  },
}))

export const ScreenshotCarousel = (props) => {
  const classes = useStyles();
  // const {gameinfo, fetchGame } = props;

  // const gameId = this.props.match.params.gameId;




  return (
    <Carousel className={classes.style}>
      <div>
        <img src={testImg} />
      </div>
      <div>
        <img src={testImg} />
      </div>
      <div>
        <img src={testImg} />
      </div>
      <div>
        <img src={testImg} />
      </div>
      <div>
        <img src={testImg} />
      </div>
      <div>
        <img src={testImg} />
      </div>
      <div>
        <img src={testImg} />
      </div>
      <div>
        <img src={testImg} />
      </div>
    </Carousel>
  );
};

// const mapStateToProps = (state, props) => {
//   const gameId = props.match.params.gameId;
//   return {
//     gameinfo: selectSingelGame(state,gameId)
//   }
// }
// const mapDispatchToProps = {
//   fetchGame,
// }

const mapStateToProps = (state, props) => { 
  return {
    gameinfo: selectSingelGame(state,)
  }
}
const mapDispatchToProps = { 
  fetchGame,
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenshotCarousel)

