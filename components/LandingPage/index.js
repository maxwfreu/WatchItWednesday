import React from 'react';
import PropTypes from 'prop-types';
import MainMovie from '../MainMovie';
import AlternateMovies from '../AlternateMovies';
import AboutSection from './AboutSection';
import MaxWho from './MaxWho';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainIMDBID: props.mainIMDBID,
      alternateIMDBIDs: props.alternateIMDBIDs,
      movieDetails: {},
    }
    this.getMovieDetails = this.getMovieDetails.bind(this);
    this.initializeMovies = this.initializeMovies.bind(this);
    this.setMainMovie = this.setMainMovie.bind(this);
  }

  componentDidMount() {
    this.initializeMovies(this.props.mainIMDBID);
  }

  async initializeMovies() {
    await this.getMovieDetails(this.props.mainIMDBID);
    for(let id in this.props.alternateIMDBIDs) {
      await this.getMovieDetails(this.props.alternateIMDBIDs[id]);
    }
  }

  async getMovieDetails(id) {
    const that = this;
    const API_KEY = '246e0d59';
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
    const json = await response.json();
    const movieDetails = this.state.movieDetails;
    movieDetails[id] = {
      title: json.Title,
      year: json.Year,
      cast: json.Actors,
      plot: json.Plot,
      runtime: json.Runtime,
      poster: json.Poster,
      rated: json.Rated,
      genre: json.Genre,
      ratings: json.Ratings,
      director: json.Director,
    };
    this.setState({
      movieDetails: movieDetails,
    });
  }

  setMainMovie(newMainMovieId) {
    const oldMainMovieId = this.state.mainIMDBID;
    const newAlternateIMDBIDs = this.state.alternateIMDBIDs;
    const index = newAlternateIMDBIDs.indexOf(newMainMovieId);
    newAlternateIMDBIDs[index] = this.state.mainIMDBID;
    this.setState({
      mainIMDBID: newMainMovieId,
      alternateIMDBIDs: newAlternateIMDBIDs,
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="landing-page-main-section">
          <MainMovie
            imdbID={this.state.mainIMDBID}
            {...this.state.movieDetails[this.state.mainIMDBID]}
          />
        </div>
        <div className="landing-wrap">
          <AlternateMovies
            movieDetails={this.state.movieDetails}
            alternateIMDBIDs={this.state.alternateIMDBIDs}
            setMainMovie={this.setMainMovie}
          />
        </div>
        <div className="landing-wrap">
          <AboutSection />
        </div>
        <div className="landing-wrap">
          <MaxWho />
        </div>
      </React.Fragment>
    )
  }
}

LandingPage.propTypes = {
  mainIMDBID: PropTypes.string.isRequired,
  alternateIMDBIDs: PropTypes.arrayOf(PropTypes.string).isRequired,
}