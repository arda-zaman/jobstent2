import React from 'react';
import TextfieldAuto from 'react-textarea-autosize';
import PropTypes from 'prop-types';

class Textfield extends React.Component {
  inputBlur = (path, e) => {
    const { onBlur } = this.props;

    if (onBlur) {
      onBlur({ type: 'input', value: e.target.value, path, original: e })
    }
  }

  inputFocus = (path, e) => {
    const { onFocus } = this.props;

    if (onFocus) {
      onFocus({ type: 'input', value: e.target.value, path, original: e })
    }
  }


  render() {
    const uniqueID = this.props.fid;

    return (
      <div className={`text-field ${this.props.fieldClass ? this.props.fieldClass : ''}`}>
        {this.props.maxRows === 1 ? (
          <input
            type="text"
            id={uniqueID}
            data-type={this.props.type ? this.props.type : 'type1'}
            className={`g-input ${this.props.additionalClass ? this.props.additionalClass : ''}`}
            defaultValue={this.props.defaultValue}
            onBlur={this.inputBlur.bind(this, this.props.path)}
            onFocus={this.inputFocus.bind(this, this.props.path)}
            placeholder={this.props.placeholder ? this.props.placeholder : ''}
            style={this.props.style}
            data-special-features={this.props.specialFeature}
            field-type="input"
          />
        ) : (
            <TextfieldAuto
              id={uniqueID}
              data-type={this.props.type ? this.props.type : 'type1'}
              className={`g-input ${this.props.additionalClass ? this.props.additionalClass : ''}`}
              defaultValue={this.props.defaultValue}
              placeholder={this.props.placeholder ? this.props.placeholder : ''}
              onBlur={this.inputBlur.bind(this, this.props.path)}
              onFocus={this.inputFocus.bind(this, this.props.path)}
              maxRows={this.props.maxRows}
              style={this.props.style}
              data-special-features={this.props.specialFeature}
              field-type="input"
            />
          )}
      </div>
    )
  }
}

Textfield.propTypes = {
  placeholder: PropTypes.string
};

Textfield.defaultProps = {
  placeholder: ''
};

export default Textfield;