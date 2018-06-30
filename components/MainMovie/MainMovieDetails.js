import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard';

export default class MainMovieDetails extends React.Component {
  render() {
    return (
      <div className="main-movie-details-wrap">
        <h1>{this.props.name}</h1>
        <h4>{this.props.cast}</h4>
        <h3> My Take </h3>
        <p>
          {`
            Who doesn't love a good Nick Cage film? This movie is about 1 hour and 30 minutes of 'Woah, I wonder whats going to happen next' and another
            30 minutes of 'Huh, thats pretty neat'. You definitely won't walk away from this one feeling fulfilled,
            but you won't be that let down.
          `} 
        </p>
        <h3> Synopsis </h3>
        <p>
          {`
            Fifty years after it was buried in a time capsule, a schoolgirl's cryptic document falls into the hands of Caleb Koestler, the son of professor John Koestler (Nicolas Cage). John figures out that the encoded message accurately lists every major disaster from the past five decades, and predicts three future calamities -- one a global cataclysm. When his warnings fall on deaf ears, John enlists the help of the prophetic author's daughter and granddaughter to try to avert the ultimate disaster.
          `}
        </p>
        <h4> Available On </h4>
        <div>
         <p>Prime Video ($1.99) | YouTube ($1.99)</p>
        </div> 
      </div>
    )
  }
}

MainMovieDetails.propTypes = {
  cast: PropTypes.string,
  name: PropTypes.string,
}

MainMovieDetails.defaultProps = {
  cast: '...',
  name: '...',
}