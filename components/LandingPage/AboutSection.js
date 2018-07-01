import React from 'react';
import MainMovie from '../MainMovie';
import AlternateMovies from '../AlternateMovies';
import PropTypes from 'prop-types';

export default class AboutSection extends React.Component {
  render() {
    return (
      <React.Fragment>
      <h5 id="about" className="section-title">About</h5>
      <div className="landing-about-wrap">
        <p className="about-text">
          {`
            Searching for mediocrity? Yearning for something to fill the deafening silencing as you scroll past purple links on your favorite reddit viewer? Well, you're in luck. You have somehow stumbled upon my list of medocrity.
          `}
        </p>
        <p className="about-text">
          {`
            I update this website weekly with movies that I think are perfect for the proveriable Wednesday. By that I mean, movies that aren't great, but aren't bad. Movies that are just sorta, 'Meh, yeah that was decent'. The sort of movie where you can get up, prepare a quick meal, and jump right back in without worrying about missing anything. The perfect movie for a lazy afternoon after a long day at work on a Wednesday. 
          `}
        </p>
      </div>
      </React.Fragment>
    )
  }
}