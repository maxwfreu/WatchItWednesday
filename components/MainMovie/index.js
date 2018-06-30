import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard';
import MainMovieDetails from './MainMovieDetails';

export default class MainMovie extends React.Component {
  render() {
    return (
      <div className="main-movie-wrap">
        <MovieCard
          source={this.props.source}
          isMain
        />
        <MainMovieDetails />
      </div>
    )
  }
}

MainMovie.propTypes = {
  source: PropTypes.string,
}

MainMovie.defaultProps = {
  source: null,
}