import React from 'react';
import PropTypes from 'prop-types';
import MyTake from '../../static/MyTake';

export default class MaxSays extends React.Component {
  constructor(props) {
    super(props);
    this.renderShrugs = this.renderShrugs.bind(this);
  }
  renderShrugs() {
    const shrugs = [];
    const rating = MyTake[this.props.imdbID].rating;
    const half = MyTake[this.props.imdbID].half;
    for (var i = 0; i < 5; i++) {
      if (i == rating-1 && half) {
        shrugs.push(<span className="active" key={`active-${i}`}>¯\_(ツ</span>);
        shrugs.push(<span className="active half"  key={`active-${i}-half`}>)_/¯</span>);
      } else if (i < rating) {
        shrugs.push(<span className="active"  key={`active-${i}`}>¯\_(ツ)_/¯</span>);
      } else {
        shrugs.push(<span key={`active-${i}`}>¯\_(ツ)_/¯</span>)
      }
    }
    return shrugs;
  }
  render() {
    let rottenTomatoesRating = 'Unknown';
    for(let i in this.props.ratings) {
      const rating = this.props.ratings[i];
      if(rating.Source === 'Rotten Tomatoes') {
        rottenTomatoesRating = rating.Value;
        break;
      }
    }
    let rottenImg = 'rotten';
    if (rottenTomatoesRating !== 'Unknown') {
      const rottenNum = parseInt(rottenTomatoesRating.replace('%', '').trim(), 10);
      if (rottenNum > 59) {
        rottenImg = 'fresh';
      }
    }
    const opinionShrugs = this.renderShrugs();
    return (
      <div className="col-3 max-says-wrap main-section">
        <h1>{this.props.title}</h1>
        <h5>{this.props.year}</h5>
        <div className="max-says-title">
          <h4>Max Says</h4>
          <a href="#maxwho">?</a>
        </div>
        <p>{MyTake[this.props.imdbID].opinion}</p>
        <h4>Wednesday Rating</h4>
        {opinionShrugs}
        <div className="wednesday-rating">

        </div>
        <h4>Rotten Tomatoes</h4>
        <div className="rotten-tomatoes">
          <img src={`../../static/images/rotten-${rottenImg}.png`} />
          <p>{rottenTomatoesRating}</p>
        </div>
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
