import React from 'react';
import PropTypes from 'prop-types';

export default class MovieCard extends React.Component {
  render() {
    const mainClass = this.props.isMain ? 'main-image-art' : 'alternate-image-art';
    return (
      <React.Fragment>
        {this.props.source ? (
           <img src={this.props.source} alt="Movie Art" className={mainClass} />
        ):(
          <div className={`default-image-art ${mainClass}`} />
        )}
      </React.Fragment>
    )
  }
}

MovieCard.propTypes = {
  source: PropTypes.string,
  isMain: PropTypes.bool,
}

MovieCard.defaultProps = {
  source: null,
  isMain: false,
}