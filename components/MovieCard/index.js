import React from 'react';
import PropTypes from 'prop-types';

export default class MovieCard extends React.Component {
  render() {
    // NOTE: this is probably the dumbest code I have ever written. I may or may not have had a few drinks.
    const mainImgClass = this.props.isMain ? 'main-image-art' : 'default-image alternate-image-art';
    const mainArtClass = this.props.isMain ? 'main-image-art' : 'default-image-art alternate-image-art';
    return (
      <React.Fragment>
        {this.props.source ? (
           <img src={this.props.source} alt="Movie Art" className={mainImgClass} onClick={this.props.onClick} />
        ):(
          <div className={mainArtClass} />
        )}
      </React.Fragment>
    )
  }
}

MovieCard.propTypes = {
  source: PropTypes.string,
  isMain: PropTypes.bool,
  onClick: PropTypes.func,
}

MovieCard.defaultProps = {
  source: null,
  isMain: false,
  onClick: () => true,
}