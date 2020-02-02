import React from "react";
import PropTypes from 'prop-types';
import iconsConstant from "../../constants/iconConsts";

class IconLists extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      icon: "",
      icons: iconsConstant,
      isModalOpened: false,
      filterKey: '',
    };
  }

  getIcons = () => {
    const dom = [];
    const { icons, filterKey } = this.state;

    if (icons) {
      icons.map((icon, key) => {
        if (icon.text.indexOf(filterKey) === -1) return;

        dom.push(
          <li onClick={this.iconClicked.bind(this, icon)} key={key}>
            {icon.type == "font-awesome" && <i className={`${icon.text}`} search-width={icon.text} />}

            {icon.type == "material-icons" && (
              <i className="material-icons" seach-with={icon.text}>{icon.text}</i>
            )}
          </li>
        );
      });
    }

    return dom;
  };

  iconClicked = (icon) => {
    const { onSelect, params } = this.props;
    onSelect({ value: icon });
  }

  searchIcons = (event) => {
    this.setState({
      filterKey: event.target.value
    });
  };

  render() {
    const { icon, isModalOpened, filterKey, filteredIcons } = this.state;
    const { activeIcon } = this.props;

    return (
      <div className="icons-library">
        <div className="modal">
          <div className="modal-content">
            <div className="modal-title">
              <div className="input">
                <input type="search" placeholder="Search Icon" onChange={this.searchIcons} />
                <i className="material-icons">search</i>
              </div>
            </div>
            <ul>{this.getIcons()}</ul>
          </div>
        </div>

      </div>
    );
  }
}

IconLists.propTypes = {
  activeIcon: PropTypes.object.isRequired
}

export default IconLists;
