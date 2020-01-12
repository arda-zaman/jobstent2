import React from 'react';
import { Textfield } from '../fields';

class ResumeItem extends React.PureComponent {

  createTextField = () => {
    const { type, value, style } = this.props;

    return (
      <div
        className="resume-field"
        type={type}
      >
        <Textfield defaultValue={value} />
      </div>
    )
  }

  createIconField = () => {
    const { type, value, style } = this.props;
    let icon = null;

    switch (value.iconType) {
      case 'font-awesome':
        icon = <i className={value.iconValue}></i>
        break;
      case 'material-icons':
        icon = <i className="meterial-icons">{value.iconValue}</i>
        break;
    }

    return (
      <div
        className="resume-field"
      >
        {icon}
      </div>
    )
  };

  createImageField = () => {
    const { type, value, style } = this.props;

    return (
      <div
        className="resume-field"
        type={type}
      >
        {(value && value.src) ? (
          <img src={value.src} width={value.width} height={value.height} />
        ) : (
            <div className="empty-image-field">
              <div>
                <i className="fas fa-upload"></i>
                <span>Upload Image</span>
              </div>
            </div>
          )}
      </div>
    )
  };

  createDateField = () => {
    const { type, value, style } = this.props;

    return (
      <div
        className="resume-field"
        type={type}
      >
        <input
          type="text"
          dateFormat={value.dateFormat}
          value={value.textValue}
        />
      </div>
    )
  }

  createAddressField = () => {
    const { type, value, style } = this.props;

    return (
      <div
        className="resume-field"
        type={type}
      >
        <Textfield
          defaultValue={value.textValue}
          style={{
            ...style,
            width: value.width,
            height: value.height
          }}
        />
      </div>
    )
  }

  createCircleField = () => {
  }

  createLineField = () => {

  };

  createContainer = (field) => {
    const { onDragStart, onDragOver, draggable, style, activeField, fid } = this.props;

    return (
      <li
        className="field-line"
        id={`field_${fid}`}
        fid={`field_${fid}`}
        style={{ ...style }}
        type={this.props.type}
        draggable={draggable}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onClick={this.fieldLineClick}
        data-field-active={activeField && activeField.fid == fid}
      >
        <div className="field-line-container">
          <div className="lines">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="field-content">
            {field}
          </div>
        </div>
      </li>
    )
  }

  fieldLineClick = (e) => {
    const { actions: { makeFieldActive } } = this.props;
    const fieldLine = e.target.closest('.field-line');
    const fieldID = (fieldLine && fieldLine.id) ? fieldLine.id.replace('field_', '') : false;

    if (fieldID) {
      makeFieldActive(fieldID)
    }
  };

  render() {
    const { type } = this.props;
    let field = null;

    switch (type) {
      case 'jbt_text':
        field = this.createTextField()
        break;
      case 'jbt_icon':
        field = this.createIconField();
        break;
      case 'jbt_image':
        field = this.createImageField();
        break;
      case 'jbt_date':
        field = this.createDateField()
        break;
      case 'jbt_address':
        field = this.createAddressField()
        break;
      case 'jbt_circle':
        field = this.createCircleField()
        break;
      case 'jbt_line':
        field = this.createLineField()
        break;
    }

    return this.createContainer(field);
  }
};

export default ResumeItem;