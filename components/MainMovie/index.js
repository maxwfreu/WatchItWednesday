import React from 'react';
import PropTypes from 'prop-types';
import MainMovieCard from './MainMovieCard';
import MainMovieDetails from './MainMovieDetails';
import MaxSays from './MaxSays';

export default class MainMovie extends React.Component {
  render() {
    return (
      <div className="main-movie-wrap">
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
          isMain
        />
      </div>
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
