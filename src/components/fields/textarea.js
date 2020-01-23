import React from 'react';
import PropTypes from 'prop-types';

class Textarea extends React.PureComponent {
  onInput = e => {
    // console.log(e, "::", e.target, '::', e.target.textContent);
  }

  onBlur = e => {
    const { onBlur } = this.props;
    onBlur({ val: e.target.textContent, event: e });
  };

  render() {
    const { editable, defaultValue } = this.props;

    return (
      <div className="textarea">
        <div
          contentEditable={editable}
          onInput={this.onInput}
          onBlur={this.onBlur}
        >
          {defaultValue}
        </div>
      </div>
    )
  }
}

Textarea.propTypes = {
  editable: PropTypes.bool,
  defaultValue: PropTypes.string,
  onBlur: PropTypes.func
}

Textarea.defaultProps = {
  editable: true,
  defaultValue: '',
  onBlur: () => { }
}
export default Textarea