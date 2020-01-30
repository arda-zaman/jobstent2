import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RightPanelItem from './rightPanelItem';
import { Button, Icon } from '../fields';
import * as builderActions from '../../actions/builder';
import * as templateActions from '../../actions/template';
import * as uiActions from '../../actions/ui';
import { field_properties } from '../../constants/Fields';

class RightPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openedDownloadModal: false,
      pdfGenerateStatus: 'generating'
    }
  }

  generatePDF = () => {
    const { onGeneratePDF } = this.props;
    onGeneratePDF();
  };

  menuClickHandler = (e) => {
    const { onRightPanelMenuSwitch } = this.props;
    const dataMenu = e.target.getAttribute('data-menu');

    onRightPanelMenuSwitch(dataMenu);
  };

  renderFieldSettings = () => {
    const parsedPath = [];
    const { builder: { activeField, activePage }, onUpdateResumeItem, onImageUploaderStart } = this.props;
    let property = null;
    if (!activeField) return (
      <div className="not-selected-field">
        {/* <img src={require('../../assets/images/touch.png')} alt="" /> */}
        <i className="material-icons">touch_app</i>
        <span>Select a field to see the panel</span>
      </div>
    );

    const properties = field_properties[activeField.type];

    return (
      <div className="field-settings">
        <div className="field-settings-content">

          {activeField && (
            <div className="subgroup" data-menu-item="input">
              {/* <div className="title">
                <span>General Settings</span>
                <i className="material-icons">arrow_drop_down</i>
              </div> */}
              <div className="subgroup-content">
                {Object.keys(properties).map(p => {
                  property = properties[p];
                  return (
                    <RightPanelItem
                      name={p}
                      property={property}
                      activeField={activeField}
                      onPropertyChange={onUpdateResumeItem}
                      onImageUploaderStart={onImageUploaderStart}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

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
          <div className="panel-title">
            <i className="material-icons">style</i>
            <strong>Styling & Settings</strong>
          </div>

          <div className="tabs">
            <ul onClick={this.menuClickHandler}>
              <li data-menu="field-settings">Field Settings</li>
              <li data-menu="template-style">Templates</li>
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
  onRightPanelMenuSwitch: builderActions.rightPanelMenuSwitch,
  onUpdateResumeItem: templateActions.updateResumeItem,
  onImageUploaderStart: builderActions.imageUploaderStart
};

export default connect(mapStateToProps, mapDispatchToProps)(RightPanel);