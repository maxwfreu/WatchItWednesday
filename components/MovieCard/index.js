import React from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

export default class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    ReactGA.event({
      category: 'Browse',
      action: 'Clicked Movie',
      label: this.props.title,
    });
    this.props.onClick();
  }

  render() {
    let mainImgClass = 'default-image loading-image-art';
    const mainArtClass = 'default-image loading-image-art';
    if (this.props.source) {
      mainImgClass = 'default-image';
    }
    return (
      <React.Fragment>
        {this.props.source ? (
          <div className="movie-card-img">
            <div className="movie-card-img-wrap">
              <img src={this.props.source} alt="Movie Art" className={mainImgClass} onClick={this.onClick} />
              <div className="movie-card-details">
                <div>
                  <h4>{this.props.title}</h4>
                  <p className="genre">{this.props.genre}</p>
                </div>
              </div>
            </div>
          </div>
        ):(
          <div className={mainArtClass} />
        )}
      </React.Fragment>
    )
  }
}

MovieCard.propTypes = {
  source: PropTypes.string,
  genre: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
}

MovieCard.defaultProps = {
  source: null,
  genre: '',
  title: '',
  onClick: () => true,
}