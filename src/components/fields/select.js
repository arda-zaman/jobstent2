import React from 'react';
import CustomSelect from 'react-select'
import PropTypes from 'prop-types';


class Select extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectValue: null
    }
  }
  componentWillMount() {
    this.init(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.init(nextProps);
    }
  }

  init = (props) => {
    const { options } = props;
    let val = options.find(option => option.value === props.value);

    if (!val) {
      val = {};
    }

    this.setState({
      selectValue: val
    });
  };

  selectChangeHandler = (options) => {
    const { onChange } = this.props;

    this.setState({
      selectValue: options
    });

    if (onChange) {
      onChange(options);
    }
  }

  render() {
    const { height, placeholder, options, label, additionalClass } = this.props;
    const { selectValue } = this.state;

    const styles = {
      control: (base, state) => ({
        ...base,
        minHeight: height,
        height,
        boxShadow: state.isFocused ? 0 : 0,
        borderColor: state.isFocused
          ? '#ba5b5b'
          : base.borderColor,
        '&:hover': {
          borderColor: state.isFocused
            ? '#ba5b5b'
            : base.borderColor,
        }
      }),
      container: (base) => ({
        ...base,
        fontSize: 14,
      }),
      input: (base) => ({
        ...base,
        height,
        fontSize: 13
      }),
      dropdownIndicator: (base) => ({
        ...base,
        paddingTop: 0,
        paddingBottom: 0,
      }),
      clearIndicator: (base) => ({
        ...base,
        paddingTop: 0,
        paddingBottom: 0,
      }),
      valueContainer: base => ({
        ...base,
        paddingTop: 0,
        paddingBottom: 0,
        height
      })
    };
    return (
      <div className={`select-field ${additionalClass}`}>
        <span className="select-label">{label}</span>
        <CustomSelect
          placeholder={placeholder}
          styles={styles}
          options={options}
          value={selectValue}
          onChange={this.selectChangeHandler}
        />
      </div>
    )
  }
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  height: PropTypes.number,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  additionalClass: PropTypes.string
};

Select.defaultProps = {
  height: 30,
  placeholder: "Select",
  label: "",
  additionalClass: ""
}

export default Select;