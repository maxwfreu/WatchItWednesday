import React from 'react';
import PropTypes from 'prop-types';
import "../../styles/main.scss"

export default class Nav extends React.Component {
  render() {
    const mainClass = this.props.isMain ? 'main-image-art' : 'alternate-image-art';
    return (
      <React.Fragment>
        <div className="tab-bar">
          <a href="#" className="wiw-logo"><img src="../../static/images/logo-wiw-blue-2x.png"/></a>
          <p>Wednesday, 7/4/2018</p>
          <a href="#"> Home </a>
          <a href="#about"> About </a>
        </div>
        {this.props.children}
        <footer>
          <p>Built by <a href="https://maxfreundlich.com">Max Freundlich</a></p>
          <p>Made with<span>&#9829;</span>in San Francisco</p>
          <p>Designed by <a href="https://www.ronniesiu.com">Ronnie Siu</a></p>
        </footer>
      </React.Fragment>
    )
  }
}

// Main.propTypes = {
//   children: PropTypes.object.is
// }