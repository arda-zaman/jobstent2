import React from "react";
import PropTypes from 'prop-types';

class Icon extends React.Component {
  constructor(props) {
    super(props);
  }

  iconClick = (e) => {
    const { onClick } = this.props;

    if (onClick) {
      onClick({ type: 'icon', element: e.target, original: e });
    }
  };

  render() {
    const { icon, clickable, onClick, style, fid } = this.props;

    return (
      <div
        className="icon resume-icon"
        style={style}
      >
        <i
          className={icon.type === "material-icons" ? "material-icons" : icon.text}
          onClick={this.iconClick}
          data-clickable={clickable}
          id={fid}
          field-type="icon"
        >
          {icon.type === 'material-icons' && icon.text}
        </i>
      </div>
    );
  }
}

Icon.propTypes = {
  icon: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  clickable: PropTypes.bool,
  style: PropTypes.object,
  fid: PropTypes.number
}

Icon.defaultProps = {
  onClick: () => console.log("Icon Clicked"),
  clickable: true,
  style: {},
  fid: -1
}

export default Icon;
