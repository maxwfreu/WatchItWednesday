import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';

import MainMovieCard from './MainMovieCard';
import MainMovieDetails from './MainMovieDetails';
import MaxSays from './MaxSays';
import Trailers from '../../static/Trailers';

export default class MainMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTrailer: false,
    }
    this.hideTrailer = this.hideTrailer.bind(this);
    this.showTrailer = this.showTrailer.bind(this);
  }

  hideTrailer() {
    const player = document.querySelector('#player');
    const pauseAction = JSON.stringify({event: 'command', func: 'pauseVideo'});
    player.contentWindow.postMessage(pauseAction, 'https://www.youtube.com');
    this.setState({
      showTrailer: false,
    })
  }

  showTrailer() {
    this.setState({
      showTrailer: true,
    });
  }

  render() {
    const trailerClass = this.state.showTrailer ? 'in' : '';
    return (
      <React.Fragment>
        <div className={`main-movie-wrap  ${trailerClass}`}>
          <MaxSays
            imdbID={this.props.imdbID}
            title={this.props.title}
            year={this.props.year}
            ratings={this.props.ratings}
          />
          <MainMovieDetails
            {...this.props}
          />
          <MainMovieCard
            source={this.props.poster}
            showTrailer={this.showTrailer}
            isMain
          />
          <MediaQuery query="(min-device-width: 1224px)">
            <div className={`movie-trailer ${trailerClass}`}>
              <iframe
                id="player"
                width="100%"
                height="100%"
                src={Trailers[this.props.imdbID]}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen>
              </iframe>
              <button onClick={this.hideTrailer}>X</button>
            </div>
          </MediaQuery>
        </div>
        <MediaQuery query="(max-device-width: 1224px)">
          <div className={`movie-trailer-modal ${trailerClass}`}>
            <iframe
              id="player"
              width="75%"
              height="50%"
              src={Trailers[this.props.imdbID]}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen>
            </iframe>
            <button onClick={this.hideTrailer}>X</button>
          </div>
        </MediaQuery>
      </React.Fragment>
    )
  }
}

MainMovie.propTypes = {
  imdbID: PropTypes.string.isRequired,
  cast: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  cast: PropTypes.string,
  plot: PropTypes.string,
  poster: PropTypes.string,
  ratings: PropTypes.arrayOf(PropTypes.object),
  director: PropTypes.string,
  runtime: PropTypes.string,
}

MainMovie.defaultProps = {
  title: '...',
  year: '...',
  cast: '...',
  plot: '...',
  poster: null,
  ratings: [],
  director: '..',
  runtime: '...',
}
