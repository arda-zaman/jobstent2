import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RightPanelItem from './rightPanelItem';
import { Button, Icon } from '../fields';
import * as builderActions from '../../actions/builder';
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
    const { builder: { activeField, activePage } } = this.props;
    let property = null;
    if (!activeField) return <div>Empty fields</div>;

    const properties = field_properties[activeField.type];
    console.log(field_properties);

    return (
      <div className="field-settings">
        <div className="field-settings-content">

          {activeField && (
            <div className="subgroup" data-menu-item="input">
              <div className="title">
                <span>General Settings</span>
                <i className="material-icons">arrow_drop_down</i>
              </div>
              <div className="subgroup-content">
                {Object.keys(properties).map(p => {
                  property = properties[p];
                  return (
                    <RightPanelItem
                      name={p}
                      property={property}
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
  onRightPanelMenuSwitch: builderActions.rightPanelMenuSwitch,
};

export default connect(mapStateToProps, mapDispatchToProps)(RightPanel);