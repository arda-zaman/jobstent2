
import React from 'react';
import { Select, ColorPicker } from '../fields';
import { field_properties } from '../../constants/Fields';
import { IconLibrary } from '../fields';

class RightPanelItem extends React.PureComponent {

  renderDropdownField = () => {
    const { name, property } = this.props;

    return (
      <div className="panel-item-content">
        <Select
          label={property.label}
          additionalClass={property.additionalClass}
          // value={}
          options={property.options}
        />
      </div>
    );
  };

  renderColorField = () => {
    const { property } = this.props;

    return (
      <div className="panel-item-content">
        <ColorPicker
          type={property.box}
          label={property.label}
          additionalClass={property.additionalClass}
          position={property.position}
        />
      </div>
    );
  }

  renderDateFormat = () => {
    return (
      <div className="field">
        <Select
          label="Date Format"
          additionalClass="inline"
          options={[
            { value: "YYYY-MM-DD", label: "YYYY-MM-DD" },
            { value: "YYYY-MM", label: "YYYY-MM" },
            { value: "DD-MM-YYYY", label: "DD-MM-YYYY" },
          ]}
        />
      </div>
    )
  }

  renderBoxesField = () => {
    const { name, property } = this.props;
    let boxes = null;

    switch (name) {
      case 'bold/italic/strikethrough':
        boxes = (
          <div className="boxes">
            <div className="box active" type="bold">B</div>
            <div className="box" type="italic">I</div>
            <div className="box" type="strikethrough">S</div>
          </div>
        );
        break;
      case 'alignment':
        boxes = (
          <div className="boxes">
            <div className="box active"><i className="material-icons">format_align_left</i></div>
            <div className="box"><i className="material-icons">format_align_right</i></div>
            <div className="box"><i className="material-icons">format_align_center</i></div>
            <div className="box"><i className="material-icons">format_align_justify</i></div>
          </div>
        );
        break;
    }

    return (
      <div className="panel-item-content">
        <span className="label">{property.label}</span>
        {boxes}
      </div>
    )
  }

  renderIconLibrary = () => {
    return (
      <IconLibrary />
    )
  };

  getPanelItem = () => {

  };

  render() {
    const { name, property } = this.props;
    let field = null;

    switch (name) {
      case 'fontFamily':
      case 'fontSize':
        field = this.renderDropdownField();
        break;
      case 'colorPicker':
        field = this.renderColorField();
        break;
      case 'dateFormat':
        field = this.renderDateFormat();
        break;
      case 'bold/italic/strikethrough':
        field = this.renderBoxesField()
        break;
      case 'alignment':
        field = this.renderBoxesField();
        break;
      case 'iconLibrary':
        field = this.renderIconLibrary();
        break;
    }

    return (
      <div className="panel-item" name={name}>
        {field}
      </div>
    )
  }
};

export default RightPanelItem;