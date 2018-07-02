import React from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

export default class TrackingLink extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    ReactGA.event({
      category: this.props.category,
      action: this.props.action,
      label: this.props.label,
    });
  }

  render() {
    return (
      <a className={this.props.classes} onClick={this.onClick} href={this.props.href}>
        {this.props.text}
      </a>
    )
  }
}

TrackingLink.propTypes = {
  category: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  classes: PropTypes.string,
}

TrackingLink.defaultProps = {
  classes: '',
}
