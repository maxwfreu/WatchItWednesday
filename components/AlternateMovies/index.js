import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard';

export default class AlternateMovies extends React.Component {
  constructor(props) {
    super(props);
    this.getMovieSource = this.getMovieSource.bind(this);
  }

  getMovieSource(index) {
    if(this.props.movieDetails.size < index - 1) {
      return null;
    }
    let id = this.props.alternateIMDBIDs[index];
    if (!id) {
      return null;
    }
    let details = this.props.movieDetails[id];
    if (!details) {
      return null;
    }
    return details.poster;
  }

  render() {

    return (
      <div className="alternate-movies-wrap">
        <MovieCard source={this.getMovieSource(0)} onClick={() => this.props.setMainMovie(this.props.alternateIMDBIDs[0])} />
        <MovieCard source={this.getMovieSource(1)} onClick={() => this.props.setMainMovie(this.props.alternateIMDBIDs[1])} />
        <MovieCard source={this.getMovieSource(2)} onClick={() => this.props.setMainMovie(this.props.alternateIMDBIDs[2])} />
        <MovieCard source={this.getMovieSource(3)} onClick={() => this.props.setMainMovie(this.props.alternateIMDBIDs[3])} />
      </div>
    )
  }
}

AlternateMovies.propTypes = {
  alternateIMDBIDs: PropTypes.arrayOf(PropTypes.string).isRequired,
  movieDetails: PropTypes.object.isRequired,
  setMainMovie: PropTypes.func.isRequired,
}