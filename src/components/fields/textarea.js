import React from 'react';
import PropTypes from 'prop-types';

class Textarea extends React.PureComponent {
  onInput = e => {
    // console.log(e, "::", e.target, '::', e.target.textContent);
  }

  render() {
    const { editable, defaultValue } = this.props;

    return (
      <div className="textarea">
        <div
          contentEditable={editable}
          onInput={this.onInput}
        >
          {defaultValue}
        </div>
      </div>
    )
  }
}

Textarea.propTypes = {
  editable: PropTypes.bool,
  defaultValue: PropTypes.string
}

Textarea.defaultProps = {
  editable: true,
  defaultValue: ''
}
export default Textarea