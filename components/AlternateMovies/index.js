import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard';

export default class AlternateMovies extends React.Component {
  constructor(props) {
    super(props);
    this.getMovieSource = this.getMovieSource.bind(this);
    this.getMovieTitle = this.getMovieTitle.bind(this);
    this.getMovieDetails = this.getMovieDetails.bind(this);
    this.getMovieGenre = this.getMovieGenre.bind(this);
  }

  getMovieDetails(index) {
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
    return details;
  }

  getMovieSource(index) {
    const details = this.getMovieDetails(index);
    if (!details) return null
    return details.poster;
  }

  getMovieTitle(index) {
    const details = this.getMovieDetails(index);
    if (!details) return null
    return details.title;
  }

  getMovieGenre(index) {
    const details = this.getMovieDetails(index);
    if (!details) return null
    return details.genre.replace(/, /g, ' • ');
  }

  render() {

    return (
      <div>
      <h5 className="section-title">Mentionables</h5>
      <div className="alternate-movies-wrap">
        <MovieCard
          source={this.getMovieSource(0)}
          onClick={() => this.props.setMainMovie(this.props.alternateIMDBIDs[0])}
          title={this.getMovieTitle(0)}
          genre={this.getMovieGenre(0)}
        />
        <MovieCard
          source={this.getMovieSource(1)}
          onClick={() => this.props.setMainMovie(this.props.alternateIMDBIDs[1])}
          title={this.getMovieTitle(1)}
          genre={this.getMovieGenre(1)}
        />
        <MovieCard
          source={this.getMovieSource(2)}
          onClick={() => this.props.setMainMovie(this.props.alternateIMDBIDs[2])}
          title={this.getMovieTitle(2)}
          genre={this.getMovieGenre(2)}
        />
        <MovieCard
          source={this.getMovieSource(3)}
          onClick={() => this.props.setMainMovie(this.props.alternateIMDBIDs[3])}
          title={this.getMovieTitle(3)}
          genre={this.getMovieGenre(3)}
        />
      </div>
      </div>
    )
  }
}

AlternateMovies.propTypes = {
  alternateIMDBIDs: PropTypes.arrayOf(PropTypes.string).isRequired,
  movieDetails: PropTypes.object.isRequired,
  setMainMovie: PropTypes.func.isRequired,
}