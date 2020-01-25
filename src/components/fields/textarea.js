import React from 'react';
import PropTypes from 'prop-types';
import { filterContentEditableText } from '../../helpers';

class Textarea extends React.PureComponent {
  onInput = e => {
    // console.log(e, "::", e.target, '::', e.target.textContent);
  }

  onBlur = e => {
    const { onBlur } = this.props;
    onBlur({ val: e.target.innerText, event: e });
  };

  render() {
    const { editable, defaultValue, className } = this.props;

    return (
      <div className="textarea">
        <p
          className={className}
          contentEditable={editable}
          onInput={this.onInput}
          onBlur={this.onBlur}
        >
          {defaultValue}
        </p>
      </div>
    )
  }
}

Textarea.propTypes = {
  editable: PropTypes.bool,
  defaultValue: PropTypes.string,
  onBlur: PropTypes.func,
  className: PropTypes.string
}

Textarea.defaultProps = {
  editable: true,
  defaultValue: '',
  className: '',
  onBlur: () => { }
}
export default Textarea