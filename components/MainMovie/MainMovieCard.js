import React from 'react';
import PropTypes from 'prop-types';

export default class MainMovieCard extends React.Component {
  render() {
    // NOTE: this is probably the dumbest code I have ever written. I may or may not have had a few drinks.
    const mainImgClass = 'main-image';
    const mainArtClass = 'main-art-loading loading-image-art';
    return (
      <div className="main-movie-card-wrap main-section">
        {this.props.source ? (
          <React.Fragment>
           <img src={this.props.source} alt="Movie Art" className={mainImgClass} onClick={this.props.onClick} />
           <button> PLAY TRAILER </button>
          </React.Fragment>
        ):(
          <div className={mainArtClass} />
        )}
      </div>
    )
  }
}

MainMovieCard.propTypes = {
  source: PropTypes.string,
  onClick: PropTypes.func,
}

MainMovieCard.defaultProps = {
  source: null,
  onClick: () => true,
}