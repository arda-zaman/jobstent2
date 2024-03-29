
import React from 'react';
import { Select, ColorPicker, Button } from '../fields';
import { field_properties } from '../../constants/Fields';
import { IconLists } from '../fields';
import { clearPxOrPercent, renderSwipedInput } from '../../helpers';

class RightPanelItem extends React.PureComponent {

    constructor(props) {
        super(props);
        const style = props.activeField && props.activeField.fieldStyle;

        const borderWidth = style && (style['border-width'] || style['border-left-width'] || style['border-right-width'] || style['border-top-width'] || style['border-bottom-width']);

        this.state = {
            fontSize: style && style['font-size'] ? clearPxOrPercent(style['font-size'], true) : undefined,
            fontFamily: style && (style['font-family'] || undefined),
            backgroundColor: style && (style['backgroundColor'] || undefined),
            color: style && (style['color'] || undefined),
            bold: style && ['600', '700', 'bold', 'bolder'].indexOf(style['font-weight']) > -1 ? 'bold' : 'normal',
            italic: style && style['font-style'] == 'italic' ? 'italic' : 'normal',
            textDecoration: style && (style['text-decoration'] || 'none'),
            textAlign: style && style['text-align'],
            width: style && style['width'] ? clearPxOrPercent(style['width'], true) : undefined,
            height: style && style['height'] ? clearPxOrPercent(style['height'], true) : undefined,
            borderRadius: style && style['border-radius'] ? clearPxOrPercent(style['border-radius'], true) : undefined,
            borderCorner: style && style['border-corner'] || undefined,
            borderWidth: borderWidth ? clearPxOrPercent(borderWidth, true) : 0,
            borderStyle: style && style['border-style'] || undefined,
            borderColor: style && style['border-color'] || undefined,
            opacity: style && style['opacity'] || undefined
        };
    }

    renderFontSizeField = () => {
        const { name, property, activeField } = this.props;
        const { fontSize } = this.state;

        return (
            <div className="panel-item-content">
                <Select
                    label={property.label}
                    additionalClass={property.additionalClass}
                    value={`${fontSize}`}
                    options={property.options}
                    onChange={this.fieldPropertyChange.bind(this, {})}
                />
            </div>
        );
    };

    renderFontFamilyField = () => {
        const { name, property, activeField } = this.props;
        const { fontFamily } = this.state;

        return (
            <div className="panel-item-content">
                <Select
                    label={property.label}
                    additionalClass={property.additionalClass}
                    value={fontFamily}
                    options={property.options}
                    onChange={this.fieldPropertyChange.bind(this, {})}
                />
            </div>
        );
    };

