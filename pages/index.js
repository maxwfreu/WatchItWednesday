import React from 'react';
import Main from '../components/Main';
import LandingPage from '../components/LandingPage';
import "../styles/landing_page.scss"

export default class Home extends React.Component {
  render() {
    const alternateIMDBIDS = [
      'tt0417433', // Annapolis
      'tt0120591', // Armageddon
      'tt0338466', // Stuck on You
      'tt0478087', // 21
    ]
    return (
      <Main>
        <LandingPage
          mainIMDBID="tt0448011" // Knowing
          alternateIMDBIDs={alternateIMDBIDS}
        />
      </Main>
    )
  }
}