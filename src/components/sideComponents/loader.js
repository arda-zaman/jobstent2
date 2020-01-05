
import React from 'react';
import PropTypes from 'prop-types';

class Loader extends React.PureComponent {

  materialLineLoading = () => {
    const { color } = this.props;

    return (
      <div className="material_line" color={color}>
        <div className="line"></div>
        <div className="subline inc"></div>
        <div className="subline dec"></div>
      </div>
    );
  };

  render() {
    const { type, active } = this.props;
    let line = null;

    switch (type) {
      case 'material_line':
        line = this.materialLineLoading();
        break;
      default:
        break;
    }

    const container = (
      <div
        className="loading"
        type={type}
        active={active}
      >
        {line}
      </div>
    );

    return container;
  }
};

Loader.propTypes = {
  type: PropTypes.string.isRequired,
  active: PropTypes.bool,
  color: PropTypes.string
};

Loader.defaultProps = {
  type: '',
  active: false,
  color: 'red'
};

export default Loader;