import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard';
import MainMovieDetails from './MainMovieDetails';

export default class MainMovie extends React.Component {
  render() {
    return (
      <div className="main-movie-wrap">
        <MovieCard
          source={this.props.poster}
          isMain
        />
        <MainMovieDetails
          {...this.props}
        />
      </div>
    )
  }
}

MainMovie.propTypes = {
  cast: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  cast: PropTypes.string,
  plot: PropTypes.string,
  poster: PropTypes.string,
}

MainMovie.defaultProps = {
  title: '...',
  year: '...',
  cast: '...',
  plot: '...',
  poster: null,
}
