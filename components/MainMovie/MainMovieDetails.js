import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard';
import MyTake from '../../static/MyTake';
export default class MainMovieDetails extends React.Component {
  render() {
    if (this.props.title === '...') {
      return (
        <div className="main-movie-details-loading-wrap">
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
        )
    }
    return (
      <div className="main-movie-details-wrap">
        <div>
          <div className="main-movie-details-title">
            <h1>{this.props.title} ({this.props.year})</h1>
            <p>&nbsp;&nbsp;&bull;&nbsp;&nbsp;{this.props.runtime}&nbsp;&nbsp;&bull;&nbsp;&nbsp;{this.props.rated}</p>
          </div>
          <h4>Genre</h4>
          <p>{this.props.genre}</p>
          <h4>Cast</h4>
          <p>{this.props.cast}</p>
          <h3> Synopsis </h3>
          <p>{this.props.plot}</p>
          <h3> My Take </h3>
          <p>{MyTake[this.props.imdbID]}</p>
          </div>
      </div>
    )
  }
}

MainMovieDetails.propTypes = {
  imdbID: PropTypes.string.isRequired,
  cast: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  cast: PropTypes.string,
  plot: PropTypes.string,
  poster: PropTypes.string,
  rated: PropTypes.string,
  genre: PropTypes.string,
}

MainMovieDetails.defaultProps = {
  title: '...',
  year: '...',
  cast: '...',
  plot: '...',
  rated: '',
  genre: '',
  poster: null,
}