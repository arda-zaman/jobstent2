import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { renderField, RenderFieldGroup } from '../../helpers/builder';
import { Button, Icon } from '../fields';
import * as builderActions from '../../actions/builder';


class RightPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  generatePDF = () => {
    const { onGeneratePDF } = this.props;
    onGeneratePDF();
  };

  renderRightPanelFields = () => {
    const { builder: { activeSection, activeLayout, activePath } } = this.props;
    let dom = null;
    let activeField = null;

    if (activeField === 'general') {
      dom = (
        <RenderFieldGroup {...{
          panelType: 'template-settings',
          title: 'Template Settings',
          icon: {
            type: 'font-awesome',
            text: 'fas fa-pencil-ruler',
            size: 16
          },
          subFieldGroup: [{
            type: 'fonts',
            title: 'Font',
            icon: {
              type: 'material-icons',
              text: 'text_format',
              size: 22
            },
            fields: [
              {
                type: 'fontFamily',
                initialValue: ''
              }, {
                type: 'fontSize',
                initialValue: ''
              }
            ]
          }, {
            type: 'colors',
            title: 'Color',
            icon: {
              type: 'material-icons',
              text: 'color_lens',
              size: 22
            },
            fields: [
              {
                type: 'colorPicker',
                label: 'Main Color',
                initialValue: '',
                additionalClass: 'inline',
                position: "right"
              }, {
                type: 'colorPicker',
                label: 'Sidebar Color',
                initialValue: '',
                additionalClass: 'inline',
                position: "right"
              }
            ]
          }],
        }} />
      )
    } else if (activeField === 'icon') {
      dom = (
        <RenderFieldGroup {...{
          panelType: 'icon-settings',
          title: 'Icon Settings',
          icon: {
            type: 'font-awesome',
            text: 'fas fa-icons',
            size: 16
          },
          subFieldGroup: [
            {
              fields: [
                {
                  type: 'icon-library'
                }
              ]
            }
          ]
        }} />
      )
    }

    return dom;
  };

  menuClickHandler = (e) => {
    const { onRightPanelMenuSwitch } = this.props;
    const dataMenu = e.target.getAttribute('data-menu');

    onRightPanelMenuSwitch(dataMenu);
  };

  renderFieldSettings = () => {
    const parsedPath = [];
    const { builder: { activeElement, activeSection, activeLayout } } = this.props;

    return (
      <div className="field-settings">
        <div className="field-settings-content">
          {activeElement && (
            <div className="subgroup" data-menu-item="input">
              <div className="title">
                <span>Input Settings</span>
                <i className="material-icons">arrow_drop_down</i>
              </div>
              <div className="subgroup-content">
                {activeElement['data-special-features'] && (
                  this.renderSpecialFeatures(activeElement['data-special-features'])
                )}

                {this.renderSubgroupField(activeElement)}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  renderSubgroupField = (activeElement) => {
    const dom = [];

    if (activeElement['field-type'] === 'input') {
      dom.push(
        <div className="panel-group">
          <div className="panel-title">
            <Icon icon={{
              type: 'material-icons',
              text: 'text_format',
            }} size={22} />
            <strong>Font</strong>
          </div>
          <div className="panel-item-content">
            {renderField({ element: 'fontSize' })}
            {renderField({ element: 'fontFamily' })}
          </div>
        </div>
      );

      dom.push(
        <div className="panel-group">
          <div className="panel-title">
            <Icon icon={{
              type: 'material-icons',
              text: 'color_lens',
            }} size={22} />
            <strong>Text Style</strong>
          </div>
          <div className="panel-item-content">
            {renderField({
              element: {
                type: 'colorPicker',
                label: 'Text Color',
                initialValue: '',
                additionalClass: 'inline',
                position: "right"
              }
            })}

            {renderField({
              element: {
                type: 'bold/italic/strikethrough',
                label: 'Bold & Italic & Strikethrough'
              }
            })}
          </div>
        </div>
      );

      dom.push(
        <div className="panel-group">
          <div className="panel-title">
            <Icon icon={{
              type: 'font-awesome',
              text: 'fas fa-pen-fancy',
            }} size={22} />
            <strong>Alignment</strong>
          </div>
          <div className="panel-item-content">
            {renderField({
              element: {
                type: 'alignment_horizontal',
                label: 'Horizontal'
              }
            })}

            {renderField({
              element: {
                type: 'alignment_vertical',
                label: 'Vertical'
              }
            })}
          </div>
        </div>
      );
    } else if (activeElement['field-type'] === 'icon') {
      dom.push(
        <div className="panel-group">
          <div className="panel-title">
            <Icon icon={{
              type: 'material-icons',
              text: 'text_format',
            }} size={22} />
            <strong>Icon Settings</strong>
          </div>
          <div className="panel-item-content">
            {renderField({
              element: {
                type: 'icon-library'
              }
            })}

            {renderField({
              element: {
                type: 'fontSize',
                label: 'Icon Size'
              }
            })}
          </div>
        </div>
      );

    }

    return dom;
  };

  renderSpecialFeatures = (specialFeature) => {
    const features = specialFeature.split('|');
    let field = null;
    features.map(feature => {
      switch (feature) {
        case 'date':
          return field = renderField({ element: 'dateField' });
      }
    });

    return field;
  };

  renderTemplateStyle = () => {

    return (
      <div className="template-style">
        Template Style
      </div>
    )
  }

  render() {
    const { rightPanel: { activeMenu } } = this.props;

    return (
      <aside className="right-panel">
        <div className="right-panel-container">
          <div className="tabs">
            <ul onClick={this.menuClickHandler}>
              <li data-menu="field-settings">Field Settings</li>
              <li data-menu="template-style">Template Style</li>
            </ul>
            <span className="line" data-menu={activeMenu}></span>
          </div>
          <div className="right-panel-content">
            {activeMenu === 'field-settings' && this.renderFieldSettings()}
            {activeMenu === 'template-style' && this.renderTemplateStyle()}
          </div>
        </div>

        <div className="right-panel-bottom">
          <Button
            type="button"
            dataType="type1"
            size="big"
            classNames="download-btn"
            iconPosition="left"
            text="Download PDF"
            iconData={{
              type: 'font-awesome',
              text: 'fas fa-file-download'
            }}
            click={this.generatePDF}
          />
        </div>
      </aside>
    )
  }
}

RightPanel.propTypes = {

};

RightPanel.defaultProps = {

};

const mapStateToProps = (state) => {
  return {
    template: state.template,
    rightPanel: state.rightPanel,
    builder: state.builder
  }
}

const mapDispatchToProps = {
  onGeneratePDF: builderActions.generatePDF,
  onRightPanelMenuSwitch: builderActions.rightPanelMenuSwitch
};

export default connect(mapStateToProps, mapDispatchToProps)(RightPanel);