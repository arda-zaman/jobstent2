import React from 'react';
import { SketchPicker } from 'react-color';
import PropTypes from 'prop-types';

const cover = {
  position: 'fixed',
  top: '0px',
  right: '0px',
  bottom: '0px',
  left: '0px',
}

class ColorPicker extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      displayColorPicker: false,
      color: '#ddd'
    }
  }

  handleClick = () => {
    const { onChange } = this.props;
    const { color, displayColorPicker } = this.state;

    this.setState({ displayColorPicker: !displayColorPicker });

    if (onChange && displayColorPicker) {
      onChange({ value: color.hex });
    }
  };

  handleClose = () => {
    const { onChange, defaultValue } = this.props;
    const { color } = this.state;

    this.setState({ displayColorPicker: false })

    if (onChange) {
      onChange({ value: color.hex || defaultValue });
    }
  };

  onChangeComplete = (color) => {
    this.setState({
      color: color
    });
  };

  render() {
    const { type, boxHeight, position, defaultValue, label, additionalClass } = this.props;
    const { displayColorPicker, color } = this.state;

    return (
      <div className={`color-picker ${additionalClass}`}>
        <span className="label">{label}</span>
        {type === 'box' && (
          <div className="box">
            <span
              className="box-area"
              onClick={this.handleClick}
              style={{ backgroundColor: color.hex || defaultValue, height: boxHeight, width: boxHeight }}
            />
            {displayColorPicker && (
              <div className="color-picker-box" data-position={position} style={{ zIndex: 2 }}>
                <div style={cover} onClick={this.handleClose} />
                <SketchPicker
                  color={color && color.hex}
                  onChangeComplete={this.onChangeComplete}
                />
              </div>
            )}
          </div>
        )}
      </ div>
    )
  }
}

ColorPicker.propTypes = {
  type: PropTypes.string,
  boxHeight: PropTypes.number,
  position: PropTypes.string,
  defaultValue: PropTypes.string,
  label: PropTypes.string,
  additionalClass: PropTypes.string
};

ColorPicker.defaultProps = {
  type: 'box',
  boxHeight: 20,
  position: 'left',
  defaultValue: '',
  label: '',
  additionalClass: PropTypes.string
};

export default ColorPicker;

