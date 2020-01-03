import React, { Fragment } from 'react';
import { Select, ColorPicker } from '../components/fields';
import Icon from '../components/fields/icon';
import { IconLibrary } from '../components/fields';

export const RenderFieldGroup = ({ panelType, title, icon, subFieldGroup, fields = '' }) => {
  const fieldsArr = fields.split(',');

  return (
    <div className="panel-item" panel-type={panelType}>
      <div className="panel-item-title">
        {icon && (
          <Icon icon={icon} size={icon.size} />
        )}
        <strong>{title}</strong>
      </div>
      <div className="panel-item-content">
        {subFieldGroup && Array.isArray(subFieldGroup) ? (
          subFieldGroup.map(subfield => {
            return addSubFieldGroup({ subfield })
          })
        ) : (
            fields && (
              fieldsArr.map(field => {
                return renderField({ element: field })
              })
            )
          )}
      </div>
    </div>
  )
};

export const addSubFieldGroup = ({ subfield }) => {
  const { icon, title, fields } = subfield;
  const fieldsArr = fields ? fields : false;

  return (
    <div className="subfield-group" subfield-type={subfield.type}>
      <div className="subfield-group-title">
        <strong>{title}</strong>
        {icon && (
          <Icon icon={icon} size={icon.size} />
        )}
      </div>
      <div className="subfield-group-content">
        {Array.isArray(fieldsArr) && fieldsArr.length > 0 && fieldsArr.map(field => (
          renderField({ element: field })
        ))}
      </div>
    </div>
  )
};

export const renderField = ({
  element
}) => {
  let field = null;

  switch (element.type || element) {
    case 'fontFamily':
      field = (
        <div className="panel-item field" type="dropdown" name="fontFamily">
          <Select
            label={element.label || "Font Family"}
            additionalClass="inline"
            value={{ value: 'roboto', label: 'Roboto' }}
            options={[
              { value: "roboto", label: "Roboto" },
              { value: "mono-space", label: "Mono-Space" },
              { value: "Helvetica", label: "Helvetica" },
            ]}
          />
        </div>
      );

      return field;
    case 'fontSize':
      field = (
        <div className="panel-item field" type="dropdown" name="fontSize">
          <Select
            label={element.label || "Font Size"}
            additionalClass="inline"
            options={[
              { value: "8", label: "8" },
              { value: "10", label: "10" },
              { value: "12", label: "12" },
              { value: "14", label: "14" },
              { value: "16", label: "16" },
              { value: "18", label: "18" },
              { value: "20", label: "20" },
              { value: "22", label: "22" },
              { value: "24", label: "24" },
              { value: "26", label: "26" },
              { value: "28", label: "28" },
              { value: "30", label: "30" },
              { value: "32", label: "32" },
              { value: "34", label: "34" },
              { value: "36", label: "36" },
              { value: "38", label: "38" },
              { value: "40", label: "40" }
            ]}
          />
        </div>
      )
      return field;
    case 'colorPicker':
      field = (
        <div className="panel-item field" type="colorpicker" name="colorPicker">
          <ColorPicker
            type="box"
            additionalClass={element.additionalClass}
            label={element.label}
            position={element.position}
          />
        </div>
      )
      return field;
    case 'icon-library':
      field = (
        <div className="panel-item field" type="icon-library" name="iconLibrary">
          <IconLibrary />
        </div>
      );
      return field;
    case 'dateField':
      field = (
        <div className="panel-item field" type="dropdown" name="date-field">
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
      );
      return field;
    case 'bold/italic/strikethrough':
      field = (
        <div className="panel-item field" type="select" name="bold/italic/strikethrough">
          <span>{element.label}</span>
          <div className="boxes">
            <div className="box active">B</div>
            <div className="box">I</div>
            <div className="box">S</div>
          </div>
        </div>
      );
      return field;
    case 'alignment_horizontal':
      field = (
        <div className="panel-item field" type="select" name="alignment_horizontal">
          <span>{element.label}</span>
          <div className="boxes">
            <div className="box active"><i className="material-icons">format_align_left</i></div>
            <div className="box"><i className="material-icons">format_align_right</i></div>
            <div className="box"><i className="material-icons">format_align_center</i></div>
            <div className="box"><i className="material-icons">format_align_justify</i></div>
          </div>
        </div>
      );
      return field;
    case 'alignment_vertical':
      field = (
        <div className="panel-item field" type="select" name="alignment_vertical">
          <span>{element.label}</span>
          <div className="boxes">
            <div className="box active"><i className="material-icons">vertical_align_center</i></div>
            <div className="box"><i className="material-icons">vertical_align_top</i></div>
            <div className="box"><i className="material-icons">vertical_align_bottom</i></div>
          </div>
        </div>
      );
      return field;
    default:
      return <div className="">not found</div>;
  }
};

