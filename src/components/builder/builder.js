import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import LeftPanel from './leftPanel';
import Content from './content';
import RightPanel from './rightPanel';
import * as builderActions from '../../actions/builder';
import * as templateActions from '../../actions/template';

class Builder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      templateStatus: false,
      builderMenuDimensions: {},
      uploadImageSettings: {
        active: false,
        event: null
      },
      urlBoxOpened: false
    }
  }

  componentDidMount() {
    this.initTemplate();
  }

  initTemplate = () => {
    const { onInitResume, onGenerateResume, resumeID } = this.props;

    const result = onGenerateResume(resumeID);

    result.then(res => {
      if (res) {
        this.setState({
          templateStatus: 'loaded'
        });
      } else {
        this.setState({
          templateStatus: 'not_found'
        });
      }
    })
  }

  render() {
    const { templateStatus, zoom, builderMenuDimensions } = this.state;
    const { builder: { activeSection } } = this.props;

    // if (!templateStatus) return <div>Loading...</div>

    // if (templateStatus == 'not_found') {
    //   return (
    //     <div className="not_found">
    //       <p>Resume couldn't found</p>
    //     </div>
    //   )
    // }

    return (
      <div className="create-resume">
        <Helmet>
          <title>Resume Builder</title>
        </Helmet>
        <div className="create-resume-container">
          <LeftPanel />

          <Content />

          <RightPanel />
        </div>
      </div>
    )
  }

  addImageFromUrl = () => {
    const { onProfileImageAdd, onChangeActiveLayout } = this.props;
    onProfileImageAdd(this.refs.profileImageUrl.value);

    this.setState({
      urlBoxOpened: false
    }, () => {
      onChangeActiveLayout({ process: 'removeSection' });
    });
  };

  uploadProfileImage = (event) => {
    this.setState({
      uploadImageSettings: {
        active: true,
        files: event.target.files
      }
    });
  };
}

Builder.propTypes = {};

Builder.defaultProps = {
};

const mapStateToProps = (state) => ({
  builder: state.builder,
  template: state.template
});

const mapDispatchToProps = {
  onFieldClick: builderActions.fieldClick,
  onFieldChange: builderActions.fieldChange,
  onIsPropertyChanged: builderActions.isPropertyChanged,
  onAddElementToTemplate: builderActions.addElementToTemplate,
  onProfileImageAdd: builderActions.profileImageAdd,
  onSortFields: builderActions.sortFields,
  onChangeActiveLayout: builderActions.changeActiveLayout,
  onChangeActiveElement: builderActions.changeActiveElement,

  onInitResume: templateActions.initResume,
  onGenerateResume: templateActions.generateResume,
};

export default connect(mapStateToProps, mapDispatchToProps)(Builder);