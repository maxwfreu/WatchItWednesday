import React from 'react';
import MainMovie from '../MainMovie';
import AlternateMovies from '../AlternateMovies';
import PropTypes from 'prop-types';

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
    console.log(json)
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
          <h5 id="about" className="section-title">About</h5>
          <div className="landing-about-wrap">
            <p className="about-text">
              {`
                Searching for mediocrity? Yearning for something to fill the deafening silencing as you scroll past purple links on your favorite reddit viewer? Well, you're in luck. You have somehow stumbled upon my list of medocrity.
              `}
            </p>
            <p className="about-text">
              {`
                I update this website weekly with movies that I think are perfect for the proveriable Wednesday. By that I mean, movies that aren't great, but aren't bad. Movies that are just sorta, 'Meh, yeah that was decent'. The sort of movie where you can get up, prepare a quick meal, and jump right back in without worrying about missing anything. The perfect movie for a lazy afternoon after a long day at work on a Wednesday. 
              `}
            </p>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
/*
       <div className="landing-wrap">
        <AlternateMovies
          movieDetails={this.state.movieDetails}
          alternateIMDBIDs={this.state.alternateIMDBIDs}
          setMainMovie={this.setMainMovie}
        />
        <h1 id="about" className="about-header"> About this site </h1>
        <p className="about-text">
          {`
            Searching for mediocrity? Yearning for something to fill the deafening silencing as you scroll past purple links on your favorite reddit viewer? Well, you're in luck. You have somehow stumbled upon my list of medocrity.
          `}
        </p>
        <p className="about-text">
          {`
            I update this website weekly with movies that I think are perfect for the proveriable Wednesday. By that I mean, movies that aren't great, but aren't bad. Movies that are just sorta, 'Meh, yeah that was decent'. The sort of movie where you can get up, prepare a quick meal, and jump right back in without worrying about missing anything. The perfect movie for a lazy afternoon after a long day at work on a Wednesday. 
          `}
        </p>
       </div>
       */

LandingPage.propTypes = {
  mainIMDBID: PropTypes.string.isRequired,
  alternateIMDBIDs: PropTypes.arrayOf(PropTypes.string).isRequired,
}