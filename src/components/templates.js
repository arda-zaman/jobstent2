import React from 'react';
import TemplateContainer from './builder/template';
import { connect } from 'react-redux';
import * as templateActions from '../actions/template';

class Templates extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoad: false
    }
  }
  componentDidMount() {
    this.getResume();
  }

  getResume = async () => {
    const { templateID, userID, onFetchResume } = this.props;
    console.log(this.props);
    const res = await onFetchResume(templateID, userID);
    if (res) {
      this.setState({
        isLoad: true
      });
    }
  }

  render() {
    const { isLoad } = this.state;
    if (!isLoad) return <div class="loading">loading..</div>

    const { template } = this.props;

    return (
      <div className="templates renderPDF">
        <TemplateContainer
          pages={template.pages}
          layouts={template.layouts}
          fields={template.items}
          renderPDF={true}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    template: state.template
  }
}

const mapDispatchToProps = {
  onFetchResume: templateActions.fetchResume
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Templates);
