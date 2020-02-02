import React from 'react';
import { Textfield, Textarea } from '../fields';
import { clearFieldStyles } from '../../helpers';

class ResumeItem extends React.PureComponent {

  createTextField = () => {
    const { type, value, fieldStyle, activeField, fid } = this.props;

    return (
      <div
        className="resume-field"
        type={type}
      >
        <div
          className="resume-field-content"
          style={{ ...clearFieldStyles(fieldStyle) }}
        >
          <Textarea
            defaultValue={value.textValue}
            editable={(activeField && activeField.fid == fid) ? true : false}
            onBlur={this.fieldOnBlur}
          />
        </div>
      </div>
    )
  }

  createIconField = () => {
    const { type, value, fieldStyle } = this.props;
    let icon = null;

    switch (value.iconType) {
      case 'font-awesome':
        icon = <i className={value.iconValue}></i>
        break;
      case 'material-icons':
        icon = <i className="material-icons">{value.iconValue}</i>
        break;
    }

    return (
      <div
        className="resume-field"
        type={type}
      >
        <div
          className="resume-field-content"
          style={{ ...clearFieldStyles(fieldStyle) }}
        >
          {icon}
        </div>
      </div>
    )
  };

  createImageField = () => {
    const { type, value, fieldStyle } = this.props;

    return (
      <div
        className="resume-field"
        type={type}
      >
        <div
          className="resume-field-content"
          style={{
            ...clearFieldStyles(fieldStyle),
            backgroundImage: `url(${value && value.src})`,
          }}
        >
          {(!value || (value && !value.src)) && (
            <div className="empty-image-field">
              <div>
                <i className="fas fa-upload"></i>
                <span>Upload Image</span>
                <input type="file" accept="image/*" />
              </div>
            </div>
          )}
        </div>
      </div>
    )
  };

  createDateField = () => {
    const { type, value, fieldStyle, activeField, fid } = this.props;

    return (
      <div
        className="resume-field"
        type={type}
      >
        <div
          className="resume-field-content"
          style={{ ...clearFieldStyles(fieldStyle) }}
        >
          <Textarea
            defaultValue={value.textValue}
            editable={(activeField && activeField.fid == fid) ? true : false}
            onBlur={this.fieldOnBlur}
          />
        </div>
      </div>
    )
  }

  createAddressField = () => {
    const { type, value, fieldStyle, activeField, fid } = this.props;

    return (
      <div
        className="resume-field"
        type={type}
      >
        <div
          className="resume-field-content"
          style={{ ...clearFieldStyles(fieldStyle) }}
        >
          <Textarea
            defaultValue={value.textValue}
            editable={(activeField && activeField.fid == fid) ? true : false}
            onBlur={this.fieldOnBlur}
          />
        </div>
      </div>
    )
  }

  createPhoneField = () => {
    const { type, value, fieldStyle, activeField, fid } = this.props;

    return (
      <div
        className="resume-field"
        type={type}
      >
        <div
          className="resume-field-content"
          style={{ ...clearFieldStyles(fieldStyle) }}
        >
          <Textarea
            defaultValue={value.textValue}
            editable={(activeField && activeField.fid == fid) ? true : false}
            onBlur={this.fieldOnBlur}
          />
        </div>
      </div>
    )
  }

  createShapeField = () => {

  }

  createLayoutField = () => {
    const { type, value, fieldStyle } = this.props;

    return (
      <div
        className="resume-field"
        type={type}
      >
        <div
          className="resume-field-content"
          style={{ ...clearFieldStyles(fieldStyle) }}
        ></div>
      </div>
    )
  }

  createContainer = (field) => {
    const { onDragStart, onDragOver, draggable, style, activeField, fid } = this.props;
    const isFieldActive = activeField && activeField.fid == fid;

    return (
      <li
        className="field-line"
        id={`field_${fid}`}
        fid={`field_${fid}`}
        style={{ ...style }}
        type={this.props.type}
        onClick={this.fieldLineClick}
        data-field-active={isFieldActive}
      >
        <div className="field-line-container">
          <div className="lines">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div
            className="drag-area"
            draggable={(draggable && !isFieldActive) ? true : false}
            onDragStart={onDragStart}
            onDragOver={onDragOver}
          >
            <div className="field-content">
              {field}
            </div>
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
      case 'jbt_phone':
        field = this.createPhoneField();
        break;
      case 'jbt_date':
        field = this.createDateField();
        break;
      case 'jbt_address':
        field = this.createAddressField();
        break;
      case 'jbt_circle':
        field = this.createCircleField();
        break;
      case 'jbt_line':
        field = this.createLineField();
        break;
      case 'jbt_layout':
        field = this.createLayoutField();
        break;
    }

    return this.createContainer(field);
  }

  //  Field Events

  fieldOnBlur = ({ val, event }) => {
    const { onBlur, activeField, fid } = this.props;

    if (activeField.value.textValue !== val) {
      onBlur({ val });
    }
  };
};

export default ResumeItem;