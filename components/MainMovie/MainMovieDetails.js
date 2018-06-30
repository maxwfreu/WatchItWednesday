import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard';

export default class MainMovieDetails extends React.Component {
  render() {
    return (
      <div className="main-movie-details-wrap">
        <h1>Movie Name </h1>
        <h4>Cast</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h3> Available At </h3>
        <div>
          Netflix | Amazon Video
        </div> 
      </div>
    )
  }
}

MainMovieDetails.propTypes = {
  source: PropTypes.string,
}

MainMovieDetails.defaultProps = {
  source: null,
}