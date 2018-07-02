import React from 'react';
import PropTypes from 'prop-types';
import TrackingButton from '../Tracking/TrackingButton';

export default class MainMovieCard extends React.Component {
  render() {
    // NOTE: this is probably the dumbest code I have ever written. I may or may not have had a few drinks.
    const mainImgClass = 'main-image';
    const mainArtClass = 'main-art-loading loading-image-art';
    return (
      <div className="main-movie-card-wrap main-section">
        {this.props.source ? (
          <React.Fragment>
           <img src={this.props.source} alt="Movie Art" className={mainImgClass} />
           <TrackingButton
              action="Play Trailer"
              category="Trailer"
              onClick={this.props.showTrailer}
              text="PLAY TRAILER"
              label={this.props.title}
           />
          </React.Fragment>
        ):(
          <div className={mainArtClass} />
        )}
      </div>
    )
  }
}

MainMovieCard.propTypes = {
  title: PropTypes.title,
  source: PropTypes.string,
  showTrailer: PropTypes.func,
}

MainMovieCard.defaultProps = {
  title: '',
  source: null,
  showTrailer: () => (true),
}