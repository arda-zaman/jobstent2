
import React from 'react';
import PropTypes from 'prop-types';
import Loader from './loader';

class Modal extends React.Component {

  renderDownloadModal = () => {
    const { title, pdfGenerateStatus, downloadLink, type } = this.props;

    return (
      <div className={type}>
        <div className="modal-title">
          <span>{title}</span>
          <i class="far fa-times-circle"></i>
        </div>
        <div
          className="modal-content"
          generateStatus={pdfGenerateStatus == 'generating' ? 'generating' : 'generated'}
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
            <p>Your resume is created.</p>
            <a href={downloadLink}>Click to Download</a>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { type, active } = this.props;
    let modal = null;

    switch (type) {
      case 'generic':
        break;
      case 'download':
        modal = this.renderDownloadModal();
        break;
    };

    const container = (
      <div
        className={`modal`}
        active={active}
        type={type}
      >
        <div className="modal-inside-container">
          <div className="modal-background" />
          <div className="modal-container">
            {modal}
          </div>
        </div>
      </div>
    );

    return container;
  }
};

Modal.propTypes = {
  modalType: PropTypes.string.isRequired,
  title: PropTypes.string,
  modalContent: PropTypes.string,
  active: PropTypes.bool,
  pdfGenerateStatus: PropTypes.bool
};

Modal.defaultProps = {
  modalType: 'general',
  title: '',
  active: false,
  pdfGenerateStatus: false
};

export default Modal;