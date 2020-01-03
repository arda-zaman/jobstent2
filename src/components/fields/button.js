import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

// const LoadingSVG = require("./../../assets/img/loading.svg");
class Button extends React.Component {
  render() {
    const { iconData, loading, text, iconPosition, classNames, click, dataType, type, size, shadow } = this.props;
    return (
      <div className="jButton"
        data-type={dataType}
        data-icon={JSON.stringify(iconData) ? true : false}
        data-size={size}
        data-shadow={shadow}
      >
        <button
          type={type}
          className={`${classNames} ${iconPosition}`}
          onClick={click}
        >
          {iconData && !loading ? (
            iconPosition === "left" ? (
              <React.Fragment>
                <Icon icon={iconData} />
                <span>{text}</span>
              </React.Fragment>
            ) : (
                <React.Fragment>
                  <span>{text}</span>
                  <Icon icon={iconData} />
                </React.Fragment>
              )
          ) : (
              text
            )}

          {/* {loading && (
            // <img src={LoadingSVG} />
          )} */}
        </button>
      </div>
    );
  }
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  classNames: PropTypes.string,
  dataType: PropTypes.string,
  size: PropTypes.string,
  click: PropTypes.func,
  text: PropTypes.string,
  icon: PropTypes.object,
  loading: PropTypes.bool,
  iconPosition: PropTypes.string,
  shadow: PropTypes.bool,
};

Button.defaultProps = {
  classNames: "",
  dataType: "",
  text: "",
  icon: {},
  loading: false,
  iconPosition: 'left',
  shadow: false,
  click: () => console.log("Clicked")
};

export default Button;
