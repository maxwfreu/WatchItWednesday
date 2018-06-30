import React from 'react';
import MainMovie from '../MainMovie';
import AlternateMovies from '../AlternateMovies';
import "../../styles/landing_page.scss"

export default class LandingPage extends React.Component {
  render() {
    return (
       <div className="landing-wrap">
         <MainMovie />
         <AlternateMovies />
       </div>
    )
  }
}