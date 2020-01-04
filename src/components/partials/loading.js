
import React from 'react';
import PropTypes from 'prop-types';

class Loading extends React.PureComponent {

  materialLineLoading = () => {
    const { color } = this.props;

    return (
      <div class="material_line" color={color}>
        <div class="line"></div>
        <div class="subline inc"></div>
        <div class="subline dec"></div>
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

Loading.propTypes = {
  type: PropTypes.string.isRequired,
  active: PropTypes.bool,
  color: PropTypes.string
};

Loading.defaultProps = {
  type: '',
  active: false,
  color: 'red'
};

export default Loading;