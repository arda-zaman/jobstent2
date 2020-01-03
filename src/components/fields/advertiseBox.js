import React from 'react';
import PropTypes from 'prop-types';


class AdvertiseBox extends React.Component {
  render() {
    const { width, height } = this.props;
    return (
      <div
        className="advertiseBox"
        style={{ width, height, backgroundColor: '#aaa', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}
      >
        {width} x {height}
      </div>
    )
  }
}

AdvertiseBox.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired
};

AdvertiseBox.defaultProps = {}

export default AdvertiseBox;