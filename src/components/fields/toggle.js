import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';


class Toggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectValue: null
    }
  }
  render() {
    const { additionalClass, offIcon, onIcon } = this.props;

    return (
      <button type="button" className={`jToggle ${additionalClass}`}>
        <span className="drag">
          {offIcon && (
            <Icon icon={offIcon} />
          )}

          {onIcon && (
            <Icon icon={onIcon} />
          )}
        </span>
      </button>
    )
  }
};

Toggle.propTypes = {
  additionalClass: PropTypes.string
};

Toggle.defaultProps = {
  additionalClass: ''
}

export default Toggle;