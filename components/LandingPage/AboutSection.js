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
            Searching for mediocrity? Yearning for something to fill the deafening silencing as you scroll past purple 
            nks on your favorite reddit viewer? Well, you're in luck. You have somehow stumbled upon my list of medocrity.
          `}
        </p>
        <p className="about-text">
          {`
            I update this website weekly with movies that I think are perfect for the proveriable Wednesday.
            By that I mean, movies that aren't great, but aren't bad. Movies that are just sorta, 'Meh, yeah that was decent'.
            The sort of movie where you can get up, prepare a quick meal, and jump right back in without worrying about missing anything.
            The perfect movie for a lazy afternoon after a long day at work on a Wednesday. 
          `}
        </p>
        <p className="about-text">
          {`
            So many times I spend an over an our searching through movies trying to find the right one when in reality all
            I really want is something to throw on that I can zone in an out off. Have you ever searched for the best movies
            of 2018 just to see a bunch of movies that youve already seen? Me too - and that's frustrating.
          `}
        </p>
        <p className="about-text">
          {`
            So yeah these are my movie suggestions for this Wednesday, or any day of the week that you feels Wednesday-like.
            They aren't the best movies, but they are decent movies. 
          `}
        </p>
      </div>
      </React.Fragment>
    )
  }
}