import React from 'react';
import PropTypes from 'prop-types';
import MyTake from '../../static/MyTake';

export default class MaxSays extends React.Component {
  // componentDidMount() 
  render() {
    let rottenTomatoesRating = 'Unknown';
    for(let i in this.props.ratings) {
      const rating = this.props.ratings[i];
      if(rating.Source === 'Rotten Tomatoes') {
        rottenTomatoesRating = rating.Value;
        break;
      }
    }
    return (
      <div className="max-says-wrap main-section">
        <h1>{this.props.title}</h1>
        <h5>{this.props.year}</h5>
        <h4>Max Says</h4>
        <p>{MyTake[this.props.imdbID]}</p>
        <h4>Rotten Tomatoes</h4>
        <p>{rottenTomatoesRating}</p>
      </div>
    )
  }
}

MaxSays.propTypes = {
  imdbID: PropTypes.string.isRequired,
  title: PropTypes.string,
  year: PropTypes.string,
  ratings: PropTypes.arrayOf(PropTypes.object),
}

MaxSays.defaultProps = {
  title: '...',
  year: '...',
  ratings: [],
}
