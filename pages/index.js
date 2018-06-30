import React from 'react';
import Main from '../components/Main';
import LandingPage from '../components/LandingPage';
import "../styles/landing_page.scss"

export default class Home extends React.Component {
  render() {
    return (
      <Main>
        <LandingPage />
      </Main>
    )
  }
}