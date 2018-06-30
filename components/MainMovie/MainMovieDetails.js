import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard';

export default class MainMovieDetails extends React.Component {
  render() {
    if (this.props.title === '...') {
      return (
        <div className="main-movie-details-loading-wrap">
          <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
        )
    }
    return (
      <div className="main-movie-details-wrap">
        <div>
          <div className="main-movie-details-title">
            <h1>{this.props.title} ({this.props.year})</h1>
            <p>&nbsp;&nbsp;&bull;&nbsp;&nbsp;{this.props.runtime}</p>
          </div>
          <h4>Cast</h4>
          <p>{this.props.cast}</p>
          <h3> Synopsis </h3>
          <p>{this.props.plot}</p>
          </div>
      </div>
    )
  }
}

MainMovieDetails.propTypes = {
  cast: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  cast: PropTypes.string,
  plot: PropTypes.string,
  poster: PropTypes.string,
}

MainMovieDetails.defaultProps = {
  title: '...',
  year: '...',
  cast: '...',
  plot: '...',
  poster: null,
}