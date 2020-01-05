
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from './loader';
import * as uiActions from '../../actions/ui';

class Modal extends React.PureComponent {
  closeModal = () => {
    const { onCloseModal } = this.props;
    onCloseModal();
  }

  renderDownloadModal = () => {
    const { ui: { modal } } = this.props;

    return (
      <div className={`modal-outside-content ${modal.type}`}>
        <div className="modal-title" onClick={this.closeModal}>
          <span>{modal.title}</span>
          <i className="far fa-times-circle"></i>
        </div>
        <div
          className="modal-content"
          generateStatus={modal.pdfGenerateStatus == 'generating' ? 'generating' : 'generated'}
        >
          <div className="generating">
            <p>Your resume is creating.</p>
            <span className="bold lowText">Please Wait...</span>

            <Loader
              type="material_line"
              active={true}
              color="red"
            />
          </div>

          <div className="generated">
            <p>Your resume is ready.</p>
            <a className="btn" href={modal.downloadLink} download>Click to Download</a>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { ui: { modal } } = this.props;
    let modalDom = null;

    switch (modal.type) {
      case 'generic':
        break;
      case 'download':
        modalDom = this.renderDownloadModal();
        break;
    };

    const container = (
      <div
        className={`modal`}
        active={modal.active ? "true" : "false"}
        type={modal.type}
      >
        <div className="modal-inside-container">
          <div className="modal-background" />
          <div className="modal-container">
            {modalDom}
          </div>
        </div>
      </div>
    );

    return container;
  }
};

// Modal.propTypes = {
//   modalType: PropTypes.string.isRequired,
//   title: PropTypes.string,
//   modalContent: PropTypes.string,
//   active: PropTypes.bool,
//   pdfGenerateStatus: PropTypes.bool
// };

// Modal.defaultProps = {
//   modalType: 'general',
//   title: '',
//   active: false,
//   pdfGenerateStatus: false
// };

const mapStateToProps = (state) => {
  return {
    ui: state.ui
  }
};

const mapDispatchToProps = {
  onCloseModal: uiActions.closeModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);