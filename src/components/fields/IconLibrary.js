import React from "react";
import PropTypes from 'prop-types';
import iconsConstant from "../../constants/iconConsts";

class IconLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: "",
      icons: iconsConstant,
      isModalOpened: false
    };
  }

  getIcons = () => {
    const dom = [];
    const { icons } = this.state;

    if (icons) {
      icons.map((icon, key) => {
        dom.push(
          <li onClick={this.iconClicked.bind(this, icon)} key={key}>
            {icon.type == "font-awesome" && <i className={`${icon.text}`} />}

            {icon.type == "material-icons" && (
              <i className="material-icons">{icon.text}</i>
            )}
          </li>
        );
      });
    }

    return dom;
  };

  iconClicked = (icon) => {

  };

  render() {
    const { icon, isModalOpened } = this.state;
    const { activeIcon } = this.props;

    return (
      <div className="icons-library">
        <div className="modal">
          <div className="modal-content">
            <div className="modal-title">
              <div className="input">
                <input type="search" placeholder="Search Icon" />
                <i className="material-icons">search</i>
              </div>
            </div>
            {/* TODO: Icons  */}
            <ul>{this.getIcons()}</ul>
          </div>
        </div>

      </div>
    );
  }
}

IconLibrary.propTypes = {
  activeIcon: PropTypes.object.isRequired
}

export default IconLibrary;
