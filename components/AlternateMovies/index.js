import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard';

export default class AlternateMovies extends React.Component {
  render() {
    return (
      <div className="alternate-movies-wrap">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    )
  }
}