    renderColorField = () => {
        const { name, property, activeField } = this.props;
        const { backgroundColor, color } = this.state;
        let value = undefined;

        switch (property.styleKey) {
            case 'backgroundColor':
                value = backgroundColor;
                break;
            default:
                value = color;
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

    renderIconLists = () => {
        return (
            <IconLists params={{ key: 'iconLists' }} onSelect={this.fieldPropertyChange.bind(this)} />
        )
    };

    renderUploadField = () => {
        const { name, property, activeField } = this.props;

        return (
            <div className="panel-item-content">
                <span className="label">Upload Image</span>
                <div className="upload-button">
                    <input type="file" accept="image/*" onChange={this.fileUploadHandler} />
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
                        {renderSwipedInput({
                            type: "number",
                            defaultValue: width,
                            onChange: this.fieldDynamicChangeHandler.bind(this, { key: 'width' }),
                            label: 'Width'
                        })}
                    </div>
                    <i className="fas fa-link link"></i>
                    <div className="height">
                        {renderSwipedInput({
                            type: "number",
                            defaultValue: height,
                            onChange: this.fieldDynamicChangeHandler.bind(this, { key: 'height' }),
                            label: 'Height'
                        })}
                    </div>
                </div>
            </div>
        )
    };

    renderBorderRadiusField = () => {
        const { name, property, activeField } = this.props;
        const { borderRadius } = this.state;

        return (
            <div className="panel-item-content">
                <span className="label">Radius</span>
                <input
                    type="number"
                    placeholder=""
                    defaultValue={borderRadius}
                    onChange={this.fieldDynamicChangeHandler.bind(this, { key: 'borderRadius' })}
                />
            </div>
        )
    };

    renderBorderField = () => {
        const { name, property, activeField } = this.props;
        const { borderCorner, borderWidth, borderStyle, borderColor } = this.state;
        console.log("CORNER::", borderCorner)
        return (
            <div className="panel-item-content">
                <span className="label">Border</span>
                <div className="inputs">
                    <div className="select-item">
                        <Select
                            label="Corner"
                            additionalClass=""
                            value={borderCorner}
                            options={[
                                { value: 'borderWidth', label: 'all' },
                                { value: 'borderLeftWidth', label: 'Left' },
                                { value: 'borderRightWidth', label: 'Right' },
                                { value: 'borderTopWidth', label: 'Top' },
                                { value: 'borderBottomWidth', label: 'Bottom' },
                            ]}
                            onChange={this.fieldDynamicChangeHandler.bind(this, { key: 'borderCorner' })}
                        />
                    </div>
                    <div className="select-item">
                        <Select
                            label="Type"
                            additionalClass=""
                            value={borderStyle}
                            options={[
                                { value: 'solid', label: 'solid' },
                                { value: 'dashed', label: 'dashed' },
                                { value: 'dotted', label: 'dotted' },
                                { value: 'groove', label: 'groove' },
                                { value: 'ridge', label: 'ridge' },
                            ]}
                            onChange={this.fieldDynamicChangeHandler.bind(this, { key: 'borderStyle' })}
                        />
                    </div>
                    <div className="input-item">
                        <span className="label">Thickness</span>
                        <input
                            type="number"
                            placeholder="Thickness"
                            max="50"
                            defaultValue={borderWidth}
                            onChange={this.fieldDynamicChangeHandler.bind(this, { key: 'borderWidth' })}
                        />
                    </div>
                    <div className="color-item">
                        <ColorPicker
                            type="box"
                            label="Color"
                            additionalClass="inline"
                            position="right"
                            defaultValue={borderColor}
                            onChange={this.fieldDynamicChangeHandler.bind(this, { key: 'borderColor' })}
                        />
                    </div>
                </div>
            </div>
        )
    };

    renderOpacityField = () => {
        const { name, property, activeField } = this.props;
        const { opacity } = this.state;

        return (
            <div className="panel-item-content">
                <span className="label">Opacity</span>
                <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue={Number(opacity) * 100}
                    onChange={this.fieldDynamicChangeHandler.bind(this, { key: 'opacity' })}
                />
            </div>
        );
    }

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
            case 'iconLists':
                field = this.renderIconLists();
                break;
            case 'uploadFile':
                field = this.renderUploadField();
                break;
            case 'size':
                field = this.renderSizeField();
                break;
            case 'borderRadius':
                field = this.renderBorderRadiusField();
                break;
            case 'border':
                field = this.renderBorderField();
                break;
            case 'opacity':
                field = this.renderOpacityField();
                break;
        }

        return (
            <div className="panel-item" name={name}>
                {field}
            </div>
        )
    }

    fileUploadHandler = (event) => {
        const { name, property, activeField, onImageUploaderStart } = this.props;
        if (property.crop && onImageUploaderStart) {
            onImageUploaderStart(event.target.files[0]);
            event.target.value = "";
        }
    };

    boxesClickHandler = ({ boxFieldName, styleKey, styleValueTrue, styleValueFalse }) => {
        this.setState(prevState => ({
            [boxFieldName]: (prevState[boxFieldName] === styleValueTrue) ? styleValueFalse : styleValueTrue
        }), () => {
            this.fieldPropertyChange({ boxFieldName, styleKey });
        });
    };

    fieldDynamicChangeHandler = ({ key }, event) => {
        this.setState({
            [key]: event.value || (event.target && event.target.value)
        }, () => {
            this.fieldPropertyChange({ styleKey: key });
        });
    };

    fieldPropertyChange = (additional, values, context) => {
        const { name, activeField, onPropertyChange } = this.props;
        let style = "";
        let value = null;

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
            case 'iconLists':
                value = {
                    iconType: additional.value.type,
                    iconValue: additional.value.text
                };
                break;
            case 'size':
                style = {
                    [additional.styleKey]: `${this.state[additional.styleKey]}px`
                }
                break;
            case 'borderRadius':
                style = {
                    [additional.styleKey]: `${this.state[additional.styleKey]}px`
                };
                break;
            case 'border':
                style = {};

                if (additional.styleKey === 'borderCorner') {
                    style.borderCorner = `${this.state['borderCorner']}`;
                } else if (additional.styleKey === 'borderWidth') {
                    style.borderWidth = `${this.state['borderWidth']}px`;
                } else if (additional.styleKey === 'borderStyle') {
                    style.borderStyle = this.state['borderStyle'];
                } else if (additional.styleKey === 'borderColor') {
                    style.borderColor = this.state['borderColor'];
                }

                break;
            case 'opacity':
                style = {
                    [additional.styleKey]: this.state[additional.styleKey]
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

        if (value) {
            onPropertyChange({
                fid: activeField.fid,
                pageID: activeField.pageID,
                value,
            });
        }
    }
};

export default RightPanelItem;