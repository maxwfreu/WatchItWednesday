import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard';
import AvailableOn from '../../static/AvailableOn';
import TrackingLink from '../Tracking/TrackingLink';

export default class MainMovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.parseGenre = this.parseGenre.bind(this);
  }

  parseGenre() {
    if(!this.props.genre) return;
    return this.props.genre.replace(/, /g, ' • ');
  }
  render() {
    if (this.props.title === '...') {
      return (
        <div className="main-movie-details-loading-wrap">
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
        )
    }
    const genre = this.parseGenre();
    const availableOn = AvailableOn[this.props.imdbID];
    return (
      <div className="main-movie-details-wrap main-section">
        <div>
          <p className="genre">{genre}</p>
          <h4> Synopsis </h4>
          <p>{this.props.plot}</p>
          <div className="details">
            <div>
              <h4>Director</h4>
              <p>{this.props.director}</p>
              <h4>Cast</h4>
              <p>{this.props.cast}</p>
              <h4>Running time</h4>
              <p>{this.props.runtime}</p>
            </div>
            <div className="available-on">
              <h4>Available On</h4>
              {availableOn.map((item, idx) => (
                <div key={item.link}>
                  <img src={`../../static/images/${item.domain.toLowerCase().replace(/ /g, '')}.png`} />
                  <TrackingLink
                    action="Clicked AvailableOn Link"
                    category="Link"
                    classes="movie-link"
                    href={item.link}
                    label={`${item.domain} | ${item.title}`}
                    text={item.domain}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

MainMovieDetails.propTypes = {
  imdbID: PropTypes.string.isRequired,
  cast: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  cast: PropTypes.string,
  plot: PropTypes.string,
  poster: PropTypes.string,
  rated: PropTypes.string,
  genre: PropTypes.string,
  director: PropTypes.string,
  runtime: PropTypes.string,
}

MainMovieDetails.defaultProps = {
  title: '...',
  year: '...',
  cast: '...',
  plot: '...',
  rated: '',
  genre: '',
  director: '...',
  poster: null,
  runtime: '...',
}