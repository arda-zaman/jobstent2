
import React from 'react';
import { Select, ColorPicker, Button } from '../fields';
import { field_properties } from '../../constants/Fields';
import { IconLibrary } from '../fields';
import { clearPxOrPercent } from '../../helpers';

class RightPanelItem extends React.PureComponent {

    renderFontSizeField = () => {
        const { name, property, activeField } = this.props;
        const value = activeField.style['font-size'].replace('px', '');

        return (
            <div className="panel-item-content">
                <Select
                    label={property.label}
                    additionalClass={property.additionalClass}
                    value={value}
                    options={property.options}
                    onChange={this.fieldPropertyChange.bind(this, {})}
                />
            </div>
        );
    };

    renderFontFamilyField = () => {
        const { name, property, activeField } = this.props;
        const value = activeField.style['font-family'];

        return (
            <div className="panel-item-content">
                <Select
                    label={property.label}
                    additionalClass={property.additionalClass}
                    value={value}
                    options={property.options}
                    onChange={this.fieldPropertyChange.bind(this, {})}
                />
            </div>
        );
    };

    renderColorField = () => {
        const { name, property, activeField } = this.props;
        let value = undefined;

        switch (property.styleValue) {
            case 'background-color':
                value = activeField.style['background-color'];
                break;
            default:
                value = activeField.style['color'];
                break;
        }

        return (
            <div className="panel-item-content">
                <ColorPicker
                    type={property.box}
                    label={property.label}
                    additionalClass={property.additionalClass}
                    position={property.position}
                    defaultValue={value}
                    onChange={this.fieldPropertyChange.bind(this, {
                        styleValue: property.styleValue
                    })}
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
        const { name, property, activeField } = this.props;
        let boxes = null;

        switch (name) {
            case 'bold/italic/strikethrough':
                const isBoxes = ['600', '700', 'bold', 'bolder'].indexOf(activeField.style['font-weight']) > -1;
                const isItalic = activeField.style['font-style'] == 'italic';
                const isStrikeThrough = activeField.style['text-decoration'] == 'line-through';

                boxes = (
                    <div className="boxes">
                        <div type="bold" className={`box ${isBoxes ? 'active' : ''}`}>B</div>
                        <div type="italic" className={`box ${isItalic ? 'active' : ''}`}>I</div>
                        <div type="strikethrough" className={`box ${isStrikeThrough ? 'active' : ''}`}>S</div>
                    </div>
                );
                break;
            case 'alignment':
                boxes = (
                    <div className="boxes">
                        <div className={`box ${activeField.style['text-align'] == 'left' ? 'active' : ''}`}><i className="material-icons">format_align_left</i></div>
                        <div className={`box ${activeField.style['text-align'] == 'right' ? 'active' : ''}`}><i className="material-icons">format_align_right</i></div>
                        <div className={`box ${activeField.style['text-align'] == 'center' ? 'active' : ''}`}><i className="material-icons">format_align_center</i></div>
                        <div className={`box ${activeField.style['text-align'] == 'justify' ? 'active' : ''}`}><i className="material-icons">format_align_justify</i></div>
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

    renderUploadField = () => {
        return (
            <div className="panel-item-content">
                <span className="label">Upload Image</span>
                <div className="upload-button">
                    <input type="file" accept="image/*" />
                    <span>Upload</span>
                </div>
            </div>
        )
    };

    renderSizeField = () => {
        const { name, property, activeField } = this.props;
        const width = clearPxOrPercent(activeField.style.width);
        const height = clearPxOrPercent(activeField.style.height);

        return (
            <div className="panel-item-content">
                <span className="label">Size</span>
                <div className="inputs">
                    <div className="width">
                        <input type="number" placeholder=" " defaultValue={width.number} />
                        <span>Width</span>
                    </div>
                    <i className="fas fa-link link"></i>
                    <div className="height">
                        <input type="number" placeholder=" " defaultValue={height.number} />
                        <span>Height</span>
                    </div>
                </div>
            </div>
        )
    };


    render() {
        const { name, property, activeField } = this.props;
        let field = null;

        switch (name) {
            case 'fontFamily':
                field = this.renderFontFamilyField();
                break;
            case 'fontSize':
                field = this.renderFontSizeField();
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
            case 'uploadFile':
                field = this.renderUploadField();
                break;
            case 'size':
                field = this.renderSizeField();
                break;
        }

        return (
            <div className="panel-item" name={name}>
                {field}
            </div>
        )
    }

    fieldPropertyChange = (additional, values, context) => {
        const { name, activeField, onPropertyChange } = this.props;
        let style = "";

        switch (name) {
            case 'fontFamily':
                style = {
                    'font-family': values.value
                }
                break;
            case 'fontSize':
                style = {
                    'font-size': `${values.value}px`
                };
                break;
            case 'colorPicker':
                style = {
                    [additional.styleValue]: values.value
                };
                break;
            default:
                style = "";
                break;
        }

        if (style) {
            onPropertyChange({
                fid: activeField.fid,
                pageID: activeField.pageID,
                fieldStyle: style,
            });
        }
    }
};

export default RightPanelItem;