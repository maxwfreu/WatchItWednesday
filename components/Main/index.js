import React from 'react';
import PropTypes from 'prop-types';
import "../../styles/main.scss"

export default class Main extends React.Component {
  render() {
    const mainClass = this.props.isMain ? 'main-image-art' : 'alternate-image-art';
    return (
      <React.Fragment>
        <div className="tab-bar">
          <a href="#"> Home </a>
          <a href="#about"> About </a>
          <p>Movies perfect for a Wednesday</p>
        </div>
        {this.props.children}
      </React.Fragment>
    )
  }
}

// Main.propTypes = {
//   children: PropTypes.object.is
// }