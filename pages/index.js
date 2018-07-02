import React from 'react';
import { connect } from 'react-redux';
import Nav from '../components/Nav';
import LandingPage from '../components/LandingPage';
import { initTracking } from '../components/Tracking/Reducers';
import "../styles/landing_page.scss"
import ReactGA from 'react-ga';

class Home extends React.Component {
  componentDidMount() {
    initTracking();
    ReactGA.pageview('/');
  }

  render() {
    const alternateIMDBIDS = [
      'tt0417433', // Annapolis
      'tt0120591', // Armageddon
      'tt0338466', // Stuck on You
      'tt0478087', // 21
    ]
    // let landingPage = withTracker(LandingPage);
    return (
      <Nav>
        <LandingPage
          mainIMDBID="tt0448011" // Knowing
          alternateIMDBIDs={alternateIMDBIDS}
        />
      </Nav>
    )
  }
}

const mapDispatchToProps = {
  initTracking
};

export default connect(null, mapDispatchToProps)(Home);
