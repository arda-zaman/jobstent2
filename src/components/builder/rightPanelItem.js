
import React from 'react';
import { Select, ColorPicker, Button } from '../fields';
import { field_properties } from '../../constants/Fields';
import { IconLibrary } from '../fields';
import { clearPxOrPercent } from '../../helpers';

class RightPanelItem extends React.PureComponent {

    constructor(props) {
        super(props);
        const style = props.activeField && props.activeField.style;

        this.state = {
            bold: style && ['600', '700', 'bold', 'bolder'].indexOf(style['font-weight']) > -1 ? 'bold' : 'normal',
            italic: style && style['font-style'] == 'italic' ? 'italic' : 'normal',
            textDecoration: style && style['text-decoration'] || 'none',
            textAlign: style && style['text-align'],
            width: style && style['width'] ? clearPxOrPercent(style['width'], true) : undefined,
            height: style && style['height'] ? clearPxOrPercent(style['height'], true) : undefined,
        };
    }

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

        switch (property.styleKey) {
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
                        styleKey: property.styleKey
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
                boxes = (
                    <div className="boxes">
                        {this.renderBox({ type: 'bold', content: 'B', styleKey: 'fontWeight', styleValueTrue: 'bold', styleValueFalse: 'normal' })}
                        {this.renderBox({ type: 'italic', content: 'I', styleKey: 'fontStyle', styleValueTrue: 'italic', styleValueFalse: 'normal' })}
                        {this.renderBox({ type: 'textDecoration', content: 'S', styleKey: 'textDecoration', styleValueTrue: 'line-through', styleValueFalse: 'none', additionalClass: 'line-through' })}
                        {this.renderBox({ type: 'textDecoration', content: 'U', styleKey: 'textDecoration', styleValueTrue: 'underline', styleValueFalse: 'none', additionalClass: 'underline' })}
                    </div>
                );
                break;
            case 'alignment':
                boxes = (
                    <div className="boxes">
                        {this.renderBox({ type: 'textAlign', content: { value: 'format_align_left' }, styleKey: 'textAlign', styleValueTrue: 'left', styleValueFalse: 'left' })}
                        {this.renderBox({ type: 'textAlign', content: { value: 'format_align_right' }, styleKey: 'textAlign', styleValueTrue: 'right', styleValueFalse: 'left' })}
                        {this.renderBox({ type: 'textAlign', content: { value: 'format_align_center' }, styleKey: 'textAlign', styleValueTrue: 'center', styleValueFalse: 'left' })}
                        {this.renderBox({ type: 'textAlign', content: { value: 'format_align_justify' }, styleKey: 'textAlign', styleValueTrue: 'justify', styleValueFalse: 'left' })}
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

    renderBox = ({ type, content, styleKey, styleValueTrue, styleValueFalse, additionalClass }) => {
        return (
            <div
                type={type}
                className={`box ${additionalClass} ${this.state[type] === styleValueTrue ? 'active' : ''}`}
                onClick={this.boxesClickHandler.bind(this,
                    {
                        boxFieldName: type,
                        styleKey,
                        styleValueTrue,
                        styleValueFalse
                    },
                )}
            >
                {typeof content === 'string' && content}
                {typeof content !== 'string' && <i className="material-icons">{content.value}</i>}
            </div>
        )
    };

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
        const { width, height } = this.state;

        return (
            <div className="panel-item-content">
                <span className="label">Size</span>
                <div className="inputs">
                    <div className="width">
                        <input
                            type="number"
                            placeholder=" "
                            defaultValue={width}
                            onChange={this.sizeFieldChangeHandler.bind(this, { key: 'width' })}
                        />
                        <span>Width</span>
                    </div>
                    <i className="fas fa-link link"></i>
                    <div className="height">
                        <input
                            type="number"
                            placeholder=" "
                            defaultValue={height}
                            onChange={this.sizeFieldChangeHandler.bind(this, { key: 'height' })}
                        />
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

    boxesClickHandler = ({ boxFieldName, styleKey, styleValueTrue, styleValueFalse }) => {
        this.setState(prevState => ({
            [boxFieldName]: (prevState[boxFieldName] === styleValueTrue) ? styleValueFalse : styleValueTrue
        }), () => {
            this.fieldPropertyChange({ boxFieldName, styleKey });
        });
    };

    sizeFieldChangeHandler = ({ key }, event) => {
        this.setState({
            [key]: event.target.value
        }, () => {
            this.fieldPropertyChange({ styleKey: key });
        });
    };

    fieldPropertyChange = (additional, values, context) => {
        const { name, activeField, onPropertyChange } = this.props;
        let style = "";

        switch (name) {
            case 'fontFamily':
                style = {
                    'fontFamily': values.value
                }
                break;
            case 'fontSize':
                style = {
                    'fontSize': `${values.value}px`
                };
                break;
            case 'colorPicker':
                style = {
                    [additional.styleKey]: values.value
                };
                break;
            case 'bold/italic/strikethrough':
            case 'alignment':
                const styleValue = this.state[additional.boxFieldName];

                style = {
                    [additional.styleKey]: styleValue
                };
                break;
            case 'size':
                style = {
                    [additional.styleKey]: `${this.state[additional.styleKey]}px`
                }
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