import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard';

export default class MainMovieDetails extends React.Component {
  render() {
    return (
      <div className="main-movie-details-wrap">
        <div className="main-movie-details-title">
          <h1>{this.props.title} ({this.props.year})</h1>
          <p>&nbsp;&nbsp;&bull;&nbsp;&nbsp;{this.props.runtime}</p>
        </div>
        <h4>Cast</h4>
        <p>{this.props.cast}</p>
        <h3> Synopsis </h3>
        <p>{this.props.plot}</p>
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