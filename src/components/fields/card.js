
import React from 'react';
import PropTypes from 'prop-types';
import Icon from "./icon";

class Card extends React.Component {
  render() {
    const { title, children, additionalClass } = this.props;

    return (
      <div className={`card ${additionalClass}`}>
        {title && (
          <div className="card-title">
            {title.icon && <Icon icon={title.icon} />}
            {title.text && <strong>{title.text}</strong>}
          </div>
        )}
        <div className="card-content">
          {children}
        </div>
      </div>
    )
  }
};

Card.propTypes = {
  additionalClass: PropTypes.string,
  title: PropTypes.shape({
    icon: PropTypes.shape({
      type: PropTypes.string,
      text: PropTypes.string
    }),
    text: PropTypes.string
  }),
};

Card.defaultProps = {
  additionalClass: '',
  title: null,
};

export default Card;