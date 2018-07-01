import React from 'react';
import MainMovie from '../MainMovie';
import AlternateMovies from '../AlternateMovies';
import PropTypes from 'prop-types';

export default class MaxWho extends React.Component {
  render() {
    return (
      <React.Fragment>
      <h5 id="maxwho" className="section-title">Max Who?</h5>
      <div className="landing-about-wrap">
        <p className="about-text">
          {`
            I'm just some guy. Should you trust my taste in movies? Probably not - but why not? I'm an average guy all around, and so are my movie suggestions.  
          `}
        </p>
      </div>
      </React.Fragment>
    )
  }
}