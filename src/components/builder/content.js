import React from 'react';
import { connect } from 'react-redux';
import TemplateContainer from './template';
import * as builderActions from '../../actions/builder';
import * as templateActions from '../../actions/template';

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      templateStatus: false,
      zoom: {
        width: 892.5,
        height: 1263,
        percent: 100
      },
      builderMenuDimensions: {},
      uploadImageSettings: {
        active: false,
        event: null
      },
      urlBoxOpened: false
    }
  }

  generateResumeTemplate = () => {
    const { template, builder } = this.props;

    return (
      <TemplateContainer
        pages={template.pages}
        layouts={template.layouts}
        activeField={builder.activeField}
        fields={template.items}
        zoom={this.state.zoom}
        actions={{
          createItem: this.props.onCreateResumeItem,
          updateItem: this.props.onUpdateResumeItem,
          addNewPage: this.props.onAddNewResumePage,
          removePage: this.props.onRemoveResumePage,
          makeFieldActive: this.props.onMakeFieldActive,
        }}
        helpers={{
          getFieldDefault: builderActions.getFieldDefault
        }}
      />
    );
  }

  zoomer = (process) => {
    const { zoom } = this.state;
    if (process === 'increase' && zoom.percent <= 150) {
      // zoom.width = zoom.width * 1.2;
      // zoom.height = zoom.height * 1.2;
      zoom.percent += 25;
      // zoom.transform = `scale(${zoom.percent / 100})`;
    } else if (process === 'decrease' && zoom.percent > 50) {
      // zoom.width = zoom.width / 1.2;
      // zoom.height = zoom.height / 1.2;
      zoom.percent -= 25;
      // zoom.transform = `scale(${zoom.percent / 100})`;
    }

    // document.querySelector('.g-resume-container').style.transform = zoom.transform;

    this.setState({
      zoom
    });
  };

  render() {
    const { builder: { activeSection } } = this.props;
    const { templateStatus, zoom, builderMenuDimensions } = this.state;

    return (
      <div className="content">
        <div className="resume-area">
          <div className="resume-content">
            <div className="resume">
              {this.generateResumeTemplate()}
            </div>

            {activeSection && (
              <div className="builder-menu" style={{ left: builderMenuDimensions.x, top: builderMenuDimensions.y - 110 }}>
                <div className="builder-menu-content">
                  {['profilePicture', 'fullname'].indexOf(activeSection) == -1 && (
                    <React.Fragment>
                      <button type="button" onClick={this.addItemToSection}>+ Add Item</button>
                      <button type="button">Order</button>
                    </React.Fragment>
                  )}

                  {activeSection == 'profilePicture' && (
                    <div className="upload-image">
                      <div className="from-pc">
                        <input type="file" onChange={this.uploadProfileImage} />
                        <strong>Upload Image</strong>
                      </div>
                      <div className="from-url">
                        <strong className="url-box-text" onClick={() => this.setState({ urlBoxOpened: !this.state.urlBoxOpened })}>Add with URL</strong>
                        <div className={`url-box ${this.state.urlBoxOpened ? 'active' : ''}`}>
                          <input type="text" placeholder="Profile Image URL" ref="profileImageUrl" />
                          <button type="button" onClick={this.addImageFromUrl}>Save</button>
                        </div>
                      </div>
                    </div>
                  )}

                  <button type="button" onClick={this.disableSection}><i className="material-icons">delete</i></button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bottom-bar">
          <div className="zoomer">
            <i className="material-icons">remove_red_eye</i>
            <i className="material-icons cursor" onClick={this.zoomer.bind(this, 'decrease')}>remove</i>
            <span>{zoom.percent}%</span>
            <i className="material-icons cursor" onClick={this.zoomer.bind(this, 'increase')}>add</i>
          </div>
        </div>

        <div className="modals">
          {this.state.uploadImageSettings.active && (
            <div id="uploadProfilePicture">
              <UploadImage files={this.state.uploadImageSettings.files} />
            </div>
          )}
        </div>
      </div>
    )
  }
}

Content.propTypes = {};

Content.defaultProps = {
};

const mapStateToProps = (state) => ({
  builder: state.builder,
  template: state.template
});

const mapDispatchToProps = {
  onCreateResumeItem: templateActions.createResumeItem,
  onUpdateResumeItem: templateActions.updateResumeItem,
  onAddNewResumePage: templateActions.addNewResumePage,
  onRemoveResumePage: templateActions.removeResumePage,
  onMakeFieldActive: builderActions.makeFieldActive
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);