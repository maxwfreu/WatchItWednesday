import React from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

export default class TrackingButton extends React.Component {
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
    this.props.onClick();
  }

  render() {
    return (
      <button className={this.props.classes} onClick={this.onClick}>
        {this.props.text}
      </button>
    )
  }
}

TrackingButton.propTypes = {
  category: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  classes: PropTypes.string,
}

TrackingButton.defaultProps = {
  classes: '',
  onClick: () => (true),
}
