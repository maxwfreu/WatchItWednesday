import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard';

export default class AlternateMovies extends React.Component {
  render() {
    return (
      <div className="alternate-movies-wrap">
        <MovieCard source="../../static/images/annapolis.jpg" />
        <MovieCard source="../../static/images/armageddon.jpg" />
        <MovieCard source="../../static/images/stuckonyou.jpg" />
        <MovieCard source="../../static/images/21.jpeg"/>
      </div>
    )
  }
}